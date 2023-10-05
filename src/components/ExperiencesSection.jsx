/** @format */
import {useEffect} from 'react'
import fadeInView from '../functions/animations/fadeInView'

const ExperiencesSection = () => {
  useEffect(() => {
    fadeInView('#experiences')
  })
  return (
    <div
      className="generalFont w-full rounded  md:px-[5%] pt-[5rem] flex flex-col gap-2 h-fit"
      id="experiences"
    >
      <p className=" font-medium text-5xl">Experiences</p>
      <div className="basierFont light:text-neutral-900 dark:text-white mt-[0.5rem] border-b-[1px] border-b-neutral-500 pb-2 ">
        <div>
          <span className="text-xl light:text-neutral-900 dark:text-white ">
            Fullstack Developer @ Erasmus Internation Network <br />
            <span className="jetBrains text-sm text-orange-500">
              (to Dec. 2023)
            </span>
          </span>
          <br />
          <div className="leading-tight py-2 pl-1 md:pl-2 ">
            <ul className="list-disc list-inside">
              <li>Developping and maintaining a responsive web app</li>
              <li>
                Designing and implementing interactive features to enhance user
                engagement
              </li>
              <li>Impleting user authentification features</li>
              <li>Maintaining products and user databases</li>
              <li>Managing hosting and maitntenance</li>
              <li>Constantly improving and adding features and app design</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-[2rem]">
        <p className=" font-medium text-3xl">Education</p>
        <div className="basierFont">
          <ul className="list-disc list-inside">
            <span className="text-lg ">
              Masters 1 in Mathematical Models and Numerical Analysis
            </span>
            <ul className="pl-4 pt-1 pb-2 text-neutral-700 dark:text-slate-300 list-disc list-inside leading-tight">
              <li>Object Oriented Programming in C++</li>
              <li>Data Analysis & Functionnal Optimization</li>
              <li>Mathematical Models & Equations using FreeFEM</li>
            </ul>
            <span className="text-lg ">Mathematics Degree</span>
            <ul className="pl-4 pt-1 pb-2 text-neutral-700 dark:text-slate-300 list-disc list-inside leading-tight">
              <li>Mathematical Optimization using Python </li>
              <li>Numerical Analysis</li>
            </ul>
            <span className="text-lg ">
              Technology & Engeneering Sciences School
            </span>
            <ul className="pl-4 pt-1 pb-2 text-neutral-700 dark:text-slate-300 list-disc list-inside leading-tight">
              <li>Programming in Python</li>
              <li>Matlab & Arduino, AutoCAD design</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExperiencesSection
