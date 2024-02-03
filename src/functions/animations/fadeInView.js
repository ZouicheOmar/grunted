/** @format */

import {animate, inView} from "motion"

export default function fadeInView(selector) {
  inView(selector, (info) => {
    animate(info.target, {opacity: [0, 1]}, {duration: 1.5})
  })
}
