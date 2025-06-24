import AiResearch from "@/components/aiResearchSection/AiResearch";
import Hero from "@/components/hero/Hero";
import HeroTab from "@/components/heroTab/HeroTab";
import Header from "@/components/layout/header/header";
export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <HeroTab></HeroTab>
      <AiResearch></AiResearch>
    </>
  );
}
