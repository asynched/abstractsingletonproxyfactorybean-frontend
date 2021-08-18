import { dispatchAction } from './dispatch'
import '@utils/types'

/**
 *
 * @param {DispatcherCallback} applicationDispatcher
 * @param {string} token
 * @param {(token: string) => void} callback
 */
export const handleAuthStateSetup = (
  applicationDispatcher,
  token,
  callback = null,
) => {
  dispatchAction(applicationDispatcher, 'set/token', token)

  if (callback) {
    callback(token)
  }
}
