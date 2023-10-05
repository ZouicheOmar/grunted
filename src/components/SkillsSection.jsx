/** @format */
import {useEffect} from 'react'
import fadeInView from '../functions/animations/fadeInView'
import toolsIcon from '../assets/tools.svg'
import {
  BrushIcon,
  CogIcon,
  CommandLineIcon,
  DatabaseIcon,
  ThinkingIcon,
  ToolsIcon,
} from '../assets/icons'

const SkillsSection = () => {
  useEffect(() => {
    fadeInView('#skills')
  }, [])
  return (
    <div
      className="generalFont w-full md:px-[5%] md:pt-[2rem] pt-[5rem] flex flex-col justify-center gap-2 h-fit "
      id="skills"
    >
      <p className=" font-medium text-5xl">Skills</p>
      {/* <div className="w-full flex md:text-xl flex-wrap md:flex-nowrap justify-center mt-[0.5rem] gap-x-2 md:gap-4 border-b-[1px] border-b-neutral-700">
        <div className="md:w-1/4 w-[47%] sm:w-5/12 flex flex-col items-start gap-2 p-2 border-r-[1px] border-r-neutral-700 border-b-[1px] border-b-neutral-700 md:border-b-0  ">
          <span className="font-medium  text-xl md:text-2xl">FrontEnd</span>
          <div className="flex flex-col w-full gap-1 justify-start items-start leading-tight">
            <span className="flex items-center gap-1">
              
              <span>React</span>
            </span>
            <span>Next.js</span>
            <span>HTML, CSS, Javascript</span>
            <span>Typescript</span>
          </div>
        </div>
        <div className="md:w-1/4 w-[47%] sm:w-5/12 md:border-r-[1px] flex flex-col items-start gap-2 p-2  md:border-r-neutral-700 border-b-[1px] border-b-neutral-700 md:border-b-0">
          <span className=" font-medium text-xl md:text-2xl">Backend</span>
          <div className="flex flex-col pb-[1rem] w-full gap-1 leading-tight  justify-center items-start">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>Axios</span>
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>Python</span>
          </div>
        </div>{' '}
        <div className="md:w-1/4 w-[47%] sm:w-5/12 border-r-[1px] flex flex-col items-start gap-2 p-2  border-r-neutral-700">
          <span className=" font-medium text-xl md:text-2xl">Design</span>
          <div className="flex flex-col pb-[1rem] w-full  leading-tight items-start gap-1">
            <span>Figma</span>
            <span>Adobe Illustrator</span>
            <span>TailwindCSS</span>
          </div>
        </div>{' '}
        <div className="md:w-1/4 w-[47%] sm:w-5/12 md:border-r-[1px]  flex flex-col items-start gap-2 p-2  md:border-r-neutral-700">
          <span className=" font-medium text-xl md:text-2xl">
            Tools & Others
          </span>
          <div className="w-full flex flex-col pb-[1rem] items-start gap-1 leading-tight">
            <span>Git / Github</span>
            <span>Vercel</span>
            <span>Firebase / Supabase</span>
            <span>MongoDB</span>
            <span>Linux</span>
            <span>NeoVim</span>
          </div>
        </div>
      </div> */}
      <div className="w-full  font-medium flex md:text-xl flex-wrap  justify-center mt-[0.5rem] gap-2 md:gap-4 ">
        <div className="relative overflow-hidden flex-grow lg:w-1/4 md:p-4 px-3 py-2 w-[47%] sm:w-5/12 flex flex-col items-start gap-4 border-r-[1px] rounded-xl border-neutral-700 border-[1px] bg-gradient-to-t from-green-700 to-[#242424]   ">
          <span className="z-10 text-xl lg:text-2xl">Frontend</span>
          <div className="z-10 flex flex-col gap-2 pb-5 pl-[5%] md:text-base w-full  justify-start items-start leading-tight">
            <span className=" flex items-center gap-1">
              <span>React</span>
            </span>
            <span>Next.js</span>
            <span>HTML, CSS, Javascript</span>
            <span>Typescript</span>
          </div>
          <CommandLineIcon
            src={toolsIcon}
            className="bottom-[25%] right-[25%] scale-[900%] absolute stroke-1 stroke-stone-950 opacity-40"
          />
        </div>
        <div className="relative overflow-hidden flex-grow lg:w-1/4 md:p-4 px-3 py-2 w-[47%] sm:w-5/12 flex flex-col items-start gap-4 border-r-[1px] rounded-xl border-neutral-700 border-[1px]  bg-gradient-to-t from-indigo-800 to-[#242424]   ">
          <span className="z-10 text-xl lg:text-2xl">Backend</span>
          <div className="z-10 flex flex-col gap-2 pb-5 pl-[5%] md:text-base w-full  justify-start items-start leading-tight">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>Axios</span>
            <span>MySQL</span>
            <span>Python</span>
          </div>
          <DatabaseIcon
            src={toolsIcon}
            className="bottom-[25%] right-[25%] scale-[900%] absolute stroke-1 stroke-stone-950 opacity-40"
          />
        </div>{' '}
        <div className="relative overflow-hidden  flex-grow lg:w-1/4 md:p-4 px-3 py-2 w-[47%] sm:w-5/12 flex flex-col items-start gap-4 border-r-[1px] rounded-xl border-neutral-700 border-[1px]  bg-gradient-to-t from-[#8641e5] to-[#242424]   ">
          <span className="z-10 font-medium text-xl lg:text-2xl">Design</span>
          <div className="z-10 flex flex-col gap-2 pb-5 pl-[5%] md:text-base w-full  justify-start items-start leading-tight">
            <span>Figma</span>
            <span>Adobe Illustrator</span>
            <span>TailwindCSS</span>
          </div>
          <BrushIcon
            src={toolsIcon}
            className="bottom-[25%] right-[25%] scale-[900%] absolute stroke-1 stroke-stone-950 opacity-40"
          />
        </div>{' '}
        <div className="relative overflow-hidden flex-grow lg:w-1/4 md:p-4 px-3 py-2 w-[47%] sm:w-5/12 flex flex-col items-start gap-4 border-r-[1px] rounded-xl border-neutral-700 border-[1px]  bg-gradient-to-t from-red-950 to-[#242424]   ">
          <span className="z-10 font-medium text-xl lg:text-2xl">
            Tools & Others
          </span>
          <div className="z-10 flex flex-col gap-2 pb-5 pl-[5%] md:pl-[2%] md:text-base w-full  justify-start items-start leading-tight">
            <span>Git / Github</span>
            <span>Vercel</span>
            <span>Firebase / Supabase</span>
            <span>MongoDB</span>
            <span>Linux</span>
            <span>NeoVim</span>
          </div>
          <ToolsIcon
            src={toolsIcon}
            className="bottom-[25%] right-[25%] md:right-[5%] scale-[900%] absolute stroke-1 stroke-stone-950 opacity-40"
          />
        </div>
        <div className="relative overflow-hidden flex-grow  md:p-4 px-3 py-2 w-[96%] sm:w-[85%] flex flex-col items-start gap-4 border-r-[1px] rounded-xl border-neutral-700 border-[1px]  bg-gradient-to-t from-[#f15053] to-[#242424]   ">
          <span className="font-medium text-xl md:text-2xl">
            Principles & Methods
          </span>
          <div className="z-10 flex flex-col gap-2 pb-5 pl-[5%] md:pl-[2%] md:text-base w-full  justify-start items-start leading-tight">
            <span>Test driven Developpement</span>
            <span>Clean Code</span>
            <span>Responsive Design / Mobile First Approach</span>
            <span>Versionning</span>
            <span>SCRUM / Agile</span>
            <span>Documenting</span>
            <span>Accessibilty</span>
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
      </div>
    </div>
  )
}

export default SkillsSection

// mt-[5rem] md:mt-0
