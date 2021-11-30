import {useSession} from 'next-auth/react'
import {useEffect, useState} from 'react'

export default function useAuth() {
  const {data: session, status} = useSession()
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    image: '',
    isAuthenticated: false,
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
  return {profile, session}
}
