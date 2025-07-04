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
    subtitle: "Mayo Clinic Names Bralvio as Preferred Medical Device Development Partner",
    image: case1,
  },
  {
    title: "Partner",
    subtitle: "Medtronic Partners with Bralvio to Advance Remote Patient Monitoring Solutions",
    image: case2,
  },
  {
    title: "Partner",
    subtitle: "Cleveland Clinic and Bralvio Collaborate on Next-Generation Surgical Tools",
    image: case3,
  },
  {
    title: "Case Studies",
    subtitle: "Customer Case Study: Boston Scientific's Regulatory Compliance Journey",
    image: case4,
  },
  {
    title: "Blog",
    subtitle: "Bralvio's Medical Research Lab Launches Clinical Validation Framework",
    image: case5,
  },
  {
    title: "Blog",
    subtitle: "The Future of Wearable Medical Devices: Trends and Innovations",
    image: case10,
  },
  {
    title: "Dataset",
    subtitle: "Open Dataset: Standardized Cardiac Monitoring Signals",
    image: case7,
  },
  {
    title: "Blog",
    subtitle: "Navigating FDA's Software as a Medical Device (SaMD) Requirements",
    image: case8,
  },
  {
    title: "Blog",
    subtitle: "How Much Better Are Next-Generation Implantable Medical Devices?",
    image: case10,
  },
  {
    title: "Blog",
    subtitle: "How Philips Healthcare Worked with Bralvio to Enhance Patient Monitoring",
    image: case10,
  },
];