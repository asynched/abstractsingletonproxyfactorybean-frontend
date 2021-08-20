import { dispatchAction } from './dispatch'
import '@utils/types'
import { getTokenFromLocalStorage } from './local-storage'

/**
 *
 * @param {DispatcherCallback} applicationDispatcher
 * @param {string} token
 * @param {...AuthenticationStateSetupCallback} callback
 */
export const handleAuthStateSetup = (
  applicationDispatcher,
  token,
  ...callbacks
) => {
  dispatchAction(applicationDispatcher, 'set/token', token)

  if (callbacks?.length > 0) {
    callbacks.forEach(callback => callback(token))
  }
}

export const checkUserPermission = () => !!getTokenFromLocalStorage()
