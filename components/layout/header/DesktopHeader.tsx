import Link from "next/link";
import { headerMenus } from "@/data/headerMenus";
import Logo from "@/components/ui/logo/logo";

const DesktopHeader = () => {
  return (
    <header className="hidden md:flex items-center justify-between p-4 shadow-md bg-[#020202] text-white/95">
      <Logo />
      <nav className="flex flex-1 justify-center space-x-6">
        {headerMenus.map((menu) => (
          <Link
            key={menu.label}
            href={menu.destination}
            className="hover:text-white/85 font-medium"
          >
            {menu.label}
          </Link>
        ))}
      </nav>
     
    </header>
  );
};

export default DesktopHeader;
