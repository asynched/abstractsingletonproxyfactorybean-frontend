import { showErrorToast } from '@lib/toast-events'

export const failedRequestState = (errorState, message) => () => {
  if (errorState) {
    showErrorToast(message)
  }
}
