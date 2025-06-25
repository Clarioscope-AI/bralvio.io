'use client'

import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


export default () => {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
    breakpoints: {
    '(max-width: 1000px)': {
      slides:{
        perView:1
      }
    },
  },
  })

  return (
    <div ref={sliderRef} className="keen-slider my-20">
      <div className="keen-slider__slide number-slide1 p-6 bg-white mx-2">1</div>
      <div className="keen-slider__slide number-slide2 p-6 bg-white mx-2">2</div>
      <div className="keen-slider__slide number-slide3 p-6 bg-white mx-2">3</div>
      <div className="keen-slider__slide number-slide4 p-6 bg-white mx-2">4</div>
      <div className="keen-slider__slide number-slide5 p-6 bg-white mx-2">5</div>
      <div className="keen-slider__slide number-slide6 p-6 bg-white mx-2">6</div>
    </div>
  )
}
