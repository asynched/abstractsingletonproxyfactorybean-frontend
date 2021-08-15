import DashboardSidebar from '@components/DashboardSidebar'

export default function DashboardLayout({ children }) {
  return (
    <div className="w-full h-screen flex">
      <DashboardSidebar />
      <main className="py-4 px-8 flex-1 bg-gray-100">{children}</main>
    </div>
  )
}
