/** @format */
import {useEffect} from 'react'
import fadeInView from '../functions/animations/fadeInView'
import {ArrowUp} from '../assets/icons'

import {GithubIcon, MailIcon, LinkedInIcon} from '../assets/icons'

const HeroSection = () => {
  const handleArrowDown = () => {
    const element = document.getElementById('skills')
    element.scrollIntoView({behavior: 'smooth', inline: 'start'})
  }
  useEffect(() => {
    fadeInView('#hero')
  })
  return (
    <>
      <div
        className="relative hidden w-full h-screen md:grid place-content-center place-items-center rounded p-2"
        // className="w-full h-screen flex flex-col justify-center rounded p-2"
        id="hero"
      >
        <div className="z-10 w-fit h-fit flex flex-col justify-center rounded p-2">
          <span className="formatDJR text-2xl">Hello, Bonjour, مرحباً</span>
          <span className="title text-5xl">Omar Zouiche</span>
          <span className="basierFont font-[500] text-xl w-1/2 leading-tight">
            A Frontend Developer, graduate in Mathematics, interested in App
            Design and User Experience, Constant learner, currently based in
            France
          </span>
          {/* <span className="formaDJR text-xl w-1/2 leading-tight">
            Currently at Erasmus Internation Network
          </span> */}
          <div className="flex gap-3">
            <div className="cursor-pointer flex items-end gap-1  w-fit p-1 px-2 rounded ">
              <GithubIcon className="w-[1.8rem] stroke-[1.5px]" />
              <span className="formaDJR text-lg">Github</span>
            </div>
            <div className="cursor-pointer flex items-end gap-1  w-fit p-1 px-2 rounded ">
              <MailIcon className="w-[2rem] stroke-[1.5px]" />
              <span className="formaDJR  text-lg">zouiche.omar@gmail.com</span>
            </div>
            <div className="flex items-end gap-1  w-fit p-1 px-2 rounded cursor-pointer ">
              <LinkedInIcon className="w-[2rem] stroke-[1.5px]" />
              <span className="formaDJR text-lg">LinkedIn</span>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full mix-blend- border-white top-0 left-0 z-0">
          <img src="./twareg.png" />
        </div>
      </div>

      <div
        id="mobile_hero"
        className="relative h-[80vh] md:hidden flex flex-col justify-center basierFont mt-[5rem] w-full"
      >
        <div className="z-10 h-fit flex flex-col justify-center rounded ">
          {/* <span className="formatDJR text-2xl">Hello, Bonjour, مرحباً</span> */}
          <span className="title text-5xl">Omar Zouiche</span>
          {/* <span className=" font-[500] text-xl leading-tight">
            A Frontend developper, ex math student who lately got obssessed on
            creating magic by typing logic on his computer, based in France
            <br />
            Currently at Erasmus Internation Network
          </span> */}
          <span className=" font-[500] text-xl leading-tight">
            A Frontend Developer, graduate in Mathematics, interested in App
            Design and User Experience, Constant learner, currently based in
            France{' '}
            {/* <br />
            Currently at Erasmus Internation Network */}
          </span>
          <div className="flex flex-wrap gap-2 mt-2 ml-2 ">
            <div className="cursor-pointer flex items-center rounded ">
              <GithubIcon className="w-[1.7rem]" />
              <span className=" ">Github</span>
            </div>
            <div className="cursor-pointer flex items-center gap-1  w-fit  rounded ">
              <MailIcon className="w-[1.7rem]" />
              <span className="">zouiche.omar@gmail.com</span>
            </div>
            <div className="flex items-center gap-1 w-fit  rounded cursor-pointer ">
              <LinkedInIcon className="w-[1.7rem]" />
              <span className=" ">LinkedIn</span>
            </div>
          </div>
          <span
            className="absolute cursor-pointer bottom-[1rem] right-[1rem]"
            onClick={handleArrowDown}
          >
            <ArrowUp className="rotate-180 scale-125" />
          </span>
        </div>
        <div className="absolute w-full h-full mix-blend-luminosity	 top-0 left-0 z-0">
          <img
            src="./twareg.png"
            className="object-cover object-right-bottom  h-full opacity-60 "
          />
        </div>
      </div>
    </>
  )
}

export default HeroSection
