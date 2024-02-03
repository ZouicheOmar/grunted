/** @format */
import {useEffect} from "react"
import {TEXT, sections} from "../text"

import navigatTo from "../utils/navigateTo"
import fadeInView from "../functions/animations/fadeInView"

import {MailIcon, ArrowUp} from "../assets/icons"
import {GitHubLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons"

const BG = () => (
  <div className="absolute w-full h-5/6 md:h-full  top-0 left-0 z-0">
    <img
      src="./twareg.png"
      className="object-cover object-right-bottom h-full opacity-10"
    />
  </div>
)

const ScrollToSectionArrow = () => (
  <span
    className="absolute cursor-pointer bottom-[5%] right-3 md:right-[1rem]"
    onClick={() => navigatTo(sections.projects)}
  >
    <ArrowUp className="rotate-180 scale-150" />
  </span>
)

const HeroSection = () => {
  useEffect(() => {
    fadeInView("#hero")
  })
  return (
    <>
      <div
        id="hero"
        className="relative w-full h-[90vh] md:h-screen  mt-[4rem] md:mt-0  md:p-0 flex flex-col justify-center md:grid place-content-center place-items-center "
      >
        <div className="w-full flex flex-col justify-center  grow max-h-[60%] md:max-h-full gap-3">
          <h1 className="font-medium formaDJR w-full leading-none md:text-7xl">
            Omar Zouiche
          </h1>
          <span className="text-lg md:text-2xl px-1 text-balance md:w-3/4 leading-tight">
            {TEXT.HERO}
          </span>
        </div>
        <div className="flex flex-col w-full md:flex-row gap-2 text-xl md:hidden ">
          <a
            href="https://github.com/ZouicheOmar"
            target="blank"
            rel="noreferrer"
            className="cursor-pointer flex items-center  gap-1 w-fit md:p-1 md:px-2 "
          >
            <GitHubLogoIcon className="size-full" />
            Github
          </a>

          <a
            href="mailto:zouiche.omar@gmail.com?subject = Feedback&body = Message"
            target="blank"
            rel="noreferrer"
            className="cursor-pointer flex items-center  gap-1  w-fit md:p-1 md:px-2 "
          >
            <MailIcon className="w-[1.7rem] dark:fill-white " />
            zouiche.omar@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/omar-zouiche-aaab27274/"
            target="blank"
            rel="noreferrer"
            className="flex items-center gap-2  w-fit md:p-1 md:px-2 cursor-pointer "
          >
            <LinkedInLogoIcon className="size-full" />
            LinkedIn
          </a>
        </div>
        <ScrollToSectionArrow />
        {/* <BG /> */}
      </div>
    </>
  )
}

export default HeroSection
