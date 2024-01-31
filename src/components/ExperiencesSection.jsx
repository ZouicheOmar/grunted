/** @format */
import {useEffect} from "react"
import fadeInView from "../functions/animations/fadeInView"

const ExperiencesSection = () => {
  useEffect(() => {
    fadeInView("#experiences")
  })
  return (
    <div
      className="generalFont w-full rounded  md:px-[5%] pt-[5rem] md:pt-[2rem] flex flex-col gap-2 h-fit"
      id="experiences"
    >
      <p className=" font-medium text-5xl">Experiences</p>
      <div className="light:text-neutral-900 dark:text-white mt-[0.5rem] border-b-[1px] border-b-neutral-500 pb-6 ">
        <div>
          <span className="text-xl leading-none light:text-neutral-900 dark:text-white ">
            Fullstack Developer @ Erasmus Internation Network <br />
            <span className="jetBrains text-sm text-orange-500">
              (to Dec. 2023)
            </span>
          </span>
          <br />
          <ul className="py-2 pl-1 md:pl-2 list-disc list-inside">
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
      <div className="mt-[2rem]">
        <p className=" font-medium text-3xl">Education</p>
        <div className="light:text-neutral-900  flex flex-col gap-2 dark:text-white mt-[0.5rem]  pb-2 ">
          <div>
            <span className="text-xl light:text-neutral-900 dark:text-white ">
              Masters 1 in Mathematical Models and Numerical Analysis
            </span>
            <ul className="list-disc list-inside">
              <li>Object Oriented Programming in C++</li>
              <li>Data Analysis & Functionnal Optimization</li>
              <li>Mathematical Models & Equations using FreeFEM</li>
            </ul>
          </div>
          <div>
            <span className="text-xl light:text-neutral-900 dark:text-white ">
              Mathematics Degree
            </span>
            <ul className="list-disc list-inside">
              <li>Mathematical Optimization using Python </li>
              <li>Numerical Analysis</li>
            </ul>
          </div>
          <div>
            <span className="text-xl light:text-neutral-900 dark:text-white ">
              Technology & Engeneering Sciences School
            </span>
            <ul className="list-disc list-inside">
              <li>Programming in Python</li>
              <li>Matlab & Arduino, AutoCAD design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperiencesSection
