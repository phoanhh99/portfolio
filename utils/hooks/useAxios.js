import {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import useSWR from 'swr'
export default function useAxios(method = '', url = '', body = {}) {
  const [state, setState] = useState({
    resData: {},
    errMes: '',
    loading: true,
  })

  const fetching = useCallback(
    async () =>
      await axios[method](url, JSON.stringify(body))
        .then(result => {
          setState(prev => {
            return {
              ...prev,
              resData: result.data,
            }
          })
        })
        .catch(error => {
          if (error.response) {
            setState(prev => {
              return {
                ...prev,
                errMes: `${error.response.status} : ${error.response.data}`,
              }
            })
          }
          if (error.request) {
            setState(prev => {
              return {
                ...prev,
                errMes: `${error.request.status} : ${error.request.data}`,
              }
            })
          }
        })
        .finally(() => {
          setState(prev => {
            return {
              ...prev,
              loading: false,
            }
          })
        }),
    [method, body, url]
  )

  useEffect(() => {
    fetching
  }, [fetching])

  const {data, error} = useSWR(url, fetching)

  return {state, data, error}
}
