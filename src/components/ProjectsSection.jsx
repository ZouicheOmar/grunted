/** @format */
import {useEffect} from 'react'
import fadeInView from '../functions/animations/fadeInView'
import {GithubIcon, ExtLink} from '../assets/icons'

const ProjectsSection = () => {
  useEffect(() => {
    fadeInView('#projects')
  })
  return (
    <div
      className="relative generalFont w-full rounded  md:px-[5%] pt-[5rem] md:pt-[2rem]  flex flex-col gap-2 h-fit cursor-default"
      id="projects"
    >
      <p className="generalFont font-medium text-5xl leading-tight">Projects</p>
      <div className="z-10 generalFont light:text-neutral-900 mt-[0.5rem]  dark:text-white border-b-[1px] border-b-neutral-500 pb-[2rem] ">
        <span className="text-xl light:text-neutral-900 dark:text-white  font-medium ">
          Abroad{' '}
          <span className="jetBrains text-sm flex text-orange-500">
            (Current)
            <a href="https://github.com/ZouicheOmar/abroad-vite" target="blank">
              <GithubIcon className="pl-2 h-[1.2rem] inline stroke-white hover:cursor-pointer" />
            </a>
          </span>
        </span>
        <p className="pt-2">
          A plateform for International Students in Geneva and Lausanne to
          connect. Implemeting a user authentification system, events (product)
          listing, payment system, deployment and maintenance.
        </p>
        <p className="pt-1 leading-tight text-neutral-500 dark:text-slate-300">
          {' '}
          Stack : React.js, TailwindCSS, RadixUI, Node.js, Supabase, PostgreSQL,
          Vercel.
        </p>
      </div>

      <div className="z-10 generalFont light:text-neutral-900 dark:text-white mt-[1rem] border-b-[1px] border-b-neutral-500 pb-[2rem] ">
        <span className="text-xl light:text-neutral-900 dark:text-white  font-medium ">
          Data optimisation and Mathematical Models
        </span>
        <br />
        <a
          href="https://github.com/ZouicheOmar/C-and-Freefem-files-Masters-1-MANU-"
          target="blank"
          className="flex gap-2 w-fit items-center cursor-pointer"
        >
          <GithubIcon className="h-[1.2rem]" />
          <span className="hover:underline hover:underline-offset-2">
            Mathematical Models
          </span>
        </a>
        <a
          href="https://zouicheomar.github.io/project21808112.github.io/"
          target="blank"
          className="flex gap-2 items-center cursor-pointer w-fit"
        >
          <GithubIcon className="h-[1.2rem]" />
          <span className="hover:underline hover:underline-offset-2">
            Data Optimization
          </span>
        </a>
        <p className="pt-2">
          A set of projects and studies done during Mathematics study involving
          data analysis & optimization, mathematical models using Python, where
          I deeply dived in programming.
        </p>
        <p className="pt-1 leading-tight text-neutral-500 dark:text-slate-300">
          {' '}
          Stack : HTML, CSS, Javascript, Python, FreeFEM, C++
        </p>
      </div>

      <div className="z-10  light:text-neutral-900 dark:text-white mt-[1rem] border-b-0 pb-2 ">
        <span className="text-xl light:text-neutral-900 dark:text-white  font-medium ">
          Experiments & Other Projects
        </span>
        <br />
        <p>
          Other quick projects and personal experiments can be found on my{' '}
          <span className="cursor-pointer hover:underline hover:underline-offset-2  gap-1 w-fit items-center">
            <a href="https://github.com/ZouicheOmar" target="blank">
              Github
            </a>
          </span>
        </p>
      </div>
      <div className="absolute z-0 h-full mix-blend-exclusion dark:mix-blend-normal ">
        <img
          src="./crane.png"
          className="object-cover object-right-bottom dark:opacity-30 h-[70%] lg:h-full"
        />
      </div>
    </div>
  )
}

export default ProjectsSection
