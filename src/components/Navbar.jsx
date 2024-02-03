/** @format */
import {animate, stagger} from "motion"
import {useEffect, useState} from "react"
import navigatTo from "../utils/navigateTo"

import {sections} from "../text"

import {ArrowUp} from "../assets/icons"
import {MailIcon, ExtLink} from "../assets/icons"
import pdf from "../assets/CV-ZOUICHE.pdf"
import {
  Cross1Icon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons"

const animateNavbarItems = () => {
  animate(
    ".nav-item",
    {
      // color: "yellow",
      y: [0, 5],
      opacity: [0, 1],
    },
    {duration: 0.1, delay: stagger(0.1)}
  )
}

const SmNavbar = () => {
  const [open, setOpen] = useState(false)

  const goTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
  }

  return (
    <div className="fixed z-20 md:hidden ml-0 mr-0 top-0 left-0 min-w-full  h-[4rem] py-4 px-2 bg-slate-800 flex items-center justify-between">
      <span
        className="cursor-pointer formaDJR text-2xl font-bold hover:underline hover:underline-offset-4"
        onClick={goTop}
      >
        O.Z.docs
      </span>
      <span
        onPointerDown={() => {
          setOpen(!open)
          animateNavbarItems()
        }}
        className="relative"
      >
        <HamburgerMenuIcon
          className={`${
            open ? "rotate-90 opacity-0" : "rotate-0"
          } w-[1.5rem] h-[1.5rem]  transition-all duration-500`}
        />
        <div
          className={`${
            open ? "-left-[100vw]" : "left-[100vw]"
          } absolute overflow-hidden w-[110vw] h-[100vh] top-[-3vh] backdrop-blur-lg flex justify-end transition-all duration-300`}
        >
          <div className="w-[55vw] h-full flex flex-col justify-between pb-[3rem] bg-slate-800 ">
            <span
              onClick={() => {
                setOpen(!open)
              }}
              className="cursor-pointer font-bold jetBrains self-end pr-[1.2rem] sm:pr-[3rem] pt-[1rem]"
            >
              <Cross1Icon className="scale-150" />
            </span>
            <Body onPointerDown={() => setOpen(!open)} />

            <span
              onPointerDown={goTop}
              className="w-full nav-item flex justify-end px-[2rem] sm:pr-[3rem]"
            >
              <ArrowUp className=" cursor-pointer stroke-w-[1px]  scale-150 " />
            </span>
          </div>
        </div>
      </span>
    </div>
  )
}

const Contact = () => (
  <div className="nav-item flex flex-col flex-wrap gap-x-2 toanim ">
    <a
      href="https://github.com/ZouicheOmar"
      target="blank"
      rel="noreferrer"
      className="flex gap-2 pl-[2rem] hover:bg-slate-800 transition-colors duration-200 items-center hover:cursor-pointer"
    >
      <GitHubLogoIcon />
      <span className=" hover:cursor-pointer  ">Github</span>
    </a>
    <a
      href="mailto:zouiche.omar@gmail.com?subject = Feedback&body = Message"
      target="blank"
      rel="noreferrer"
      className="flex gap-2 pl-[2rem] hover:bg-slate-800 transition-colors duration-200 items-center hover:cursor-pointer"
    >
      <MailIcon className="h-[1rem] w-[1rem] dark:fill-white" />
      <span className=" hover:cursor-pointer  ">Mail</span>
    </a>
    <a
      href="https://www.linkedin.com/in/omar-zouiche-aaab27274/"
      target="blank"
      rel="noreferrer"
      className="flex items-center pl-[2rem] hover:bg-slate-800 transition-colors duration-200 gap-2 hover:cursor-pointer"
    >
      <LinkedInLogoIcon />
      <span className=" hover:cursor-pointer ">Linkedin</span>
    </a>
  </div>
)

const Header = () => {
  useEffect(() => {
    const title = document.getElementById("nav_title")
    animate(
      title,
      {
        y: [-15, 0],
        x: [0, 15],
        opacity: [0, 1],
      },
      {duration: 0.8}
    )
    return () => null
  })

  return (
    <div className="w-full min-h-[7rem] ">
      <span
        id="nav_title"
        className="cursor-pointer pl-[1rem]"
        onPointerDown={() => navigatTo(sections.home)}
      >
        O.Z.docs
      </span>
    </div>
  )
}

const Item = ({section, index}) => {
  return (
    <li
      className="nav-item pl-[2rem] py-2 hover:cursor-pointer hover:bg-slate-900 transition-colors duration-200"
      onPointerDown={() => navigatTo(section)}
    >
      <span className="jetBrains">{`0${index}.`}</span>
      {section}
    </li>
  )
}

const Body = (props) => {
  useEffect(() => {
    animate(
      ".nav-item",
      {
        // color: "yellow",
        y: [0, 5],
        opacity: [0, 1],
      },
      {duration: 0.1, delay: stagger(0.1)}
    )
    return () => null
  }, [])
  return (
    <div className=" grow flex flex-col">
      <ul {...props} className="navbar grow text-xl md:text-xl">
        {Object.entries(sections).map((item, index) =>
          index >= 1 ? (
            <Item section={item[1]} index={index} key={index} />
          ) : null
        )}
      </ul>
      <div className="flex flex-col gap-6  jusitfy-around">
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="nav-item justify-between ml-[2rem] px-[2rem] py-[0.5rem] flex gap-1 w-fit border-[1px] md:border-slate-800 border-slate-700 hover:cursor-pointer hover:bg-slate-800 rounded-md transition-colors duration-200"
        >
          <span>Resume</span>
          <ExtLink />
        </a>
        <Contact />
      </div>
    </div>
  )
}

const MdNavbar = () => (
  <div className="hidden md:flex flex-col justify-between py-[5rem] sticky w-1/4 bg-slate-950 max-h-screen top-0 left-0 border-r-[1px] border-r-slate-500/25 ">
    <Header />
    <Body />
  </div>
)

const Navbar = () => {
  return (
    <>
      <MdNavbar />
      <SmNavbar />
    </>
  )
}

export default Navbar
