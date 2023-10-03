/** @format */
import {useEffect} from 'react'
import fadeInView from '../functions/animations/fadeInView'

const ExperiencesSection = () => {
  useEffect(() => {
    fadeInView('#experiences')
  })
  return (
    <div
      className=" w-full rounded  md:px-[5%] pt-[5rem] flex flex-col gap-2 h-fit"
      id="experiences"
    >
      <p className="formaDJR font-bold text-5xl">Experiences</p>
      <div className="basierFont light:text-neutral-900 dark:text-white mt-[0.5rem] border-b-[1px] border-b-neutral-500 pb-2 ">
        <div>
          <span className="text-xl light:text-neutral-900 dark:text-white formaDJR font-[500] ">
            Fullstack Developer : Erasmus Internation Network{' '}
            <span className="jetBrains text-sm text-orange-500">(Current)</span>
          </span>
          <br />
          <div className="leading-tight py-2 pl-2 text-neutral-">
            job description
            <br />
            Tasks
            <br />
            Task 1 : Task description, Communicatig with design and marketing
            team etc
            <br />
            Task 2
            <br />
            Task 2
          </div>
        </div>
      </div>
      <div className="mt-[2rem]">
        <p className="formaDJR font-bold text-2xl">Education</p>
        <div className="basierFont">
          <ul className="list-disc list-inside">
            <li className="">Master 1 in Models and Numerical Analysis</li>
            <ul className="pl-4 text-slate-400 list-disc list-inside leading-tight">
              <li>Mathematical models in freemfem</li>
              <li>Object Oriented Programming in C++</li>
              <li>Numerical Analysis</li>
              <li>Data Analysis and Optimisation</li>
            </ul>
            <li className="">Mathematics Degree</li>
            <ul className="pl-4 text-slate-400 list-disc list-inside leading-tight">
              <li>Program relevant for programming</li>
              <li>Description</li>
              <li>Description</li>
            </ul>
            <li className="">Technology and Engeneering Sciences school</li>
            <ul className="pl-4 text-slate-400 list-disc list-inside leading-tight">
              <li>Program relevant for programming</li>
              <li>Description</li>
              <li>Description</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExperiencesSection
