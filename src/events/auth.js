import { dispatchAction } from '@lib/dispatch'
import { saveTokenToLocalStorage } from '@lib/local-storage'
import { setAuthorizationHeaders } from '@services/graphql'

export const authStateChanged = (dispatcher, token, callback) => {
  dispatchAction(dispatcher, 'set/token', token)
  setAuthorizationHeaders(token)
  saveTokenToLocalStorage(token)

  callback()
}
