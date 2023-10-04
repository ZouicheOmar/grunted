/** @format */
import {animate, stagger} from 'motion'
import {useEffect, useState} from 'react'
import fadeFromTop from '../functions/animations/fadeFromTop'
import {ArrowUp} from '../assets/icons'
import {GithubIcon, LinkedInIcon, MailIcon, ExtLink} from '../assets/icons'

async function animateNavbarItems() {
  await animate(
    '#nav_item',
    {
      color: ['red', 'yellow'],
      y: [0, 5],
      // translateY: [0, 5],
      opacity: [0, 1],
    },
    {duration: 0.1, delay: stagger(0.1)}
  )
}

const SideMenu = () => {
  const [open, setOpen] = useState(false)
  const handleGoHome = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    setOpen(false)
  }
  const handleGoToSkills = () => {
    setOpen(false)
    const element = document.getElementById('skills')
    element.scrollIntoView({behavior: 'smooth'})
  }
  const handleGoToExp = () => {
    setOpen(false)
    const element = document.getElementById('experiences')
    element.scrollIntoView({behavior: 'smooth'})
  }
  const handleGoToContact = () => {
    setOpen(false)
    const element = document.getElementById('contact')
    element.scrollIntoView({behavior: 'smooth'})
  }
  const handleGoToProjects = () => {
    setOpen(false)
    const element = document.getElementById('projects')
    element.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className="relative   ">
      <span
        className="cursor-pointer  "
        onClick={() => {
          setOpen(!open)
          animateNavbarItems()
        }}
      >
        <div
          className={`${
            open ? 'rotate-0 opacity-5' : 'rotate-90'
          } pt-[0.5rem] font-bold scale-150 transition-all duration-[500ms] ease-in-out `}
        >
          |||
        </div>
      </span>
      <div
        className={`${
          open ? 'left-[-95vw]' : 'left-[95vw]'
        } absolute overflow-hidden w-[100vw] h-[100vh] top-[-2vh] text-xl backdrop-blur-lg flex justify-end transition-all duration-[500ms] ease-in-out`}
      >
        <div className="w-[55vw] h-full flex flex-col justify-between bg-indigo-950 ">
          <div className="flex flex-col gap-6 ">
            <p
              onClick={() => {
                setOpen(!open)
              }}
              className="cursor-pointer font-bold jetBrains text-end pr-[1.2rem] pt-[1rem]"
            >
              X
            </p>
            <p
              id="nav_item"
              className="md:pl-[2rem] pl-[1rem] hover:underli hover:cursor-pointer hover:bg-indigo-800"
              onClick={handleGoToSkills}
            >
              <span className="jetBrains">01.</span>
              Skills
            </p>
            <p
              id="nav_item"
              className="md:pl-[2rem] pl-[1rem] hover:cursor-pointer hover:bg-indigo-800"
              onClick={handleGoToProjects}
            >
              <span className="jetBrains">02.</span>
              Projects
            </p>
            <p
              id="nav_item"
              className="md:pl-[2rem] pl-[1rem] hover:cursor-pointer hover:bg-indigo-800 "
              onClick={handleGoToExp}
            >
              <span className="jetBrains">03.</span>
              Experiences
            </p>
            <p
              id="nav_item"
              className="md:pl-[2rem] pl-[1rem] hover:cursor-pointer hover:bg-indigo-800 "
              onClick={handleGoToContact}
            >
              <span className="jetBrains">04.</span>
              {/* Contact */}
              Subjet
            </p>
            <div
              id="nav_item"
              className="md:pl-[2rem] pl-[1rem] ml-[1rem] px-[1rem] py-1 flex gap-1 w-fit border-[1px] border-[yellow] hover:cursor-pointer hover:bg-indigo-800
             "
            >
              <span>
                <ExtLink className="pb-1 h-[1.7rem] inline" />
              </span>
              <span>Resume</span>
            </div>
            <div
              id="nav_item"
              className="text-white flex flex-col gap-2 toanim pl-[1rem] md:pl-[2rem]"
            >
              <a
                href="https://github.com/ZouicheOmar"
                target="blank"
                className="flex gap-2 items-center hover:cursor-pointer"
              >
                <span>
                  <GithubIcon className="h-[1.7rem] inline" />
                </span>
                <span className=" hover:text-[yellow] hover:underline hover:underline-offset-4">
                  Github
                </span>
              </a>
              <a
                href="mailto:zouiche.omar@gmail.com?subject = Feedback&body = Message"
                target="blank"
                className="flex pl-[2px gap-3 items-end hover:cursor-pointer"
              >
                <span className="pl-[2px]">
                  <MailIcon className="w-[1.5rem] inline" />
                </span>
                <span className=" hover:cursor-pointer hover:text-[yellow] hover:underline hover:underline-offset-4">
                  Mail
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/omar-zouiche-aaab27274/"
                target="blank"
                className="flex items-center gap-2 hover:cursor-pointer"
              >
                <span>
                  <LinkedInIcon className="h-[1.7rem] inline stroke-[1.5px]" />
                </span>
                <span className=" hover:cursor-pointer hover:text-[yellow] hover:underline hover:underline-offset-4">
                  Linkedin
                </span>
              </a>
            </div>
          </div>
          <div id="nav_item" className=" flex justify-end pb-[75%]">
            <span className="w-fit h-fit cursor-pointer" onClick={handleGoHome}>
              <ArrowUp className="stroke-w-[1px] stroke-[yellow] w-[5rem] scale-150 " />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const Navbar = () => {
  const handleGoHome = () => {
    const element = document.getElementById('hero')
    element.scrollIntoView({behavior: 'smooth'})
  }
  const handleGoToSkills = () => {
    const element = document.getElementById('skills')
    element.scrollIntoView({behavior: 'smooth'})
  }
  const handleGoToExp = () => {
    const element = document.getElementById('experiences')
    element.scrollIntoView({behavior: 'smooth'})
  }
  const handleGoToContact = () => {
    const element = document.getElementById('contact')
    element.scrollIntoView({behavior: 'smooth'})
  }
  const handleGoToProjects = () => {
    const element = document.getElementById('projects')
    element.scrollIntoView({behavior: 'smooth'})
  }
  const handleGoTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }

  useEffect(() => {
    fadeFromTop('nav_title')
    animateNavbarItems()
  }, [])

  return (
    <>
      <div className="hidden md:block md:sticky w-1/4 bg-indigo-950 max-h-screen top-0 left-0 border-r-[1px] border-r-indigo-500 ">
        <div className="mt-[5rem] flex flex-col justify-between align-center h-1/3">
          <div className="bg-red- relative w-full min-h-[10rem] flex-col">
            <span
              id="nav_title"
              className="cursor-pointer pl-[1rem] "
              onClick={handleGoHome}
            >
              {/* The Digital Ship */}
              O.Z.docs
            </span>
          </div>
          <div className="navbar md:text-xl text-3xl gap-4 flex flex-col min-h-fit">
            <p
              id="nav_item"
              className="md:pl-[2rem] pl-[1rem] hover:underli hover:cursor-pointer hover:bg-indigo-800"
              onClick={handleGoToSkills}
            >
              <span className="jetBrains">01.</span>
              Skills
            </p>
            <p
              id="nav_item"
              className="toanim pl-[2rem] hover:cursor-pointer hover:bg-indigo-800"
              onClick={handleGoToProjects}
            >
              <span className="jetBrains">02.</span>
              Projects
            </p>
            <p
              id="nav_item"
              className="toanim pl-[2rem] hover:cursor-pointer hover:bg-indigo-800 "
              onClick={handleGoToExp}
            >
              <span className="jetBrains">03.</span>
              Experiences
            </p>
            <p
              id="nav_item"
              className="toanim pl-[2rem] hover:cursor-pointer hover:bg-indigo-800 "
              onClick={handleGoToContact}
            >
              <span className="jetBrains">04.</span>
              Contact
            </p>
            <div
              id="nav_item"
              className="toanim ml-[2rem] px-[1rem] py-[0.5rem] flex gap-1 w-fit border-[1px] border-[yellow] hover:cursor-pointer hover:bg-indigo-800
             "
            >
              <span>
                <ExtLink className="pb-1 h-[1.7rem] inline" />
              </span>
              <span>Resume</span>
            </div>
            <div className="text-lg text-white mt-[25%] flex gap-2 toanim pl-[2rem]">
              <a
                href="https://github.com/ZouicheOmar"
                target="blank"
                className="flex gap-2 items-center hover:cursor-pointer"
              >
                <span className=" hover:cursor-pointer hover:text-[yellow] hover:underline hover:underline-offset-4">
                  Github
                </span>
              </a>
              <a
                href="mailto:zouiche.omar@gmail.com?subject = Feedback&body = Message"
                target="blank"
                className="flex gap-2 items-center hover:cursor-pointer"
              >
                <span className=" hover:cursor-pointer hover:text-[yellow] hover:underline hover:underline-offset-4">
                  Mail
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/omar-zouiche-aaab27274/"
                target="blank"
                className="flex items-center gap-2 hover:cursor-pointer"
              >
                <span className=" hover:cursor-pointer hover:text-[yellow] hover:underline hover:underline-offset-4">
                  Linkedin
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed z-20 md:hidden ml-0 mr-0 top-0 left-0 min-w-full text-[yellow] h-[4rem] py-4 px-2 bg-indigo-950 flex justify-between">
        <span
          className="cursor-pointer solata  text-2xl font-bold hover:underline hover:underline-offset-4"
          onClick={handleGoTop}
        >
          O.Z.docs
        </span>
        <SideMenu />
      </div>
    </>
  )
}

export default Navbar
