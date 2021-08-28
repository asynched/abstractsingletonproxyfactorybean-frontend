import TheContentSection from '@components/TheContentSection'
import TheSidebar from '@components/TheSidebar'

export default function MainLayout({ children }) {
  return (
    <div className="w-full min-h-screen max-h-screen flex">
      <TheSidebar />
      <TheContentSection>{children}</TheContentSection>
    </div>
  )
}
