/** @format */
import {animate, stagger} from 'motion'
import {useEffect} from 'react'
import fadeFromTop from '../functions/animations/fadeFromTop'

// async function triggerAnim() {
//   const element = document.getElementById('nav_title')
//   console.log(element.getBoundingClientRect())
//   await animate(
//     '#nav_title',
//     {
//       color: ['red', 'yellow'],
//       // y: 15,
//       // rotate: [30, 0],
//       y: [0, 15],
//       x: [0, 15],
//       opacity: [0, 1],
//     },
//     {duration: 0.8}
//   )
// }

async function animateNavbarItems() {
  await animate(
    '#nav_item',
    {
      color: ['red', 'yellow'],
      y: [0, 5],
      // translateY: [0, 5],
      opacity: [0, 1],
    },
    {duration: 0.3, delay: stagger(0.15)}
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

  // triggerAnim()

  useEffect(() => {
    // triggerAnim()
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
              className="cursor-pointer"
              onClick={handleGoHome}
            >
              The Digital Ship
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
            <p
              id="nav_item"
              className="toanim ml-[1rem] px-[1rem] w-fit border-[1px] border-[yellow] hover:cursor-pointer hover:bg-indigo-800
             "
            >
              download Resume
            </p>
            <div className="text-lg text-white mt-[25%] flex gap-2 toanim pl-[2rem]">
              <span className=" hover:cursor-pointer hover:text-[yellow] hover:underline hover:underline-offset-4">
                Github
              </span>
              <span className=" hover:cursor-pointer hover:text-[yellow] hover:underline hover:underline-offset-4">
                Mail
              </span>
              <span className=" hover:cursor-pointer hover:text-[yellow] hover:underline hover:underline-offset-4">
                Linkedin
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed md:hidden ml-0 mr-0 top-0 left-0 min-w-full text-[yellow] h-[4rem] py-4 px-2 bg-indigo-950 flex justify-between">
        <span className="cursor-pointer text-2xl font-bold jetBrains hover:underline hover:underline-offset-4">
          O.Z.docs
        </span>
        <span className="title">MENU</span>
      </div>
    </>
  )
}

export default Navbar
