/** @format */
import {useEffect} from "react"
import fadeInView from "../functions/animations/fadeInView"
import {GithubIcon, MailIcon, LinkedInIcon, ExtLink} from "../assets/icons"
import pdf from "../assets/CV-ZOUICHE.pdf"

import {TEXT} from "../text"
import {Title} from "./Title"
import {GitHubLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons"

const ContactSection = () => {
  useEffect(() => {
    fadeInView("#contact")
  })
  return (
    <>
      <div
        className="w-full h-screen md:px-[5%] pt-[5rem] md:pt-[2rem] flex flex-col gap-2 "
        id="contact"
      >
        <Title value="Subjet & Contact" />
        <div className="w-full pt-[2rem] flex flex-col items-center gap-16 text-lg">
          <p className="w-full text-start">{TEXT.CONTACT}</p>
          <div className="flex flex-col items-center w-full gap-3">
            <a
              className="flex items-center gap-2  w-full"
              href="https://github.com/ZouicheOmar"
              target="blank"
              rel="noreferrer"
            >
              <GitHubLogoIcon className="size-[1.5rem]" />
              <span>Github Profile</span>
            </a>
            <a
              className="flex items-center gap-2 w-full"
              href="https://www.linkedin.com/in/omar-zouiche-aaab27274/ "
              target="blank"
              rel="noreferrer"
            >
              <LinkedInLogoIcon className="size-[1.5rem]" />
              <span>Find me on LinkedIn</span>
            </a>
            <a
              className="flex items-center gap-2  w-full"
              href="mailto:zouiche.omar@gmail.com?subject = Feedback&body = Message"
              target="blank"
              rel="noreferrer"
            >
              <MailIcon className="pt-1 h-[1.7rem] dark:fill-white" />
              zouiche.omar@gmail.com
            </a>
            <a
              href={pdf}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2  w-full"
            >
              <ExtLink className="h-[1.7rem]" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactSection
