/** @format */
import {useEffect} from "react"
import fadeInView from "../functions/animations/fadeInView"
import {GithubIcon, MailIcon, LinkedInIcon, ExtLink} from "../assets/icons"
import pdf from "../assets/CV-ZOUICHE.pdf"

import {TEXT} from "../text"

const ContactSection = () => {
  useEffect(() => {
    fadeInView("#contact")
  })
  return (
    <>
      <div
        className="generalFont w-full h-screen rounded md:px-[5%] pt-[5rem] md:pt-[2rem] flex flex-col gap-2 "
        id="contact"
      >
        <p className="font-medium text-5xl">Subjet & Contact</p>
        <div className="w-full pt-[2rem] flex flex-col items-center gap-16 text-xl">
          <p>{TEXT.CONTACT}</p>
          <div className=" flex flex-col items-center w-full gap-3">
            <a
              className="flex items-center gap-2  w-full"
              href="https://github.com/ZouicheOmar"
              target="blank"
              rel="noreferrer"
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
              rel="noreferrer"
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
              rel="noreferrer"
            >
              <span>
                <MailIcon className="pt-1 h-[1.7rem]" />
              </span>
              zouiche.omar@gmail.com
            </a>
            <a
              href={pdf}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2  w-full"
            >
              <span>
                <ExtLink className="h-[1.7rem]" />
              </span>
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactSection
