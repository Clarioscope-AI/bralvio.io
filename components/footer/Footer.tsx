import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FC } from "react";
const Footer: FC = () => {
  return (
    <div className="w-full px-4 lg:px-32 mt-14 lg:mt-32">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-gray-400">
        <div className="grid space-y-2 text-[12px] lg:text-[14px] mb-4">
          <p className="text-[16px] uppercase text-gray-300">Product</p>
          <Link href={"/"} className="hover:text-white">
            Bralvio Data Engine
          </Link>
          <Link href={"/"} className="hover:text-white">
            Bralvio GenAI Platform
          </Link>
          <Link href={"/"} className="hover:text-white">
            Bralvio Donovan
          </Link>
          <p className="text-[16px] uppercase text-gray-300 my-2">Government</p>
          <Link href={"/"} className="hover:text-white">
            Defense
          </Link>
          <Link href={"/"} className="hover:text-white">
            Federal
          </Link>
          <Link href={"/"} className="hover:text-white">
            Public Sector
          </Link>
        </div>
        <div className="grid space-y-2 text-[12px] lg:text-[14px]">
          <p className="text-[16px] uppercase text-gray-300">company</p>
          <Link href={"/"} className="hover:text-white">
            About
          </Link>
          <Link href={"/"} className="hover:text-white">
            Careers
          </Link>
          <Link href={"/"} className="hover:text-white">
            Security
          </Link>

          <Link href={"/"} className="hover:text-white">
            Terms
          </Link>
          <Link href={"/"} className="hover:text-white">
            Privacy
          </Link>
          <Link href={"/"} className="hover:text-white">
            SPL Program 2026
          </Link>
        </div>
        <div className="grid space-y-2 text-[12px] lg:text-[14px]">
          <p className="text-[16px] uppercase text-gray-300">Resources</p>
          <Link href={"/"} className="hover:text-white">
            Blogs
          </Link>
          <Link href={"/"} className="hover:text-white">
            Contact Us
          </Link>
          <Link href={"/"} className="hover:text-white">
            Customers
          </Link>
          <Link href={"/"} className="hover:text-white">
            Events
          </Link>

          <Link href={"/"} className="hover:text-white">
            Documentation
          </Link>
          <Link href={"/"} className="hover:text-white">
            Guides
          </Link>
          <Link href={"/"} className="hover:text-white">
            Cummunity
          </Link>
          <Link href={"/"} className="hover:text-white">
            Research
          </Link>
        </div>
        <div className="grid space-y-2 text-[12px] lg:text-[14px]">
          <p className="text-[16px] uppercase text-gray-300">Guides</p>
          <Link href={"/"} className="hover:text-white">
            Data Labeling
          </Link>
          <Link href={"/"} className="hover:text-white">
            ML Model Training
          </Link>
          <Link href={"/"} className="hover:text-white">
            Diffusion Models
          </Link>

          <Link href={"/"} className="hover:text-white">
            Guide to AI for eCommerce
          </Link>
          <Link href={"/"} className="hover:text-white">
            Computer Vision Applications
          </Link>
          <Link href={"/"} className="hover:text-white">
            Large Language Models
          </Link>
        </div>
        <div>
          <p className="text-[16px] uppercase text-gray-300">Follow Us</p>
          <span className="flex gap-4 mt-2 lg:mt-4 text-2xl lg:text-3xl">
            <Link href={"/"} className="hover:text-white">
              <FaXTwitter />
            </Link>
            <Link href={"/"} className="hover:text-white">
              <FaFacebook />
            </Link>
            <Link href={"/"} className="hover:text-white">
              <FaLinkedin />
            </Link>
          </span>
        </div>
      </div>
      <div className=" h-[1px] bg-gray-600 my-6 lg:my-10"></div>
      <div className="flex flex-col md:flex-row gap-6 justify-between text-gray-400 text-[12px] lg:text-[14px] mb-8 lg:mb-20">
        <p>Copyright © 2025 Bralvio AI, Inc. All rights reserved.</p>
        <p>Terms of Use & Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
