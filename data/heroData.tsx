import Button from "@/components/ui/button/Button";
import { HeroDataType } from "@/types/hero.types";

export const heroData: HeroDataType = {
  title: "Engineering Intelligence Into Life",
  description: (
    <>
      <p>AI, IoT, and Medical Device Innovation from Idea to Market</p>
      <div className="mt-6">
        <Button label="Explore Our Solutions" arrow />
      </div>
    </>
  ),
};
