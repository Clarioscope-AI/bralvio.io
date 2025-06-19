import Image from "next/image";
import { LogoProps } from "@/types/logo.types";

const Logo: React.FC<LogoProps> = ({ size = 40 }) => {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={size}
      height={size}
      className="object-contain"
    />
  );
};

export default Logo;
