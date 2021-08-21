import { saveTokenToLocalStorage } from '@lib/local-storage'
import { setAuthorizationHeaders } from '@services/graphql'

export const authStateChanged = (token, callback) => {
  setAuthorizationHeaders(token)
  saveTokenToLocalStorage(token)

  callback()
}
