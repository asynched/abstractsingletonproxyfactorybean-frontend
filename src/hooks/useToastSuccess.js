import { useEffect } from 'react'
import { showSuccessToast } from '@lib/toast-events'

const useToastSuccess = (state, message, callback = null) => {
  useEffect(() => {
    if (state) {
      console.log(state)
      showSuccessToast(message)
      callback && callback()
    }
  }, [state])
}

export default useToastSuccess
