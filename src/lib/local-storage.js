/**
 * Saves the user token to local storage
 * @param {string} token
 */
export const saveTokenToLocalStorage = token =>
  localStorage.setItem('_token', token)

/**
 * Gets the token from local storage
 * @returns {string | null} token
 */
export const getTokenFromLocalStorage = () =>
  localStorage.getItem('_token') || null
