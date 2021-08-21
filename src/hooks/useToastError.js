import { showErrorToast } from '@lib/toast-events'
import { useEffect } from 'react'

/**
 * @template T Error state type
 * @param {T} state Error state to be watched
 * @param {string} message Message to be displayed when error is truthy
 */
const useToastError = (state, message, callback) => {
  useEffect(() => {
    if (state) {
      console.log(state)
      showErrorToast(message)
      callback && callback()
    }
  }, [state])
}

export default useToastError
