/** @format */

export default function navigatTo(element) {
  const el = document.getElementById(element)
  el.scrollIntoView({behavior: "smooth"})
}
