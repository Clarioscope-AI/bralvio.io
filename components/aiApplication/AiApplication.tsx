import { FC, JSX } from "react";
import Button from "@/components/ui/button/Button";
import SectionHeader from "@/components/ui/sectionHeader/SectionHeader";
import Image from "next/image";
import img1 from "@/assets/aiImg1.png";
import img2 from "@/assets/aiImg2.png";

const AiApplication: FC = (): JSX.Element => {
  return (
    <div className="my-10 lg:my-28 w-full px-4 lg:px-28">
      <div className="flex flex-col items-center mb-4 lg:mb-10">
        <Button
          label="Apply AI"
          classNames="rounded-3xl px-3 lg:px-6 text-tertiary bg-[#080609]"
        ></Button>
        <SectionHeader
          title="Generative AI Applications"
          description="Easily Apply AI to your most challenging use cases with pre‑built applications that harness the power of customized LLMs."
        ></SectionHeader>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* card-1 */}
        <div className="border-1 border-gray-700 bg-[#111317] rounded-xl p-8 relative h-[400px] md:h-[450px] lg:h-[500px]">
          <p className=" uppercase leading-[1.70] text-xs sm:px-0 md:text-sm tracking-[4px] text-secondary mb-3 lg:mb-5">
            BRALVIO DONOVAN
          </p>
          <h3 className="text-2xl text-secondary my-2">
            Ai-Powered Decision-Making For Defense
          </h3>
          <p className="text-gray-400 mb-2">
            Ai-powered decision making support: plan, analyze and act in
            minutes.
          </p>
          <div className="absolute bottom-0 right-0">
            <Image
              src={img1}
              alt="img"
              className="rounded-lg md:h-[300px] w-full h-full"
            ></Image>
          </div>
        </div>
        {/* card-2 */}
        <div className="border-1 border-gray-700 bg-[#111317] rounded-xl p-8 relative h-[400px] md:h-[450px] lg:h-[500px]">
          <p className=" uppercase leading-[1.70] text-xs sm:px-0 md:text-sm tracking-[4px] text-secondary mb-3 lg:mb-5">
            BRALVIO DONOVAN
          </p>
          <h3 className="text-2xl text-secondary my-2">
            Ai-Powered Decision-Making For Defense
          </h3>
          <p className="text-gray-400 mb-2">
            Ai-powered decision making support: plan, analyze and act in
            minutes.
          </p>
          <div className="absolute bottom-0 right-0">
            <Image
              src={img2}
              alt="img"
              className="rounded-lg md:h-[300px] w-full h-full"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiApplication;
