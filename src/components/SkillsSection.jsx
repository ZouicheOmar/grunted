/** @format */
import {useEffect} from "react"
import fadeInView from "../functions/animations/fadeInView"
import toolsIcon from "../assets/tools.svg"
import {
  BrushIcon,
  CogIcon,
  CommandLineIcon,
  DatabaseIcon,
  ThinkingIcon,
  ToolsIcon,
} from "../assets/icons"

import {TEXT} from "../text"

const FrontEnd = () => (
  <div className="relative overflow-hidden flex-grow lg:w-1/4 md:p-4 px-3 py-2 w-[47%] sm:w-5/12 flex flex-col items-start gap-4 border-r-[1px] rounded-xl border-neutral-700 border-[1px] bg-gradient-to-t from-green-700 to-[#242424]   ">
    <span className="z-10 text-xl lg:text-2xl">Frontend</span>
    <div className="z-10 flex flex-col gap-2 pb-5 pl-[5%] md:text-base w-full  justify-start items-start leading-tight">
      {TEXT.SKILLS.FRONTEND.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
    <CommandLineIcon
      src={toolsIcon}
      className="bottom-[25%] right-[25%] scale-[900%] absolute stroke-1 stroke-stone-950 opacity-40"
    />
  </div>
)

const Backend = () => (
  <div className="relative overflow-hidden flex-grow lg:w-1/4 md:p-4 px-3 py-2 w-[47%] sm:w-5/12 flex flex-col items-start gap-4 border-r-[1px] rounded-xl border-neutral-700 border-[1px]  bg-gradient-to-t from-indigo-800 to-[#242424]   ">
    <span className="z-10 text-xl lg:text-2xl">Backend</span>
    <div className="z-10 flex flex-col gap-2 pb-5 pl-[5%] md:text-base w-full  justify-start items-start leading-tight">
      {TEXT.SKILLS.BACKEND.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
    <DatabaseIcon
      src={toolsIcon}
      className="bottom-[25%] right-[25%] scale-[900%] absolute stroke-1 stroke-stone-950 opacity-40"
    />
  </div>
)

const Design = () => (
  <div className="relative overflow-hidden flex-grow lg:w-1/4 md:p-4 px-3 py-2 w-[47%] sm:w-5/12 flex flex-col items-start gap-4 border-r-[1px] rounded-xl border-neutral-700 border-[1px]  bg-gradient-to-t from-[#8641e5] to-[#242424]   ">
    <span className="z-10 font-medium text-xl lg:text-2xl">Design</span>
    <div className="z-10 flex flex-col gap-2 pb-5 pl-[5%] md:text-base w-full  justify-start items-start leading-tight">
      {TEXT.SKILLS.DESIGN.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
    <BrushIcon
      src={toolsIcon}
      className="bottom-[25%] right-[25%] scale-[900%] absolute stroke-1 stroke-stone-950 opacity-40"
    />
  </div>
)

const Tools = () => (
  <div className="relative overflow-hidden flex-grow lg:w-1/4 md:p-4 px-3 py-2 w-[47%] sm:w-5/12 flex flex-col items-start gap-4 border-r-[1px] rounded-xl border-neutral-700 border-[1px]  bg-gradient-to-t from-red-950 to-[#242424]   ">
    <span className="z-10 font-medium text-xl lg:text-2xl">Tools & Others</span>
    <div className="z-10 flex flex-col gap-2 pb-5 pl-[5%] md:pl-[2%] md:text-base w-full  justify-start items-start leading-tight">
      {TEXT.SKILLS.OTHERS.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
    <ToolsIcon
      src={toolsIcon}
      className="bottom-[25%] right-[25%] md:right-[5%] scale-[900%] absolute stroke-1 stroke-stone-950 opacity-40"
    />
  </div>
)

const Methods = () => (
  <div className="relative overflow-hidden flex-grow  md:p-4 px-3 py-2 w-[96%] sm:w-[85%] flex flex-col items-start gap-4 border-r-[1px] rounded-xl border-neutral-700 border-[1px]  bg-gradient-to-t from-[#f15053] to-[#242424]   ">
    <span className="font-medium text-xl md:text-2xl">
      Principles & Methods
    </span>
    <div className="z-10 flex flex-col gap-2 pb-5 pl-[5%] md:pl-[2%] md:text-base w-full  justify-start items-start leading-tight">
      {TEXT.SKILLS.METHODS.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
    <ThinkingIcon
      src={toolsIcon}
      className="bottom-[45%] right-[0%]  scale-[600%] absolute stroke-1 stroke-stone-950 opacity-40"
    />
    <CogIcon
      src={toolsIcon}
      className="bottom-[10%] right-[20%] scale-[600%] absolute stroke-1 stroke-stone-950 opacity-40"
    />
  </div>
)

const SkillsSection = () => {
  useEffect(() => {
    fadeInView("#skills")
  }, [])
  return (
    <div
      className="generalFont w-full md:px-[5%] md:pt-[2rem] pt-[5rem] flex flex-col justify-center gap-2 h-fit "
      id="skills"
    >
      <p className=" font-medium text-5xl">Skills</p>
      <div className="w-full  font-medium flex md:text-xl flex-wrap  justify-center mt-[0.5rem] gap-2 md:gap-4 ">
        <FrontEnd />
        <Backend />
        <Design />
        <Tools />
        <Methods />
      </div>
    </div>
  )
}

export default SkillsSection
