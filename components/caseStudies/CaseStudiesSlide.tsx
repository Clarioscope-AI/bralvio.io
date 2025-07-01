"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { caseStudiesSlides } from "@/data/caseStudiesSliderData";

const CaseStudiesSlide = () => {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: "auto",
      spacing: 15,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider my-20 mb-40">
      {caseStudiesSlides.map((slide, index) => (
        <div
          key={index}
          className="keen-slider__slide  bg-[#101112] min-w-[300px] lg:min-w-[450px] lg:h-[400px]  rounded-lg gap-4 cursor-pointer relative"
        >
          <Image
            src={slide.image}
            alt="case-study-img"
            width={450}
            height={80}
         
          />
        <div className="p-2">
              <h3 className="text-tertiary font-semibold">{slide.title}</h3>
            <p className="text-secondary font-semibold text-[14px] lg:text-xl hidden lg:flex">
              {slide.subtitle}
            </p>
            <p className="text-secondary font-semibold text-[14px] lg:text-xl lg:hidden">
              {slide.subtitle.length > 50
                ? slide.subtitle.slice(0, 35) + "..."
                : slide.subtitle}
            </p>
        </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudiesSlide;
