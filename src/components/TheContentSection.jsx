export default function TheContentSection({ children }) {
  return (
    <main className="pb-20 md:pb-4 py-4 px-2 md:px-8 flex-1 bg-gray-100 overflow-auto text-gray-800">
      {children}
    </main>
  )
}
