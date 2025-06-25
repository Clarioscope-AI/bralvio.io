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
      <Partner></Partner>
    </>
  );
}
