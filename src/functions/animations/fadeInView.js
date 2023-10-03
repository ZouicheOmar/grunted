/** @format */

import {animate, inView} from 'motion'

async function fadeInView(selector) {
  await inView(selector, async (info) => {
    await animate(info.target, {opacity: [0, 1]}, {duration: 1})
  })
}

export default fadeInView
