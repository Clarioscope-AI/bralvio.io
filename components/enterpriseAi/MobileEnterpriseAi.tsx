'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import DataEngineImage from '../../assets/enterprise_ai_image/data-engine.webp';
import FoundationModelsImage from '../../assets/enterprise_ai_image/foundation-models.webp';
import RlhfImage from '../../assets/enterprise_ai_image/rlhf.webp';
import NewFeatureImage from '../../assets/enterprise_ai_image/whole-model.webp';
import Button from '../ui/button/Button';

const slides = [
  {
    id: 'new-feature',
    title: 'Entrprise GenAI Platform',
    description:
      'Leverage cutting-edge AI capabilities to enhance your enterprise workflows with innovative solutions tailored to your needs.',
    image: NewFeatureImage,
  },
  {
    id: 'fine-tuning',
    title: 'Fine-Tuning and RLHF',
    description:
      'Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs and data from your enterprise.',
    image: FoundationModelsImage,
  },
  {
    id: 'foundation-models',
    title: 'Foundation Models',
    description:
      'Scale partners or integrates with all of the leading AI models, from open-source to closed-source, such as OpenAI, Google, Meta, Cohere, and more.',
    image: RlhfImage,
  },
  {
    id: 'enterprise-data',
    title: 'Enterprise Data',
    description:
      "Scale's Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation.",
    image:DataEngineImage ,
  },
  
];

const MobileEnterpriseAi: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20">
        <button className="overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-black/55 bg-opacity-5 shadow-lg text-[#D1AAD7] rounded-full px-4 py-2 border-1">
          AI for the Enterprise
        </button>
        <h1 className="text-[#FFFFFF] text-3xl font-semibold py-4">Generative AI Architecture</h1>
        <p className="text-[#FFFFFF] text-xs text-center px-5">
          Whether you’re building your own models or applying foundation models to your business, data remains the biggest bottleneck to AI.
        </p>
        <Button
          label="Book a Demo"
          arrow
          classNames="text-primary bg-[#B277AB] rounded-lg px-4 py-2 hover:bg-[#5B3557] transition-colors duration-300 mt-5"
        />
      </div>

      <div className="flex flex-col justify-center mx-auto h-[590px] sm:h-[700px] mb-24 md:mb-20 xl:hidden mt-10">
    
        <div className="relative w-full pb-6">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="min-w-full snap-center flex flex-col justify-center items-center overflow-visible"
                style={{
                  transform: `translateX(${(index - activeSlide) * 100}%)`,
                  transition: 'transform 0.3s ease',
                }}
              >
           
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={334}
                  height={307}
                  className="object-contain w-full h-auto max-w-[334px] max-h-[307px]"
                  priority={index === 0}
                  loading={index === activeSlide ? 'eager' : 'lazy'}
                  onLoad={() => console.log(`Image loaded: ${slide.title}`)}
                  onError={() => console.error(`Image failed to load: ${slide.title}`)}
                />
                {/* Text */}
                <div className="px-7 w-full sm:w-auto sm:px-0 mt-6 space-y-4">
                  <p className="text-2xl leading-10 font-aeonik text-white">{slide.title}</p>
                  <p className="text-white/70">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-50 mx-auto mt-4 flex justify-center">
          {slides.map((_, index) => (
            <button
              key={index}
              className="px-1 py-2 sm:px-2"
              aria-label={`Slide ${index + 1}`}
              aria-current={activeSlide === index ? 'true' : 'false'}
              onClick={() => setActiveSlide(index)}
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