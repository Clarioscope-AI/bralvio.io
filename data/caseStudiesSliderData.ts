import { StaticImageData } from "next/image";
import case1 from "@/assets/case-studies/slide-1.webp";
import case2 from "@/assets/case-studies/slide-2.webp";
import case3 from "@/assets/case-studies/slide-3.webp";
import case4 from "@/assets/case-studies/slide-4.webp";
import case5 from "@/assets/case-studies/slide-5.webp";
import case7 from "@/assets/case-studies/slide-7.webp";
import case8 from "@/assets/case-studies/slide-8.webp";
import case10 from "@/assets/case-studies/slide-10.webp";


export interface CaseStudySlideData {
  title: string;
  subtitle: string;
  image: StaticImageData | string;
 
}

export const caseStudiesSlides: CaseStudySlideData[] = [
  {
    title: "Partner",
    subtitle: "OpenAI Names Scale as Preferred Fine-Tuning Partner",
    image: case1,
   
  },
  {
    title: "Partner",
    subtitle: "Anthropic Partners with Scale to Bring Generative AI to Enterprises",
    image: case2,
    
  },
  {
    title: "Partner",
    subtitle: "Meta and Scale Partner to Drive Enterprise Adoption of Llama",
    image: case3,
    
  },
  {
    title: "Case Studies",
    subtitle: "Customer Case Study: Cohere",
    image: case4,
    
  },
  {
    title: "Blog",
    subtitle: "Scale's SEAL Research Lab Launches Expert-Evaluated LLM Leaderboards",
    image: case5,
    
  },
  {
    title: "Blog",
    subtitle: "Why Is ChatGPT So Good?",
    image: case10,
    
  },
  {
    title: "Dataset",
    subtitle: "Open Dataset: Ukraine Damage Identification",
    image: case7,
    
  },
  {
    title: "Blog",
    subtitle: "Meet Claude: Anthropic’s rival to ChatGPT",
    image: case8,
    
  },
  {
    title: "Blog",
    subtitle: "How Much Better Is OpenAI's Newest GPT-3 Model?",
    image: case10,
    
  },
  {
    title: "Blog",
    subtitle: "How OpenAI worked with Scale to build InstructGPT",
    image: case10,
    
  },
];
