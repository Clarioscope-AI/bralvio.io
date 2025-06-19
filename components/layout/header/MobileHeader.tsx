"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { headerMenus } from "@/data/headerMenus";
import Logo from "@/components/ui/logo/logo";
import { FiMenu, FiX } from "react-icons/fi";

const MobileHeader = () => {
  return (
    <Disclosure
      as="header"
      className="md:hidden p-4 shadow-md bg-black text-white z-50"
    >
      {({ open }) => (
        <>
          <div className="flex justify-between items-center">
            <Logo size={36} />
            <Disclosure.Button
              className="text-2xl transition-all duration-200 hover:text-primary"
              aria-label="Toggle Menu"
            >
              {open ? <FiX /> : <FiMenu />}
            </Disclosure.Button>
          </div>

          <Disclosure.Panel
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              open ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="flex flex-col items-center gap-3 bg-black">
              {headerMenus.map((menu) => (
                <Link
                  key={menu.label}
                  href={menu.destination}
                  className="text-sm font-medium text-white hover:text-primary hover:underline transition duration-200"
                >
                  {menu.label}
                </Link>
              ))}

            
            </nav>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default MobileHeader;
