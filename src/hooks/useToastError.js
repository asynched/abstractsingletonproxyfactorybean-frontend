import { showErrorToast } from '@lib/toast-events'
import { useEffect } from 'react'

/**
 * @template T Error state type
 * @param {T} errorState Error state to be watched
 * @param {string} toastErrorMessage Message to be displayed when error is truthy
 */
const useToastError = (errorState, toastErrorMessage) => {
  useEffect(() => {
    if (errorState) {
      showErrorToast(toastErrorMessage)
    }
  }, [errorState])
}

export default useToastError
