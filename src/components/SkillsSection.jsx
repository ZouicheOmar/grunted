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
      className="basierFont w-full md:px-[5%] md:pt-[5rem] flex flex-col justify-center gap-2 h-fit md:h-screen"
      id="skills"
    >
      <p className="formaDJR font-bold text-5xl">Skills</p>
      <p className="basierFont">à mettre en avant</p>

      <div className="w-full  flex flex-wrap md:flex-nowrap justify-center gap-2 md:gap-4 ">
        <div className="md:w-1/4 w-5/12 border-r-[1px] flex flex-col items-start  gap-2 p-2 border-r-neutral-700 ">
          <span className="formaDJR font-bold text-xl">FrontEnd</span>
          <div className="flex flex-col w-full gap-1 justify-start items-start leading-none">
            <span className="flex items-center gap-1">
              <span className=" w-fit h-fit">
                <img src={React} />
              </span>
              <span className="formaDJR font-[500]">react</span>
            </span>
            <span>Next.js</span>
            <span>Javascript</span>
            <span>Typescript</span>
            <span>CSS</span>
            <span>HTML</span>
          </div>
        </div>
        <div className="md:w-1/4 w-5/12 md:border-r-[1px] flex flex-col items-start gap-2 p-2  md:border-r-neutral-700">
          <span className="formaDJR font-bold text-xl">Backend</span>
          <div className="flex flex-col w-full gap-1 leading-none  justify-center items-start">
            <span>Node.js</span>
            <span>Express</span>
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>Python</span>
          </div>
        </div>{' '}
        <div className="md:w-1/4 w-5/12 border-r-[1px] flex flex-col items-start gap-2 p-2  border-r-neutral-700">
          <span className="formaDJR font-bold text-xl">Design</span>
          <div className="flex flex-col w-full  leading-none items-start gap-1">
            <span>Figma</span>
            <span>Adobe Illustrator</span>
            <span>TailwindCSS</span>
          </div>
        </div>{' '}
        <div className="md:w-1/4 w-5/12 md:border-r-[1px]  flex flex-col items-start gap-2 p-2  md:border-r-neutral-700">
          <span className="formaDJR font-bold text-xl">Tools and others</span>
          <div className="w-full flex flex-col items-start gap-1 leading-none">
            <span>Git / Github</span>
            <span>Vercel</span>
            <span>Firebase</span>
            <span>Supabase</span>
            <span>Linux</span>
            <span>NeoVim</span>
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-col pl-[8%] border-t-[1px] border-t-neutral-700 rounded p-2 basierFont">
        <span className="formaDJR font-bold text-xl">
          Principles and methods
        </span>
        <div className="leading-none flex flex-col items-start gap-1">
          <span>Test driven Developpement</span>
          <span>Clean Code</span>
          <span>Versionning</span>
          <span>Documenting</span>
          <span>Accessibilty</span>
        </div>
      </div>
    </div>
  )
}

export default SkillsSection
