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
          label="Medical Solutions"
          classNames="rounded-3xl px-3 lg:px-6 text-tertiary bg-[#080609]"
        ></Button>
        <SectionHeader
          title="Healthcare Technology Applications"
          description="Easily implement advanced medical solutions for your most challenging clinical needs with pre-built applications that harness the power of integrated healthcare technologies."
        ></SectionHeader>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* card-1 */}
        <div className="border-1 border-gray-700 bg-[#111317] rounded-xl p-8 relative h-[400px] md:h-[450px] lg:h-[500px]">
          <p className="uppercase leading-[1.70] text-xs sm:px-0 md:text-sm tracking-[4px] text-secondary mb-3 lg:mb-5">
            BRALVIO CLINICAL ASSIST
          </p>
          <h3 className="text-2xl text-secondary my-2">
            AI-Enhanced Diagnostic Support For Clinicians
          </h3>
          <p className="text-gray-400 mb-2">
            Advanced clinical decision support: analyze patient data, suggest treatment options, and improve outcomes in real-time.
          </p>
          <div className="absolute bottom-0 right-0">
            <Image
              src={img1}
              alt="Clinical decision support interface"
              className="rounded-lg md:h-[300px] w-full h-full"
            ></Image>
          </div>
        </div>
        {/* card-2 */}
        <div className="border-1 border-gray-700 bg-[#111317] rounded-xl p-8 relative h-[400px] md:h-[450px] lg:h-[500px]">
          <p className="uppercase leading-[1.70] text-xs sm:px-0 md:text-sm tracking-[4px] text-secondary mb-3 lg:mb-5">
            BRALVIO MEDICAL PLATFORM
          </p>
          <h3 className="text-2xl text-secondary my-2">
            Medical Device Integration
          </h3>
          <p className="text-gray-400 mb-2">
            Transform your clinical data into integrated healthcare solutions with seamless device connectivity and regulatory compliance.
          </p>
          <div className="absolute bottom-0 right-0">
            <Image
              src={img2}
              alt="Medical device integration platform"
              className="rounded-lg md:h-[300px] w-full h-full"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiApplication;