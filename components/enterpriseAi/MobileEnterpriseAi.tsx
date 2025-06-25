'use client';
import DataEngineImage from '../../assets/enterprise_ai_image/data-engine.webp';
import FoundationModelsImage from '../../assets/enterprise_ai_image/foundation-models.webp';
import RlhfImage from '../../assets/enterprise_ai_image/rlhf.webp';
import NewFeatureImage from '../../assets/enterprise_ai_image/whole-model.webp';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../ui/button/Button';

const MobileEnterpriseAi: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(3);

  const slides = [
    {
      id: 'fine-tuning',
      title: 'Fine-Tuning and RLHF',
      description:
        'Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs and data from your enterprise.',
      image: DataEngineImage,
    },
    {
      id: 'foundation-models',
      title: 'Foundation Models',
      description:
        'Scale partners or integrates with all of the leading AI models, from open-source to closed-source, such as OpenAI, Google, Meta, Cohere, and more.',
      image: FoundationModelsImage,
    },
    {
      id: 'enterprise-data',
      title: 'Enterprise Data',
      description:
        "Scale's Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation.",
      image: RlhfImage,
    },
    {
      id: 'new-feature',
      title: 'New AI Feature',
      description:
        'Leverage cutting-edge AI capabilities to enhance your enterprise workflows with innovative solutions tailored to your needs.',
      image: NewFeatureImage,
    },
  ];

  const textSlides = slides.filter((slide) => slide.id !== 'new-feature');

  return (

   <>
    
        <div className='flex flex-col justify-center items-center mt-20'>
            <button className=" overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-black/55 bg-opacity-5 shadow-lg text-[#D1AAD7] rounded-full px-4 py-2 border-1">AI for the Enterprise</button>
            <h1 className='text-[#FFFFFF] text-3xl font-semibold py-4'>Generative AI Architecture</h1>
            <p className='text-[#FFFFFF] text-xs  text-center'>Whether you’re building your own models or applying foundation models to your business, data remains the biggest bottleneck to AI.</p>
            <Button
            label="Book a Demo"
            arrow
            classNames="text-primary bg-[#B277AB] rounded-lg px-4 py-2 hover:bg-[#5B3557]transition-colors duration-300 mt-5"></Button>
        </div>
    
      <div className="flex flex-col justify-center mx-auto h-[590px] sm:h-[700px] mb-24 md:mb-40 xl:hidden mt-28">
      {/* Image Slider */}
      <div className="relative w-full pb-6">
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="min-w-full snap-center flex justify-center"
              style={{
                transform: `translateX(${(index - activeSlide) * 100}%)`,
                transition: 'transform 0.3s ease',
              }}
            >
              <Image
                src={typeof slide.image === 'string' ? slide.image : slide.image.src || '/fallback-image.webp'}
                alt={slide.title}
                width={334}
                height={307}
                className="object-contain w-full h-auto max-w-[334px] max-h-[307px]"
                priority={slide.id === 'new-feature'}
                onError={(e) => {
                  console.error(`Failed to load image for ${slide.title}: ${slide.image}`);
                  e.currentTarget.src = '/fallback-image.webp';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text Slider */}
      <div className="px-7 w-screen left-1/2 -translate-x-1/2 relative sm:w-auto sm:px-0">
        <div className="flex overflow-x-auto snap-x snap-mandatory pb-24 scrollbar-hide">
          {textSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`min-w-full snap-center space-y-4 ${
                activeSlide === slides.findIndex((s) => s.id === slide.id)
                  ? 'opacity-100'
                  : 'opacity-60'
              }`}
              style={{
                transform: `translateX(${(index - (activeSlide < 3 ? activeSlide : 0)) * 100}%)`,
                transition: 'transform 0.3s ease',
              }}
            >
              <p className="text-2xl leading-10 font-aeonik text-white">{slide.title}</p>
              <p className="text-white/70">{slide.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="relative z-50 mx-auto -mt-16 lg:-mt-10 flex justify-center">
        {textSlides.map((_, index) => (
          <button
            key={index}
            className="px-1 py-2 sm:px-2"
            aria-label={`Slide ${index + 1}`}
            aria-current={
              activeSlide === slides.findIndex((s) => s.id === textSlides[index].id)
                ? 'true'
                : 'false'
            }
            onClick={() =>
              setActiveSlide(slides.findIndex((s) => s.id === textSlides[index].id))
            }
          >
            <div
              className={`h-1 sm:h-1.5 md:h-2 rounded-full transition-width duration-300 ${
                activeSlide === slides.findIndex((s) => s.id === textSlides[index].id)
                  ? 'bg-white w-4 sm:w-5 md:w-6'
                  : 'bg-white/40 w-1 sm:w-1.5 md:w-2'
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