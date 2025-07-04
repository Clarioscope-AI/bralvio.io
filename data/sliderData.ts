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
    title: "Clinical Studies",
    subtitle: "MIRL Clinical Trials: Evidence-Based Medical Device Validation",
    image: slideimg,
    link: "",
  },
  {
    title: "Research",
    subtitle: "AI-Enhanced Diagnostic Accuracy in Remote Healthcare Settings",
    image: slideimg2,
    link: "",
  },
  {
    title: "Research",
    subtitle: "Wearable Sensors for Continuous Patient Monitoring",
    image: slideimg3,
    link: "",
  },
  {
    title: "Research",
    subtitle: "IoT Integration in Medical Devices for Enhanced Patient Care",
    image: slideimg,
    link: "",
  },
  {
    title: "Research",
    subtitle: "Miniaturization Techniques for Implantable Medical Devices",
    image: slideimg3,
    link: "",
  },
  {
    title: "Research",
    subtitle: "Regulatory Pathways for Novel Medical Technologies",
    image: slideimg2,
    link: "",
  },
];