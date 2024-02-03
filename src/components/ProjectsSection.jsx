/** @format */
import {useEffect} from "react"

import fadeInView from "../functions/animations/fadeInView"

import {Title} from "./Title"

import {GithubIcon} from "../assets/icons"
import {ExternalLinkIcon} from "@radix-ui/react-icons"

import {TEXT} from "../text"

const SectionWrapper = ({children}) => (
  <div className="z-10 light:text-neutral-900 mt-[0.5rem]   p-2 bg-neutral-900/50 rounded-md hover:scale-[1.03] transition-all duration-100 ">
    {children}
  </div>
)

const SectionBg = () => (
  <div className="absolute z-0 h-full mix-blend-exclusion dark:mix-blend-normal ">
    <img
      src="./crane.png"
      className="object-cover object-right-bottom dark:opacity-30 h-[70%] lg:h-full"
    />
  </div>
)

const MessBoardProject = () => (
  <SectionWrapper>
    <a
      href={TEXT.PROJECTS.MESSBOARD.GH_REPO_LINK}
      target="_blank"
      rel="noreferrer"
      className="group text-xl light:text-neutral-900 hover:text-teal-500 dark:text-white transition-colors duration-200  font-medium "
    >
      {TEXT.PROJECTS.MESSBOARD.TITLE}
      <span className="underline-none jetBrains text-sm flex text-teal-500">
        (LATEST)
        <GithubIcon className="pl-2 h-[1.2rem] inline group-hover:stroke-teal-500 transition-colors duration-200  stroke-white hover:cursor-pointer" />
      </span>
    </a>
    <div className="w-full flex flex-col xl:flex-row  gap-3 xl:gap-4">
      <p className="pt-2 xl:max-w-1/4">{TEXT.PROJECTS.MESSBOARD.DESC}</p>
      <div className="xl:grow xl:max-w-[600px] h-full">
        <img
          src={TEXT.PROJECTS.MESSBOARD.IMAGE}
          className="object-fit rounded-md"
        />
      </div>
    </div>
  </SectionWrapper>
)

const AbroadProject = () => (
  <SectionWrapper>
    <a
      href="https://github.com/ZouicheOmar/abroad-vite"
      target="_blank"
      rel="noreferrer"
      className="hover text-xl light:text-neutral-900 dark:text-white  font-medium "
    >
      {TEXT.PROJECTS.ABORAD.TITLE}
      <GithubIcon className="pl-2 h-[1.2rem] inline stroke-white hover:cursor-pointer" />
    </a>
    <p className="pt-2">
      A fully featured demo website for{" "}
      <a
        href="https://www.instagram.com/erasmus_montpellier/"
        target="_blank"
        rel="noreferrer"
        className="items-center group hover:text-indigo-500 transition-colors duration-200"
      >
        Erasmus & Internationals Network
        <ExternalLinkIcon className="group-hover:text-indigo-500 transition-colors duration-200 inline-block ml-[1px] mb-[1px]" />
      </a>
      , an association for international Students based in Montpellier. Recent
      features were a user authentification system, events (product) listing,
      payment system, deployment and maintenance.
    </p>
    <p className="pt-1 leading-tight text-neutral-500 dark:text-slate-300">
      {" "}
      Stack : React.js, TailwindCSS, RadixUI, Node.js, Supabase, PostgreSQL,
      Vercel.
    </p>
  </SectionWrapper>
)

const StudiesProject = () => (
  <SectionWrapper>
    <span className="text-xl light:text-neutral-900 dark:text-white  font-medium ">
      Data optimisation and Mathematical Models
    </span>
    <br />

    <p className="pt-2">
      A set of projects and studies done during Mathematics study involving data
      analysis & optimization, mathematical models using Python, where I deeply
      dived in programming, mainly in Python, C++ & Matlab.
    </p>
  </SectionWrapper>
)

const OthersProjects = () => (
  <SectionWrapper>
    <span className="text-xl light:text-neutral-900 dark:text-white  font-medium ">
      Experiments & Other Projects
    </span>
    <br />
    <p>
      Other quick projects and personal experiments can be found on my{" "}
      <span className="cursor-pointer hover:underline hover:underline-offset-2  gap-1 w-fit items-center">
        <a href="https://github.com/ZouicheOmar" target="blank">
          Github
        </a>
      </span>
    </p>
  </SectionWrapper>
)

const ProjectsSection = () => {
  useEffect(() => {
    fadeInView("#projects")
  })
  return (
    <div
      className="relative w-full rounded md:px-[5%] pt-[5rem] md:pt-[2rem]  flex flex-col gap-2 h-fit cursor-default"
      id="projects"
    >
      <Title value="Projects" />

      <MessBoardProject />
      <AbroadProject />
      {/* <StudiesProject /> */}
      {/* <OthersProjects /> */}

      <SectionBg />
    </div>
  )
}

export default ProjectsSection
