/**
 *
 * @template T
 * @param {Array<T>} array Array to get a random element
 * @returns {T} Random array element
 */
export const getRandomArrayElement = array =>
  array[Math.floor(Math.random() * array.length)]
