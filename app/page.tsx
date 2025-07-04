import AiApplication from "@/components/aiApplication/AiApplication";
import AiResearch from "@/components/aiResearch/AiResearch";
import CaseStudies from "@/components/caseStudies/CaseStudies";
import Customer from "@/components/customer/Customer";
import DataCuration from "@/components/dataCuration/DataCuration";
import DataEngine from "@/components/dataEngine/DataEngine";
import DataLabeling from "@/components/dataLabeling/DataLabeling";
import EnterpriseAi from "@/components/enterpriseAi/EnterpriseAi";
import Footer from "@/components/footer/Footer";
import FutureIndustry from "@/components/futureIndustry/FutureIndustry";
import Hero from "@/components/hero/Hero";
import HeroTab from "@/components/heroTab/HeroTab";
import Header from "@/components/layout/header/header";
import Partner from "@/components/partner/Partner";
import Review from "@/components/review/Review";
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
      <Review></Review>
      <Customer></Customer>
      <AiApplication></AiApplication>
      <CaseStudies></CaseStudies>
      <Secure></Secure>
      <FutureIndustry></FutureIndustry>

      <Footer></Footer>
    </>
  );
}
