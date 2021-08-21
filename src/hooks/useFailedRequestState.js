import { showErrorToast } from '@lib/toast-events'
import { useEffect } from 'react'

const useFailedRequestState = (errorRequestState, message) => {
  useEffect(() => {
    if (errorRequestState) {
      showErrorToast(message)
    }
  }, [errorRequestState])
}

export default useFailedRequestState
