/** @format */

import {animate} from "motion"

function fadeFromTop(selector) {
  const element = document.getElementById(selector)
  animate(
    element,
    {
      color: ["white", "yellow"],
      y: [-15, 0],
      x: [0, 15],
      opacity: [0, 1],
    },
    {duration: 0.8}
  )
}

export default fadeFromTop
