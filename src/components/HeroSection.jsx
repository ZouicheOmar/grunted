/** @format */
import {useEffect} from "react"
import fadeInView from "../functions/animations/fadeInView"
import {ArrowUp} from "../assets/icons"

import {GithubIcon, MailIcon, LinkedInIcon} from "../assets/icons"

import {TEXT} from "../text"

const HeroSection = () => {
  const handleArrowDown = () => {
    const element = document.getElementById("skills")
    element.scrollIntoView({behavior: "smooth", inline: "start"})
  }
  useEffect(() => {
    fadeInView("#hero")
    fadeInView("#mobile_hero")
  })
  return (
    <>
      <div
        className="relative hidden w-full h-screen md:grid place-content-center place-items-center rounded p-2"
        id="hero"
      >
        <div className="generalFont z-10 w-fit h-fit flex flex-col justify-center rounded p-2">
          <h1 className="font-medium text-7xl">Omar Zouiche</h1>

          <span className="  text-2xl w-3/4 leading-tight">{TEXT.HERO}</span>

          <div className="flex gap-3 font-[500] dark:font-normal">
            <a
              href="https://github.com/ZouicheOmar"
              target="blank"
              rel="noreferrer"
              className="cursor-pointer  flex items-end gap-1  w-fit p-1 px-2 rounded "
            >
              <GithubIcon className="w-[1.8rem] stroke-[1.5px]" />
              <span className="formaDJR text-lg ">Github</span>
            </a>

            <a
              href="mailto:zouiche.omar@gmail.com?subject = Feedback&body = Message"
              target="blank"
              rel="noreferrer"
              className="cursor-pointer flex items-end gap-1  w-fit p-1 px-2 rounded "
            >
              <MailIcon className="w-[2rem] stroke-[1.5px]" />
              <span className="formaDJR  text-lg">zouiche.omar@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/omar-zouiche-aaab27274/"
              target="blank"
              rel="noreferrer"
              className="flex items-end gap-1  w-fit p-1 px-2 rounded cursor-pointer "
            >
              <LinkedInIcon className="w-[2rem] stroke-[1.5px]" />
              <span className="formaDJR text-lg">LinkedIn</span>
            </a>
          </div>
          <span
            className="absolute cursor-pointer bottom-[20%] right-[1rem]"
            onClick={handleArrowDown}
          >
            <ArrowUp className="rotate-180 scale-150" />
          </span>
        </div>
        <div className="absolute w-full h-full mix-blend- border-white top-0 left-0 z-0">
          <img
            src="./twareg.png"
            className="object-cover object-right-bottom h-full opacity-10"
          />
        </div>
      </div>

      <div
        id="mobile_hero"
        className="relative md:h-[80vh] h-screen generalFont md:hidden flex flex-col justify-center basierFont mt-[5rem] w-full"
      >
        <div className="z-10 h-fit flex flex-col justify-center rounded ">
          <h1 className="font-semibold ">Omar Zouiche</h1>

          <span className="text-xl leading-tight">{TEXT.HERO}</span>
          <div className="flex flex-wrap gap-x-10 gap-y-2 mt-6 ml2 ">
            <a
              href="https://github.com/ZouicheOmar"
              target="blank"
              rel="noreferrer"
              className="cursor-pointer flex items-center rounded "
            >
              {" "}
              <GithubIcon className="w-[1.7rem]" />
              <span className=" ">Github</span>
            </a>
            <a
              href="mailto:zouiche.omar@gmail.com?subject = Feedback&body = Message"
              target="blank"
              rel="noreferrer"
              className="cursor-pointer flex items-center gap-1  w-fit  rounded "
            >
              <MailIcon className="w-[1.7rem]" />
              <span className="">zouiche.omar@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/omar-zouiche-aaab27274/"
              target="blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:cursor-pointer"
            >
              <LinkedInIcon className="w-[1.7rem]" />
              <span className=" ">LinkedIn</span>
            </a>
          </div>
          <span
            className="absolute cursor-pointer bottom-[20%] right-[1rem]"
            onClick={handleArrowDown}
          >
            <ArrowUp className="rotate-180 scale-150" />
          </span>
        </div>
        <div className="absolute w-full h-5/6 mixblend-luminosity top-0 left-0 z-0">
          <img
            src="./twareg.png"
            className="object-cover opacity-30 object-right-bottom h-full dark:opacity-10 "
          />
        </div>
      </div>
    </>
  )
}

export default HeroSection
