"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Image from "next/image";
import { AiOutlineSelect } from "react-icons/ai";
// import slideimg from "@/assets/setting.webp";
// import slideimg2 from "@/assets/slideImg.webp";
// import slideimg3 from "@/assets/slideImg3.webp";
import { slides } from "@/data/sliderData";
const Slider = () => {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: "auto",
      spacing: 15,
    },
  });
  // interface SlideData {
  //   title: string;
  //   subtitle: string;
  //   image: StaticImageData | string;
  //   link: string;
  // }
  // const slides: SlideData[] = [
  //   {
  //     title: "Leaderboards",
  //     subtitle: "SEAL Leaderboards: Expert-Driven Private Evaluations",
  //     image: slideimg,
  //     link: "",
  //   },
  //   {
  //     title: "Research",
  //     subtitle: "LLMs Easily Jailbroken as Browser Agents",
  //     image: slideimg2,
  //     link: "",
  //   },
  //   {
  //     title: "Research",
  //     subtitle: "Multi-Turn Human Jailbreaks on LLM Defenses",
  //     image: slideimg3,
  //     link: "",
  //   },
  //   {
  //     title: "Research",
  //     subtitle: "Examination of LLM Performance on Grade School Arithmetic",
  //     image: slideimg,
  //     link: "",
  //   },
  //   {
  //     title: "Research",
  //     subtitle: "Examination of LLM Performance on Grade School Arithmetic",
  //     image: slideimg3,
  //     link: "",
  //   },
  //   {
  //     title: "Research",
  //     subtitle: "Examination of LLM Performance on Grade School Arithmetic",
  //     image: slideimg2,
  //     link: "",
  //   },
  // ];

  return (
    <div ref={sliderRef} className="keen-slider my-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="keen-slider__slide p-6 bg-[#101112] min-w-[300px] lg:min-w-[450px] lg:h-[188px] flex rounded-lg gap-4 cursor-pointer relative"
        >
          <Image
            src={slide?.image}
            alt="demoimg"
            width={80}
            height={80}
            className="w-20 h-20"
          ></Image>
          <div className="group">
            <h3 className="text-[#D2ACD8] font-semibold">{slide?.title}</h3>
            <p className="text-secondary font-semibold text-[14px] lg:text-xl hidden lg:flex">
              {slide?.subtitle}
            </p>
            <p className="text-secondary font-semibold text-[14px] lg:text-xl lg:hidden">
              {slide.subtitle.length > 50
                ? slide?.subtitle.slice(0, 35) + "..."
                : slide?.subtitle}
            </p>

            <span className="text-secondary text-[14px] lg:text-[16px] flex items-center font-bold rounded-full p-2 border-2 w-8 h-8 absolute right-3 lg:bottom-2 group-hover:bg-white group-hover:text-black transition">
              <AiOutlineSelect />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
