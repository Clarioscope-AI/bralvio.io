import { FC } from "react";
import Button from "@/components/ui/button/Button";
import img1 from "@/assets/secure1.png";
import img2 from "@/assets/secure2.png";
import img3 from "@/assets/secure3.png";
import Image from "next/image";
const Secure: FC = () => {
  return (
    <div className="my-10 lg:my-20 flex flex-col justify-center items-center w-full">
      <Button
        label="SECURE"
        classNames="rounded-3xl px-3 lg:px-6 text-tertiary bg-[#080609]"
      ></Button>
      <h3 className="mt-4 lg:mt-8 mb-10 md:mb-12 text-center w-11/12 lg:w-2/3 mx-auto uppercase  text-xs  sm:px-0 md:text-sm tracking-[4px] text-secondary">
        Our cloud platform’s infrastructure and operations are certified
        compliant with the following industry best practice standards and
        frameworks
      </h3>
      <div className="flex flex-wrap gap-5 lg:gap-12 ">
        <Image src={img1} alt="img1" width={60} height={60}></Image>
        <Image src={img2} alt="img2" width={60} height={60}></Image>
        <Image src={img3} alt="img3" width={60} height={60}></Image>
      </div>
    </div>
  );
};

export default Secure;
