/** @format */
import {useEffect} from 'react'
import fadeInView from '../functions/animations/fadeInView'

const ExperiencesSection = () => {
  useEffect(() => {
    fadeInView('#experiences')
  })
  return (
    <div
      className=" w-full  rounded px-[5%] pt-[5rem] flex flex-col gap-2 h-screen"
      id="experiences"
    >
      <p className="formaDJR font-bold text-5xl">Experiences</p>
    </div>
  )
}

export default ExperiencesSection
