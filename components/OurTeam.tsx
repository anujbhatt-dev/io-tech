import { fetchTeamSectionData } from "@/utils/data"
import TeamSlider from "./TeamSlider"

export default async function OurTeam({locale}:{locale:"en"|"ar"}) {
  const teamSection = await fetchTeamSectionData({locale})
  const members = teamSection.teamMembers
  


  if(!members || !teamSection) return null

  return (
    <div className="bg-[#f3f3f3] flex flex-col items-center py-20 px-4 sm:px-8 lg:px-16 xl:px-32 text-center">
      <h2 className="text-center mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold">
        {teamSection.heading}
      </h2>
      <p className="px-2 max-w-3xl leading-relaxed text-neutral-500 mb-8 text-sm sm:text-base">
        {teamSection.subHeading}
      </p>

      <div className="w-full max-w-[1400px]">
        <TeamSlider members={members} />
      </div>
    </div>
  )
}
