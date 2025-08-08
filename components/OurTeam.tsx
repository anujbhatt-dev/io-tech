import TeamSlider from "./TeamSlider"

export default function OurTeam() {
  const members = [
    { name: "Name Here", position: "Full Stack Developer", wharsapp: "", phone: "", email: "", imageUrl: "/face.jpg" },
    { name: "Name Here", position: "Full Stack Developer", wharsapp: "", phone: "", email: "", imageUrl: "/face.jpg" },
    { name: "Name Here", position: "Full Stack Developer", wharsapp: "", phone: "", email: "", imageUrl: "/face.jpg" },
    { name: "Name Here", position: "Full Stack Developer", wharsapp: "", phone: "", email: "", imageUrl: "/face.jpg" },
    { name: "Name Here", position: "Full Stack Developer", wharsapp: "", phone: "", email: "", imageUrl: "/face.jpg" },
    { name: "Name Here", position: "Full Stack Developer", wharsapp: "", phone: "", email: "", imageUrl: "/face.jpg" },
  ]

  return (
    <div className="bg-[#f3f3f3] flex flex-col items-center py-20 px-4 sm:px-8 lg:px-16 xl:px-32 text-center">
      <h2 className="text-center mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold">
        Our Team
      </h2>
      <p className="px-2 max-w-3xl leading-relaxed text-neutral-500 mb-8 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eos in. 
        Molestiae aperiam facere reiciendis, eum labore aspernatur nemo quod sit quas 
        corporis error perspiciatis voluptate
      </p>

      <div className="w-full max-w-[1400px]">
        <TeamSlider members={members} />
      </div>
    </div>
  )
}
