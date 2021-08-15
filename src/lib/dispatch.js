export const dispatchAction = (dispatcher, type, payload) =>
  dispatcher({
    type,
    payload,
  })
