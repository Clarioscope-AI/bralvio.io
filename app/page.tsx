import AiApplication from "@/components/aiApplication/AiApplication";
import AiResearch from "@/components/aiResearch/AiResearch";
import DataEngine from "@/components/dataEngine/DataEngine";
import EnterpriseAi from "@/components/enterpriseAi/EnterpriseAi";
import Hero from "@/components/hero/Hero";
import HeroTab from "@/components/heroTab/HeroTab";
import Header from "@/components/layout/header/header";
import Partner from "@/components/partner/Partner";
export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <HeroTab></HeroTab>
      <EnterpriseAi></EnterpriseAi>
      <AiResearch></AiResearch>
      <Partner></Partner>
      <DataEngine></DataEngine>
      <AiApplication></AiApplication>
    </>
  );
}
