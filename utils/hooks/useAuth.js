import {useSession} from 'next-auth/react'
import {useEffect, useState} from 'react'

const emailRegex = new RegExp(/(^\S{6,20}@\S+\.\S{2,}$)/, 'g'),
  passwordRegex = new RegExp(/^([\w\d-_]{6,20})$/g, 'g')

export default function useAuth() {
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

  useEffect(() => {
    const invalidEmail = !emailRegex.test(field.email)
    if (invalidEmail && field.email !== '') {
      setError(prev => {
        return {
          ...prev,
          email: 'Email is invalid, try again',
        }
      })
    } else
      setError(prev => {
        return {
          ...prev,
          email: '',
        }
      })
  }, [field.email])

  useEffect(() => {
    const invalidPassword = !passwordRegex.test(field.password)
    if (invalidPassword && field.password !== '') {
      setError(prev => {
        return {
          ...prev,
          password: 'Password is invalid, try again',
        }
      })
    } else
      setError(prev => {
        return {
          ...prev,
          password: '',
        }
      })
  }, [field.password])

  return {profile, session, field, error, handleOnChange}
}
