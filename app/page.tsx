import AiApplication from "@/components/aiApplication/AiApplication";
import AiResearch from "@/components/aiResearch/AiResearch";
import DataCuration from "@/components/dataCuration/DataCuration";
import DataEngine from "@/components/dataEngine/DataEngine";
import DataLabeling from "@/components/dataLabeling/DataLabeling";
import EnterpriseAi from "@/components/enterpriseAi/EnterpriseAi";
import Hero from "@/components/hero/Hero";
import HeroTab from "@/components/heroTab/HeroTab";
import Header from "@/components/layout/header/header";
import Partner from "@/components/partner/Partner";
import Secure from "@/components/secure/Secure";
export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <HeroTab></HeroTab>
      <EnterpriseAi></EnterpriseAi>
      <AiResearch></AiResearch>
      <Partner></Partner>
      <DataLabeling></DataLabeling>
      <DataEngine></DataEngine>
      <DataCuration></DataCuration>
      <AiApplication></AiApplication>
      <Secure></Secure>
    </>
  );
}
