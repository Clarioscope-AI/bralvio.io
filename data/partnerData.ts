import { StaticImageData } from "next/image";
import openai from "@/assets/partner/openai.webp";
import adept from "@/assets/partner/adept.webp";
import meta from "@/assets/partner/meta.webp";
import cohere from "@/assets/partner/cohere.webp";
import anthropic from "@/assets/partner/anthropic.webp";

// Strongly-typed partner data
export const partners: { image: StaticImageData; name: string }[] = [
  { image: openai, name: "OpenAI" },
  { image: adept, name: "Adept" },
  { image: meta, name: "Meta AI" },
  { image: cohere, name: "Cohere" },
  { image: anthropic, name: "Anthropic" },
];
