/** @format */
import {useEffect} from 'react'
import fadeInView from '../functions/animations/fadeInView'
import {GithubIcon, MailIcon, LinkedInIcon, ExtLink} from '../assets/icons'

const ContactSection = () => {
  useEffect(() => {
    fadeInView('#contact')
  })
  return (
    <div
      className=" w-full h-screen rounded md:px-[5%] pt-[5rem] flex flex-col gap-2 "
      id="contact"
    >
      <p className="formaDJR font-bold text-5xl">Subjet & Contact</p>
      <div className="w-full md:pl-[1rem] pt-[2rem] flex flex-col items-center gap-16 text-xl">
        <p className="basierFont">
          Approaching the end of my exciting mission with the Erasmus
          Internation Network Team, I am currently seeking for opportunities to
          contribute with my skills to build and innovate projects.
        </p>
        <div className="formaDJR flex flex-col items-center w-[95%] gap-3">
          <a
            className="flex items-center gap-2  w-full"
            href="https://github.com/ZouicheOmar"
            target="blank"
          >
            <span>
              <GithubIcon className="h-[1.7rem] " />
            </span>
            <span>Github Profile</span>
          </a>
          <a
            className="flex items-center gap-2 w-full"
            href="https://www.linkedin.com/in/omar-zouiche-aaab27274/ "
            target="blank"
          >
            <span>
              <LinkedInIcon className="pt-[1px] h-[1.7rem]" />
            </span>
            <span>Find me on LinkedIn</span>
          </a>
          <a
            className="flex items-center gap-2  w-full"
            href="mailto:zouiche.omar@gmail.com?subject = Feedback&body = Message"
            target="blank"
          >
            <span>
              <MailIcon className="pt-1 h-[1.7rem]" />
            </span>
            zouiche.omar@gmail.com
          </a>
          <a
            className="flex items-center gap-2  w-full"
            href="mailto:zouiche.omar@gmail.com?subject = Feedback&body = Message"
            target="blank"
          >
            <span>
              <ExtLink className="h-[1.7rem]" />
            </span>
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
