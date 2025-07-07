import { partners } from "@/data/partnerData";
import Image from "next/image";
import { FC, JSX } from "react";
import Marquee from "react-fast-marquee";

const Partner: FC = (): JSX.Element => {
  return (
    <div className="my-28 lg:my-42">
      {/* for desktop */}
      <p className="max-w-max mb-10 md:mb-12 text-center mx-auto uppercase leading-[1.70] text-xs px-3 sm:px-0 md:text-sm tracking-[4px] text-secondary">
        HEALTHCARE TECHNOLOGY PARTNERS WE WORK&nbsp;WITH:
      </p>
      <div className="hidden lg:flex justify-between items-center px-28 md:gap-4">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-8 border-1 border-gray-700 rounded-xl w-[230px] h-[112px]"
          >
            <Image
              src={partner.image}
              alt={partner.name}
              width={96}
              height={28}
              style={{ objectFit: "contain" }}
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
                  src={partner.image}
                  alt={partner.name}
                  width={96}
                  height={28}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
            <span className="w-2" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Partner;
