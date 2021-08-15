export const handleFieldChange = callback => e => callback(e.target.value)

export const preventDefault = callback => e => {
  e.preventDefault()
  callback()
}
