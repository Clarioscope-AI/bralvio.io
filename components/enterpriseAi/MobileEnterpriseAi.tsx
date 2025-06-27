'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { sections } from '@/data/generativeAI'; 
import Button from '../ui/button/Button';
import { SectionType } from '@/types/generativeAI';

const MobileEnterpriseAi: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleClick = (index: number) => {
    setActiveSlide(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const slideWidth = container.offsetWidth;
      container.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const slideWidth = container.offsetWidth;

    const index = Math.round(scrollLeft / slideWidth);

    if (index !== activeSlide) {
      setActiveSlide(index);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20">
        <button className="overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-black/55 bg-opacity-5 shadow-lg text-[#D1AAD7] rounded-full px-4 py-2 border-1">
          AI for the Enterprise
        </button>
        <h1 className="text-[#FFFFFF] text-3xl font-semibold py-4 text-center">Generative AI Architecture</h1>
        <p className="text-[#FFFFFF] text-xs text-center px-5">
          Whether you’re building your own models or applying foundation models to your business, data remains the biggest bottleneck to AI.
        </p>
        <Button
          label="Book a Demo"
          arrow
          classNames="text-primary bg-[#B277AB] hover:text-white rounded-lg px-4 py-2 hover:bg-[#5B3557] transition-colors duration-300 mt-5"
        />
      </div>

      <div className="flex flex-col justify-center mx-auto h-[590px] sm:h-[700px] mb-12 md:mb-20 xl:hidden mt-10">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
          style={{ scrollBehavior: 'smooth' }}
          onScroll={handleScroll}  
        >
          {sections.map((slide: SectionType, index) => (
            <div
              key={slide.id}
              className="min-w-full snap-center flex flex-col justify-center items-center overflow-visible mb-10"
            > 
              <Image
                src={slide.image}
                alt={slide.title}
                width={300}
                height={250}
                className="object-contain w-full h-auto max-w-[334px] max-h-[307px]"
                priority={index === 0}
              />
              <div className="px-7 w-full sm:w-auto sm:px-0 mt-10 space-y-4">
                <p className="text-2xl leading-10 font-aeonik text-white">{slide.title}</p>
                <p className="text-white/70">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-50 mx-auto mt-4 flex justify-center">
          {sections.map((_, index) => (
            <button
              key={index}
              className="px-1 py-2 sm:px-2"
              aria-label={`Slide ${index + 1}`}
              aria-current={activeSlide === index ? 'true' : 'false'}
              onClick={() => handleClick(index)}
            >
              <div
                className={`h-1 sm:h-1.5 md:h-2 rounded-full transition-width duration-300 ${
                  activeSlide === index ? 'bg-white w-4 sm:w-5 md:w-6' : 'bg-white/40 w-1 sm:w-1.5 md:w-2'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileEnterpriseAi;
