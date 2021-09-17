import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'

/**
 * ## Hook for creating forms in React
 *
 * ```jsx
 * // Example usage
 * const [formFields, createFormFieldsProps, _setFormFields] = useFormFields({
 *  name: 'Eder',
 *  nickname: 'Nxrth-x',
 * })
 *
 * return (
 *  <div>
 *    <p>{formFields.name} is actually {formFields.nickname}</p>
 *    <input type="text" {...createFormFieldProps('name')} />
 *    <input type="text" {...createFormFieldProps('nickname')} />
 *  </div>
 * )
 * ```
 *
 *
 * @param initialValues Initial form values for the object
 * @returns A stateful value, a form field props generator and a function to set the inner state
 * @see https://gist.github.com/Nxrth-x/4a706c74b73aaae492d12ad3bfbe3b52
 */
export default function useFormFields(initialValues) {
  const [formFields, setFormFields] = useState(initialValues)

  const registerField = key => ({
    value: formFields[key],
    onChange: event => {
      setFormFields(previous => ({
        ...previous,
        [key]: event.target.value,
      }))
    },
  })

  return [formFields, registerField, setFormFields]
}
