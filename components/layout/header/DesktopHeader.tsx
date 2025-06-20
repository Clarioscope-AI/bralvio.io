import Link from "next/link";
import { headerMenus } from "@/data/headerMenus";
import Logo from "@/components/ui/logo/logo";
import Button from "@/components/ui/button/Button";
import { FC } from "react";
import { HeaderMenu } from "@/types/DesktopHeader.types";

const DesktopHeader: FC = () => {
  return (
    <header className="hidden md:block bg-[#020202] text-white/95 shadow-md">
      <div className=" flex items-center justify-between p-4">
        <Logo />
        <nav className="flex flex-1 justify-center space-x-6">
          {headerMenus.map((menu: HeaderMenu) => (
            <Link
              key={menu.label}
              href={menu.destination}
              className="hover:text-white/85 font-medium"
            >
              {menu.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-4">
          <Button
            label="Book a Demo"
            arrow
            classNames="text-primary bg-secondary rounded-lg px-4 py-2 hover:bg-secondary/90 transition-colors duration-300"
          />
          <Button
            label="Log In"
            arrow={false}
            classNames="text-secondary rounded-lg px-4 py-2 hover:text-secondary/90 transition-colors duration-300"
          />
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
