import { saveTokenToLocalStorage } from '@lib/local-storage'

export const authStateChanged = (token, callback) => {
  saveTokenToLocalStorage(token)

  callback()
}
