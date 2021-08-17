export const monadicError =
  callback =>
  async (...args) => {
    try {
      const data = await callback(...args)
      return [data, null]
    } catch (error) {
      return [null, error]
    }
  }
