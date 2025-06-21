"use client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";

const HeroTab = () => {
  return (
    <div className=" text-white text-center p-4">
      <TabGroup>
        <TabList className="flex flex-wrap justify-center">
          <span>Bralvio works with</span>
          <Tab
            className={({ selected }) =>
              clsx(
                "px-1 bg-transparent text-inherit outline-none",
                selected && "underline"
              )
            }
          >
            Generative AI Companies,
          </Tab>
          <Tab
            className={({ selected }) =>
              clsx(
                "px-1 bg-transparent text-inherit outline-none",
                selected && "underline"
              )
            }
          >
            U.S. Government Agencies
          </Tab>
          <span>&</span>
          <Tab
            className={({ selected }) =>
              clsx(
                "px-1 bg-transparent text-inherit outline-none",
                selected && "underline"
              )
            }
          >
            Enterprises
          </Tab>
        </TabList>

        <TabPanels className="mt-4 border-2 border-red-500">
          <TabPanel>Content 1</TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default HeroTab;
