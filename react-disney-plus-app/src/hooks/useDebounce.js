import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounecValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounecValue(value)
    }, delay);
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  return debounceValue
}