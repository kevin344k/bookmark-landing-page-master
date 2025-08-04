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
    <div className="w-full max-w-lg mx-auto mt-10">
      <p className="text-2xl font-medium text-center text-fm-Blue-950">
        Features
      </p>
      <p className="text-neutral-400 text-center text-sm my-8 leading-relaxed ">
        our aim is to make it quick and easy foy you to access your favourite
        websites. your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      {/* Contenedor de pestañas */}
      <div className="flex flex-col items-center border-b border-t border-gray-300 relative divide-y divide-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`relative flex-1 p-5  text-center transition-colors duration-300 w-full ${
              activeTab === tab.id
                ? "text-neutral-800 font-middle"
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
          <div className="">
            {" "}
            <div className="relative  m-auto w-full h-60">
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
                className="absolute -left-[40px] -bottom-[40px] w-90 h-full -z-30"
                src={pattern}
                alt=""
              />
            </div>
            <div
              className="mt-20"
              style={{
                transform: "translateX(-50px)",
                opacity: 0,
                animation: "slideInRight 0.7s ease-out forwards",
              }}
            >
              <p className="text-2xl font-medium text-center text-fm-Blue-950">
                Bookmark in once click
              </p>
              <p className="text-neutral-400 text-center text-sm my-4 leading-relaxed ">
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="">
            {" "}
            <div className="relative  m-auto w-full h-60">
              {/* Imagen animada (crea nuevo stacking context pero no afecta al patrón) */}
              <div
                className="w-full h-full bg-[url('./assets/images/illustration-features-tab-2.svg')] bg-contain bg-no-repeat bg-center"
                style={{
                  transform: "translateX(50px)",
                  opacity: 0,
                  animation: "slideInLeft 0.7s ease-out forwards",
                }}
              ></div>
              <img
                className="absolute -left-[40px] -bottom-[40px] w-90 h-full -z-30"
                src={pattern}
                alt=""
              />
            </div>
            <div
              className="mt-20"
              style={{
                transform: "translateX(-50px)",
                opacity: 0,
                animation: "slideInRight 0.7s ease-out forwards",
              }}
            >
              <p className="text-2xl font-medium text-center text-fm-Blue-950">
                Intelligent search
              </p>
              <p className="text-neutral-400 text-center text-sm my-4 leading-relaxed ">
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </p>
            </div>
          </div>
        )}
        {activeTab === "tab3" && (
          <div className="">
            {" "}
            <div className="relative  m-auto w-full h-60">
              {/* Imagen animada (crea nuevo stacking context pero no afecta al patrón) */}
              <div
                className="w-full h-full bg-[url('./assets/images/illustration-features-tab-2.svg')] bg-contain bg-no-repeat bg-center"
                style={{
                  transform: "translateX(50px)",
                  opacity: 0,
                  animation: "slideInLeft 0.7s ease-out forwards",
                }}
              ></div>
              <img
                className="absolute -left-[40px] -bottom-[40px] w-90 h-full -z-30"
                src={pattern}
                alt=""
              />
            </div>
            <div
              className="mt-20"
              style={{
                transform: "translateX(-50px)",
                opacity: 0,
                animation: "slideInRight 0.7s ease-out forwards",
              }}
            >
              <p className="text-2xl font-medium text-center text-fm-Blue-950">
                Share your bookmarks
              </p>
              <p className="text-neutral-400 text-center text-sm my-4 leading-relaxed ">
                Easily share your bookmarks and collections with others. Create
                a shareable link in a click.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
