import { StaticImageData } from "next/image";
import slideimg from "@/assets/setting.webp";
import slideimg2 from "@/assets/slideImg.webp";
import slideimg3 from "@/assets/slideImg3.webp";

export interface SlideData {
  title: string;
  subtitle: string;
  image: StaticImageData | string;
  link: string;
}

export const slides: SlideData[] = [
  {
    title: "Leaderboards",
    subtitle: "SEAL Leaderboards: Expert-Driven Private Evaluations",
    image: slideimg,
    link: "",
  },
  {
    title: "Research",
    subtitle: "LLMs Easily Jailbroken as Browser Agents",
    image: slideimg2,
    link: "",
  },
  {
    title: "Research",
    subtitle: "Multi-Turn Human Jailbreaks.",
    image: slideimg3,
    link: "",
  },
  {
    title: "Research",
    subtitle: "Examination of LLM Performance on Grade School Arithmetic",
    image: slideimg,
    link: "",
  },
  {
    title: "Research",
    subtitle: "Examination of LLM Performance on Grade School Arithmetic",
    image: slideimg3,
    link: "",
  },
  {
    title: "Research",
    subtitle: "Examination of LLM Performance on Grade School Arithmetic",
    image: slideimg2,
    link: "",
  },
];
