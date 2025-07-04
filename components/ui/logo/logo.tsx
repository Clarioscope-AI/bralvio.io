import Image from "next/image";
import { LogoProps } from "@/types/logo.types";
import logo from "@/assets/logo.webp"
const Logo: React.FC<LogoProps> = ({ size = 20 }) => {
  return (
    <Image
      src={logo}
      alt="Logo"
      width={size}
      height={size}
      className="object-contain"
    />
  );
};

export default Logo;
