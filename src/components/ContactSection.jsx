/** @format */
import {useEffect} from 'react'
import fadeInView from '../functions/animations/fadeInView'

const ContactSection = () => {
  useEffect(() => {
    fadeInView('#contact')
  })
  return (
    <div
      className=" w-full  rounded md:px-[5%] pt-[5rem] flex flex-col gap-2 h-fit"
      id="contact"
    >
      <p className="formaDJR font-bold text-5xl">Contact</p>
      <div className="w-full md:pl-[1rem]">
        <p className="basierFont">
          Feel free to contact throught email or social media. <br /> I mostly
          learn by myself, I'm looking for a position in a a company as a
          frontend developer, willing to get involvled in big projects
        </p>
        <p>
          Find me on LinkedIn : <br /> LinkedIn logo
        </p>
      </div>
    </div>
  )
}

export default ContactSection
