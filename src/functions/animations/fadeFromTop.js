/** @format */

import {animate} from 'motion'

async function fadeFromTop(selector) {
  const element = document.getElementById(selector)
  await animate(
    element,
    {
      color: ['red', 'yellow'],
      y: [-15, 0],
      x: [0, 15],
      opacity: [0, 1],
    },
    {duration: 0.8}
  )
}

export default fadeFromTop
