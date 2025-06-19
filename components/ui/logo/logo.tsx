import Image from "next/image";
import { LogoProps } from "@/types/logo.types";

const Logo: React.FC<LogoProps> = ({ size = 40 }) => {
  return (
    <div className="flex items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <Image
          src=""
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Logo;
