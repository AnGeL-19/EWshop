import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export const useData = <T>(url:string, method:Method, data?:any) => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [value, setValue] = useState<T>()

  let options = {}
  switch (method.toUpperCase().trim()) {
      case 'GET':
          options = {
              method: 'GET',
              headers: {
                          'token': Cookies.get('token') || ''
                      }
          }
          break;
      default:
          options = {
              method,
              headers: {
                          'Content-type': 'application/json',
                          'token': Cookies.get('token') || ''
                      },
              body: JSON.stringify(data) 
          }
          break;
  }
  useEffect(() => {

    setLoading(true)
    fetch(`https://fakestoreapi.com/${url}`,options)
      .then((response) => response.json())
      .then((json) =>  setValue(json) )
      .catch((error) => {
          setError(error);
      })
      .finally(() => setLoading(false));

  }, [url]);

  return { data: value, loading, error };
}