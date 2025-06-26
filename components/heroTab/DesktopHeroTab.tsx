"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { FC, JSX, useEffect, useState } from "react";
import { FaMicrosoft } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import timeLogo from "@/assets/hero_tab_img/time.webp";
import howardLogo from "@/assets/hero_tab_img/howard-hughes.webp";
import dlapiperLogo from "@/assets/hero_tab_img/dlapiper.webp";
import ciscoLogo from "@/assets/hero_tab_img/cisco.webp";
import cengageLogo from "@/assets/hero_tab_img/cengage.webp";

const DesktopHeroTab: FC = (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  // define image type
  const images: StaticImageData[] = [
    timeLogo,
    howardLogo,
    dlapiperLogo,
    ciscoLogo,
    cengageLogo,
    timeLogo,
  ];
  // define tab lebels type
  const labels: string[] = [
    "Generative AI Companies,",
    "U.S. Government Agencies &",
    "Enterprises",
  ];
  return (
    <div className="text-secondary text-center px-4">
      <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <TabList className="flex flex-wrap justify-center gap-2">
          <span className="flex items-end">Bralvio works with</span>

          {labels?.map((label, index) => (
            <Tab
              key={index}
              className="flex flex-col items-center focus:outline-none focus:ring-0"
            >
              {({ selected }: { selected: boolean }) => (
                <>
                  <span
                    className={clsx(
                      "bg-transparent text-inherit outline-none",
                      selected && ""
                    )}
                  >
                    {label}
                  </span>
                  {selected && (
                    <div
                      key={index + "-progress"}
                      className="h-[2px] w-full bg-gray-200 animate-tab-progress"
                    />
                  )}
                </>
              )}
            </Tab>
          ))}
        </TabList>

        <TabPanels className="mt-4 p-6">
          {/* tab-1 */}
          <TabPanel>
            <div className="flex justify-around items-center gap-6">
              <ul>
                <li>
                  <p className="text-3xl font bold flex items-center">
                    <span>
                      <FaMicrosoft />
                    </span>
                    Microsoft
                  </p>
                </li>
              </ul>
              <ul>
                <li>
                  <p className="text-3xl font bold flex items-center">
                    <span>
                      <FaMeta />
                    </span>
                    Meta
                  </p>
                </li>
              </ul>
              <ul>
                <li>
                  <p className="text-3xl font bold">Open ai</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p className="text-3xl font bold">Adept</p>
                </li>
              </ul>
              {[ciscoLogo, cengageLogo].map(
                (image: StaticImageData, index: number) => (
                  <Image
                    key={index}
                    src={image}
                    alt="Time Logo"
                    width={100}
                    height={100}
                  />
                )
              )}
            </div>
          </TabPanel>
          {/* tab-2 */}
          <TabPanel>
            <div className="flex justify-around items-center gap-6">
              {images?.map((image: StaticImageData, index: number) => (
                <Image
                  key={index}
                  src={image}
                  alt="Time Logo"
                  width={100}
                  height={100}
                />
              ))}
            </div>
          </TabPanel>
          {/* tab-3 */}
          <TabPanel>
            <div className="flex justify-around items-center gap-6">
              {images?.map((image: StaticImageData, index: number) => (
                <Image
                  key={index}
                  src={image}
                  alt="Time Logo"
                  width={100}
                  height={100}
                />
              ))}
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default DesktopHeroTab;
