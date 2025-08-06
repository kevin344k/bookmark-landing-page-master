import React, { useState } from "react";

import pattern from "../assets/images/bg-pattern.svg";
export default function FeaturesTab() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Simple Bookmarking" },
    { id: "tab2", label: "Speedy Searching" },
    { id: "tab3", label: "Easy Sharing" },
  ];

  return (
    <div className="w-full  mx-auto mt-10">
      <p className="text-2xl font-medium text-center text-fm-Blue-950 dark:text-neutral-500">
        Features
      </p>
      <p className="text-neutral-400 text-center text-sm my-8 leading-relaxed md:max-w-[600px] md:mx-auto">
        Our aim is to make it quick and easy foy you to access your favourite
        websites. your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      {/* Contenedor de pestañas */}
      <div className="flex flex-col items-center border-b border-t border-gray-300 dark:border-gray-600 relative divide-y divide-gray-300 dark:divide-gray-600 md:flex-row md:border-t-0 md:divide-y-0 md:max-w-[600px] md:m-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`relative flex-1 p-5  text-center transition-colors duration-300 w-full md:h-full ${
              activeTab === tab.id
                ? "text-neutral-800 font-middle dark:text-fm-Red-400"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}

            {/* Barra animada */}
            <span
              className={`absolute left-[calc(50%-75px)] bottom-0 h-[4px] w-[150px] bg-fm-Red-400 transform origin-left transition-transform duration-300 ${
                activeTab === tab.id ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </button>
        ))}
      </div>

      {/* Contenido dinámico */}
      <div className="  mt-20 rounded-b-md">
        {activeTab === "tab1" && (
          <div className="lg:flex lg:max-w-[900px] lg:mx-auto">
            {" "}
            <div className="relative z-1 m-auto w-full h-60">
              {/* Imagen animada (crea nuevo stacking context pero no afecta al patrón) */}
              <div
                className="w-full h-full bg-[url('./assets/images/illustration-features-tab-1.svg')] bg-contain bg-no-repeat bg-center"
                style={{
                  transform: "translateX(50px)",
                  opacity: 0,
                  animation: "slideInLeft 0.7s ease-out forwards",
                }}
              ></div>
              <img
                className="absolute -left-[40px] -bottom-[40px] w-90 h-full -z-30 sm:-left-[80px] sm:w-120  md:w-full md:-left-[290px] md:h-80 md:-bottom-[70px] lg:h-70 lg:-left-[100px]" 
                src={pattern}
                alt=""
              />
            </div>
            <div
              className="mt-20 md:max-w-[600px] md:mx-auto lg:max-w-[350px] lg:flex lg:flex-col lg:my-12 lg:items-start"
              style={{
                transform: "translateX(-50px)",
                opacity: 0,
                animation: "slideInRight 0.7s ease-out forwards",
              }}
            >
              <p className="text-2xl font-medium text-center text-fm-Blue-950 dark:text-neutral-500">
                Bookmark in once click
              </p>
              <p className="text-neutral-400 text-center text-sm my-4 leading-relaxed lg:text-left">
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>
                      <div className="w-full m-auto flex">
            <button className="hidden lg:block  bg-fm-Blue-600 px-6 py-4   shadow-lg w-fit rounded-md font-bold text-white text-sm">More Info</button>
        </div>
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="lg:flex lg:max-w-[900px] lg:mx-auto">
            {" "}
            <div className="relative z-1 m-auto w-full h-60">
              {/* Imagen animada (crea nuevo stacking context pero no afecta al patrón) */}
              <div
                className="w-full h-full bg-[url('./assets/images/illustration-features-tab-2.svg')] bg-contain bg-no-repeat bg-center lg:h-[280px] lg:w-[500px] lg:bg-right"
                style={{
                  transform: "translateX(50px)",
                  opacity: 0,
                  animation: "slideInLeft 0.7s ease-out forwards",
                }}
              ></div>
              <img
                className="absolute -left-[40px] -bottom-[40px] w-90 h-full -z-30 sm:-left-[80px] sm:w-120  md:w-full md:-left-[290px] md:h-80 md:-bottom-[70px] lg:h-70 lg:-left-[100px]"
                src={pattern}
                alt=""
              />
            </div>
            <div
              className="mt-20 md:max-w-[600px] md:mx-auto lg:max-w-[350px] lg:flex lg:flex-col lg:my-12 lg:items-start"
              style={{
                transform: "translateX(-50px)",
                opacity: 0,
                animation: "slideInRight 0.7s ease-out forwards",
              }}
            >
              <p className="text-2xl font-medium text-center text-fm-Blue-950 dark:text-neutral-500">
                Intelligent search
              </p>
              <p className="text-neutral-400 text-center text-sm my-4 leading-relaxed lg:text-left">
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </p>
                <div className="w-full m-auto flex">
            <button className="hidden lg:block  bg-fm-Blue-600 px-6 py-4   shadow-lg w-fit rounded-md font-bold text-white text-sm">More Info</button>
        </div>
            </div>
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="lg:flex lg:max-w-[900px] lg:mx-auto">
            {" "}
            <div className="relative z-1 m-auto w-full h-60">
              {/* Imagen animada (crea nuevo stacking context pero no afecta al patrón) */}
              <div
                className="w-full h-full bg-[url('./assets/images/illustration-features-tab-3.svg')] bg-contain bg-no-repeat bg-center lg:h-[280px] lg:w-[500px] lg:bg-right"
                style={{
                  transform: "translateX(50px)",
                  opacity: 0,
                  animation: "slideInLeft 0.7s ease-out forwards",
                }}
              ></div>
              <img
                className="absolute -left-[40px] -bottom-[40px] w-90 h-full -z-30 sm:-left-[80px] sm:w-120  md:w-full md:-left-[290px] md:h-80 md:-bottom-[70px] lg:h-70 lg:-left-[100px]"
                src={pattern}
                alt=""
              />
            </div>
            <div
              className="mt-20 md:max-w-[600px] md:mx-auto lg:max-w-[350px] lg:flex lg:flex-col lg:my-12 lg:items-start"
              style={{
                transform: "translateX(-50px)",
                opacity: 0,
                animation: "slideInRight 0.7s ease-out forwards",
              }}
            >
              <p className="text-2xl font-medium text-center text-fm-Blue-950 lg:text-left dark:text-neutral-500">
                Share your bookmarks
              </p>
              <p className="text-neutral-400 text-center text-sm my-4 leading-relaxed lg:text-left">
                Easily share your bookmarks and collections with others. Create
                a shareable link in a click.
              </p>
                <div className="w-full m-auto flex">
            <button className="hidden lg:block  bg-fm-Blue-600 px-6 py-4   shadow-lg w-fit rounded-md font-bold text-white text-sm">More Info</button>
        </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
