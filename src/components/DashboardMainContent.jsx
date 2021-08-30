import DashboardDiscordBanner from './DashboardDiscordBanner'
import DashboardLeftContainer from './DashboardLeftContainer'
import DashboardLessonsSection from './DashboardLessonsSection'
import DashboardNoticeSection from './DashboardNoticeSection'
import DashboardRightContainer from './DashboardRightContainer'
import DashboardTasksSection from './DashboardTasksSection'

import DashboardGithubBanner from './DashboardGithubBanner'
import DashboardBannerSection from './DashboardBannerSection'
import DashboardStatusSection from './DashboardStatusSection'

export default function DashboardMainContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
      <DashboardLeftContainer>
        <DashboardLessonsSection />
        <DashboardStatusSection />
        <DashboardBannerSection>
          <DashboardGithubBanner />
          <DashboardDiscordBanner />
        </DashboardBannerSection>
      </DashboardLeftContainer>
      <DashboardRightContainer>
        <DashboardTasksSection />
        <DashboardNoticeSection />
      </DashboardRightContainer>
    </div>
  )
}
