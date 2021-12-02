import {useSession} from 'next-auth/react'
import {useCallback, useEffect, useState} from 'react'
const emailRegex = /(^\S{6,20}@\S+\.\S{2,}$)/g,
  passwordRegex = /^([\w\d-_]{6,20})$/g
export default function useAuth(userDataArr) {
  const {data: session, status} = useSession()
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    image: '',
    isAuthenticated: false,
  })
  const [field, setField] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    if (session) {
      const {
        user: {name, email, image},
      } = session

      setProfile(prev => {
        return {
          ...prev,
          name: name,
          email: email,
          image: image,
        }
      })
    }
    if (window?.sessionStorage.getItem('user-info')) {
      const data = JSON.parse(window?.sessionStorage.getItem('user-info'))
      setProfile(prev => {
        return {
          ...prev,
          name: data.name,
          email: data.email,
          image: data.image,
          isAuthenticated: true,
        }
      })
    }
  }, [session, status])
  useEffect(() => {
    if (status === 'authenticated') {
      setProfile(prev => {
        return {
          ...prev,
          isAuthenticated: true,
        }
      })
    }
    if (status === 'loading') {
      setProfile(prev => {
        return {
          ...prev,
          isAuthenticated: 'loading',
        }
      })
    }
  }, [status])

  const handleOnChange = e =>
    setField(prev => {
      return {
        ...prev,
        [e?.target?.name]: e.target.value.trim(),
      }
    })

  const validField = useCallback(() => {
    if (field.email === '' || field.password === '') return false
    const isEmailValid = !!field.email.match(emailRegex)
    const isPasswordValid = !!field.password.match(passwordRegex)
    if (!isEmailValid) {
      setError(prev => {
        return {
          ...prev,
          email: 'Email is invalid, try again',
        }
      })
    } else setError(prev => ({...prev, email: ''}))
    if (!isPasswordValid) {
      setError(prev => {
        return {
          ...prev,
          password: 'Password is invalid, try again',
        }
      })
    } else setError(prev => ({...prev, password: ''}))
  }, [field.email, field.password])

  const handleFocus = e => {
    error[`${e?.target?.name}`] !== '' &&
      setError(prev => {
        return {
          ...prev,
          [e?.target?.name]: '',
        }
      })
  }

  const handleSubmitForm = useCallback(
    e => {
      e.preventDefault()
      const hasError = Object.values(error).some(value => value !== '')
      if (hasError) return false
      const userValid = userDataArr.some(
        user =>
          user['email'] === field.email && user['password'] === field.password
      )
      if (userValid) {
        const userInformation = userDataArr.filter(
          v => v['email'] === field.email && v['password'] === field.password
        )[0]
        sessionStorage.setItem(
          'user-info',
          JSON.stringify({
            email: userInformation?.email,
            name: userInformation?.name,
            image: userInformation?.image,
          })
        )
        window.location.href = '/'
      } else
        setError(prev => {
          return {
            ...prev,
            form: 'User does not existed',
          }
        })
    },
    [error, field.email, field.password, userDataArr]
  )

  return {
    profile,
    session,
    field,
    error,
    handleOnChange,
    validField,
    handleFocus,
    handleSubmitForm,
  }
}
