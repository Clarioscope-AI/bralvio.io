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
      className=" shadow-md bg-primary text-secondary z-50"
    >
      {({ open }) => (
        <>
          <div className="p-4 flex justify-between items-center relative">
            <div className={open ? "opacity-0" : "opacity-100 flex items-center"}>
              <Logo size={20} />
              <span className="ml-2 font-medium">Bralvio.io</span>
            </div>
            <Disclosure.Button
              className="text-2xl transition-all duration-200 hover:text-secondary/85 z-50"
              aria-label="Toggle Menu"
            >
              {open ? <FiX /> : <FiMenu />}
            </Disclosure.Button>
          </div>
          <Disclosure.Panel
            className={`fixed inset-0 top-[64px] z-40 bg-black transition-all duration-300 ease-in-out flex flex-col ${
              open
                ? "h-[calc(100vh-64px)] opacity-100 translate-y-0"
                : "h-0 opacity-0 -translate-y-4"
            }`}
          >
            <div className="flex flex-col gap-4 px-4 pt-6 overflow-y-auto">
              {headerMenus.map((menu) => (
                <Link
                  key={menu.label}
                  href={menu.destination}
                  className="text-sm font-medium text-white hover:text-primary/85 transition duration-200 p-3 hover:bg-gray-200 rounded-md"
                >
                  {menu.label}
                </Link>
              ))}
              <Link
                key={'book-a-demo'}
                href={'/book-a-demo'}
                className="text-sm font-medium text-white hover:text-primary/85 transition duration-200 p-3 hover:bg-gray-200 rounded-md"
              >
                Book a Demo
              </Link>
              <Link
                key={'Login'}
                href={'/login'}
                className="text-sm font-medium text-white hover:text-primary/85 transition duration-200 p-3 hover:bg-gray-200 rounded-md"
              >
                Log In
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default MobileHeader;