import '@utils/types'

/**
 *
 * @param {DispatcherCallback} dispatcher
 * @param {string} type
 * @param {any} payload
 * @returns {void}
 */
export const dispatchAction = (dispatcher, type, payload = null) =>
  dispatcher({
    type,
    payload,
  })
