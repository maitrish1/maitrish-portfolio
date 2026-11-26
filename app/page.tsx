import Shell from '@/components/shell/Shell'
import FolioHero from '@/components/sections/FolioHero'
import FolioExperience from '@/components/sections/FolioExperience'
import FolioWriting from '@/components/sections/FolioWriting'
import FolioSkills from '@/components/sections/FolioSkills'
import FolioFinale from '@/components/sections/FolioFinale'
import FolioFooter from '@/components/sections/FolioFooter'

export default function HomePage() {
  return (
    <Shell>
      <FolioHero />
      <FolioExperience />
      <FolioWriting />
      <FolioSkills />
      <FolioFinale />
      <FolioFooter />
    </Shell>
  )
}
