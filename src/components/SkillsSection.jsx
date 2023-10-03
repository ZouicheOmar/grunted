/** @format */
import {useEffect} from 'react'
import fadeInView from '../functions/animations/fadeInView'

import React from '../assets/react.svg'

const SkillsSection = () => {
  useEffect(() => {
    fadeInView('#skills')
  }, [])
  return (
    <div
      className="basierFont w-full md:px-[5%] pt-[5rem] flex flex-col justify-center gap-2 h-fit md:h-screen"
      id="skills"
    >
      <p className="formaDJR font-bold text-5xl">Skills</p>
      {/* <p className="basierFont">à mettre en avant</p> */}

      <div className="w-full flex md:text-xl flex-wrap md:flex-nowrap justify-center mt-[0.5rem] gap-x-2 md:gap-4 border-b-[1px] border-b-neutral-700">
        <div className="md:w-1/4 w-[47%] sm:w-5/12 flex flex-col items-start gap-2 p-2 border-r-[1px] border-r-neutral-700 border-b-[1px] border-b-neutral-700 md:border-b-0  ">
          <span className="formaDJR font-bold text-xl md:text-2xl">
            FrontEnd
          </span>
          <div className="flex flex-col w-full gap-1 justify-start items-start leading-tight">
            <span className="flex items-center gap-1">
              {/* <span className=" w-fit h-fit">
                <img src={React} />
              </span> */}
              <span>React</span>
            </span>
            <span>Next.js</span>
            <span>HTML, CSS, Javascript</span>
            <span>Typescript</span>
          </div>
        </div>
        <div className="md:w-1/4 w-[47%] sm:w-5/12 md:border-r-[1px] flex flex-col items-start gap-2 p-2  md:border-r-neutral-700 border-b-[1px] border-b-neutral-700 md:border-b-0">
          <span className="formaDJR font-bold text-xl md:text-2xl">
            Backend
          </span>
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
          <span className="formaDJR font-bold text-xl md:text-2xl">Design</span>
          <div className="flex flex-col pb-[1rem] w-full  leading-tight items-start gap-1">
            <span>Figma</span>
            <span>Adobe Illustrator</span>
            <span>TailwindCSS</span>
          </div>
        </div>{' '}
        <div className="md:w-1/4 w-[47%] sm:w-5/12 md:border-r-[1px]  flex flex-col items-start gap-2 p-2  md:border-r-neutral-700">
          <span className="formaDJR font-bold text-xl md:text-2xl">
            Tools and others
          </span>
          <div className="w-full flex flex-col pb-[1rem] items-start gap-1 leading-tight">
            <span>Git / Github</span>
            <span>Vercel</span>
            <span>Firebase</span>
            <span>Supabase</span>
            <span>MongoDB</span>
            <span>Linux</span>
            <span>NeoVim</span>
          </div>
        </div>
      </div>
      <div className="mt-[1rem] md:text-lg flex flex-col gap-2  pl-[8% md:pl-[1%]  rounded p-2">
        <span className="formaDJR font-bold text-xl md:text-2xl">
          Principles and methods
        </span>
        <div className="leading-tight flex flex-col pb-[1rem] items-start gap-1">
          <span>Test driven Developpement</span>
          <span>Clean Code</span>
          <span>Responsive Design / Mobile First Approach</span>
          <span>Versionning</span>
          <span>Documenting</span>
          <span>Accessibilty</span>
        </div>
      </div>
    </div>
  )
}

export default SkillsSection
