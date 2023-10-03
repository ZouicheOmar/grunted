/** @format */

import HeroSection from '../components/HeroSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ExperiencesSection from '../components/ExperiencesSection'
import ContactSection from '../components/ContactSection'

const HomePage = () => {
  return (
    <div
      id="homepage_body"
      className=" px-[1rem] md:w-3/4 md:p-[3rem] min-h-screen flex flex-col gap-6 justify-start items-center"
    >
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperiencesSection />
      <ContactSection />
    </div>
  )
}

export default HomePage
