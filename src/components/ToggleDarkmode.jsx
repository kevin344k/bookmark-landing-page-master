import React, { useState,useEffect } from "react";



export default function ToggleDarkmode() {
  const preferColorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  const [theme, setThemeState] = useState(localStorage.getItem("theme") || preferColorScheme);
  const [toggle, setToggle] = useState(theme === "dark" ? "sun" : "moon");
  const [animate, setAnimate] = useState(false);

  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    setTheme(theme);
    setToggle(theme === "dark" ? "sun" : "moon");
  }, [theme]);

  const handletoggle = () => {
    setAnimate(true);
    const newTheme = theme === "dark" ? "light" : "dark";
    setThemeState(newTheme);
    setTimeout(() => setAnimate(false), 250);
  };

  return (
    <div className="relative">
          
      <div
        onClick={handletoggle}
        className={`relative cursor-pointer ${animate ? "click-bounce" : ""}`}
      >
      

        {toggle === "sun" ? (
          <>
            <span className="flex z-50 w-4 h-4 bg-[radial-gradient(circle,theme(colors.yellow.400)_0%,theme(colors.yellow.400)_70%,transparent_100%)] rounded-full"></span>
            <span
              key={`sun-aura1-${toggle}`}
              className="absolute top-[calc(50%-12px)] left-[calc(50%-12px)] z-30 flex w-6 h-6 bg-yellow-300/70 rounded-full opacity-0 fade-in-scale"
              style={{ animationDelay: "150ms" }}
            ></span>
            <span
              key={`sun-aura2-${toggle}`}
              className="absolute top-[calc(50%-16px)] left-[calc(50%-16px)] z-20 flex w-8 h-8 bg-yellow-300/40 rounded-full opacity-0 fade-in-scale"
              style={{ animationDelay: "300ms" }}
            ></span>
          </>
        ) : (
          <>
            <span className="flex z-50 w-4 h-4 bg-[radial-gradient(circle,theme(colors.neutral.400)_0%,theme(colors.neutral.400)_70%,transparent_100%)] rounded-full"></span>
            <span
              key={`moon-aura1-${toggle}`}
              className="absolute top-[calc(50%-12px)] left-[calc(50%-12px)] -z-30 flex w-6 h-6 bg-neutral-300/70 rounded-full opacity-0 fade-in-scale"
              style={{ animationDelay: "150ms" }}
            ></span>
            <span
              key={`moon-aura2-${toggle}`}
              className="absolute top-[calc(50%-16px)] left-[calc(50%-16px)] -z-20 flex w-8 h-8 bg-neutral-300/40 rounded-full opacity-0 fade-in-scale"
              style={{ animationDelay: "300ms" }}
            ></span>
          </>
        )}
      </div>
    </div>
  );
}
