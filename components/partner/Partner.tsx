import { partners } from "@/data/partnerData";
import Image from "next/image";
import { FC, JSX } from "react";
import Marquee from "react-fast-marquee";

const Partner: FC = (): JSX.Element => {
  return (
    <div className="my-10 lg:my-20">
      {/* for desktop */}
      <p className="max-w-max mb-10 md:mb-12 text-center mx-auto uppercase leading-[1.70] text-xs px-3 sm:px-0 md:text-sm tracking-[4px] text-secondary">
        GENERATIVE AI PROVIDERS WE PARTNER&nbsp;WITH:
      </p>
      <div className="hidden lg:flex justify-between items-center px-28  md:gap-4">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-8 border-1 border-gray-700 rounded-xl w-[230px] h-[112px]"
          >
            <Image
              src={partner}
              alt={`partner-${index}`}
              className="h-7 w-24"
            />
          </div>
        ))}
      </div>
      {/* for mobile */}
      <div className="lg:hidden w-full overflow-hidden">
        <Marquee className="flex items-center">
          <div className="flex gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex justify-center items-center border border-gray-700 rounded-xl w-[230px] h-[112px]"
              >
                <Image
                  src={partner}
                  alt={`partner-${index}`}
                  className="h-7 w-24 object-contain"
                />
              </div>
            ))}
            {/* add extra div for adjust spaceing */}
            <span className="w-2"></span>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Partner;
