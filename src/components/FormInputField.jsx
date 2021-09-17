export default function FormInputField({ label, ...props }) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-lg font-semibold" htmlFor={label}>
        {label}
      </label>
      <input
        className="py-2 px-4 border border-gray-300 rounded outline-none transition focus:border-transparent focus:ring-2 focus:ring-purple-600"
        {...props}
      />
    </div>
  )
}
