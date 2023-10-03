/** @format */
import {useEffect} from 'react'
import fadeInView from '../functions/animations/fadeInView'

const ProjectsSection = () => {
  useEffect(() => {
    fadeInView('#projects')
  })
  return (
    <div
      className=" w-full rounded md:px-[5%] pt-[5rem] flex flex-col gap-2 h-fit "
      id="projects"
    >
      <p className="formaDJR font-bold text-5xl leading-tight">Projects</p>
      <div className="basierFont light:text-neutral-900 mt-[0.5rem] dark:text-white border-b-[1px] border-b-neutral-500 pb-2 ">
        <span className="text-xl light:text-neutral-900 dark:text-white formaDJR font-[500] ">
          Web development; Erasmus Internation Network{' '}
          <span className="jetBrains text-sm text-orange-500">(Current)</span>
        </span>
        <br />
        <p className="text-lg leading-tight py-2 pl-2 text-neutral-">
          <span className="formaDJR font-[500] ">Role :</span>
          <br />
          <span>Frontend Developpement</span>
          <br />
          <span>Backend Development</span>
          <br />
          <span>Involved in visual identity and branding</span>
          <br />
        </p>
        <span>What's involved in the project ? </span>
        <br />
        <p>
          PROJECT DESCRIPTION : Enim in pariatur officia labore elit. Ad
          proident magna aliqua consectetur ut laboris est esse anim. Laboris
          eiusmod non cillum elit irure ut eu eiusmod exercitation nisi. Velit
          occaecat irure ea anim. Ut duis nulla cupidatat reprehenderit sunt
          excepteur. Velit dolore labore nostrud cupidatat quis. Irure aliquip
          Lorem deserunt aute dolor mollit ut Lorem.
        </p>
      </div>

      <div className="basierFont light:text-neutral-900 dark:text-white mt-[2rem] border-b-0 pb-2 ">
        <span className="text-xl light:text-neutral-900 dark:text-white formaDJR font-[500] ">
          Data optimisation and Mathematical Models
        </span>
        <br />
        <p className="text-lg leading-tight py-2 pl-2 text-neutral-">
          <span className="formaDJR font-[500] ">Role :</span>
          <br />
          <span>Frontend Developpement</span>
          <br />
          <span>Backend Development</span>
          <br />
          <span>Backend Development</span>
          <br />
          <span>Involved in visual identity and branding</span>
          <br />
        </p>
        <p>
          Enim in pariatur officia labore elit. Ad proident magna aliqua
          consectetur ut laboris est esse anim. Laboris eiusmod non cillum elit
          irure ut eu eiusmod exercitation nisi. Velit occaecat irure ea anim.
          Ut duis nulla cupidatat reprehenderit sunt excepteur. Velit dolore
          labore nostrud cupidatat quis. Irure aliquip Lorem deserunt aute dolor
          mollit ut Lorem.
        </p>
      </div>
    </div>
  )
}

export default ProjectsSection

{
  /* Data optimisation and Mathematical Models */
}
