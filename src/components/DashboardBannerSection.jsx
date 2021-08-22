export default function DashboardBannerSection({ children }) {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-4xl font-bold tracking-tighter">Anúncios</h2>
      <div className="grid gap-4 lg:grid-cols-2">{children}</div>
    </div>
  )
}
