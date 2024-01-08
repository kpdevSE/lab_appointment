import React from "react";
import Navigation from "./Components/Navigation/Navigation";

// Images
import screenWallpapertwo from "./assets/Frame 19.png";
import pointLogoTwo from "./assets/Vector (1).png";
import pointLogoThree from "./assets/Vector (2).png";
import pointLogo from "./assets/Vector.png";
import screenWallpaper from "./assets/screens.png";

export default function App() {
  return (
    <div>
      <Navigation />
      <div className="w-full h-full bg-black text-white">
        {/* Home Screen  */}
        <div className="home flex flex-col items-center justify-center  text-center px-10 py-10">
          <h1 className="text-[40px] md:text-[50px] lg:text-18xl">
            Work at the speed of
            <br /> thought
          </h1>
          <p className="pt-4">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
          <div className="flex flex-col pt-10 gap-10 md:flex-row">
            <button className="w-32 h-14 bg-blue-400 text-black rounded-sm border border-blue-700 hover:bg-transparent hover:text-white">
              TRY FOR FREE
            </button>
            <button className="w-32 h-14 bg-black text-white rounded-sm border border-white">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Screen Wallpaper */}
        <div className="w-full h-full mt-6">
          <img
            src={screenWallpaper}
            alt=""
            className="w-full h-[50vh] md:h-[80vh] lg:h-[90vh] "
          />
        </div>

        {/* Features section */}
        <div className="features text-center w-full h-full pt-6">
          <h1 className="text-6xl">FEATURES</h1>
          <p
            className="text-xl pt-8
          ">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
        </div>

        {/* Features Second Part */}
        <div className="flex-col items-center justify-center pt-10 h-screen w-full">
          <img src={screenWallpapertwo} alt="" />
          <div className="flex-col items-center justify-center">
            <div className="flex-col w-1/2 flex items-center justify-center mx-auto text-center mt-10">
              <div className="flex items-center justify-center gap-6">
                <img src={pointLogo} alt="" />
                <h3>A single source of truth</h3>
              </div>
              <p className="pt-3">
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </div>
            <div className="flex-col w-1/2 flex items-center justify-center mx-auto text-center mt-5">
              <div className="flex items-center justify-center gap-6">
                <img src={pointLogoTwo} alt="" />
                <h3>A single source of truth</h3>
              </div>
              <p className="pt-3">
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
            </div>
            <div className="flex-col w-1/2 flex items-center justify-center mx-auto text-center mt-5">
              <div className="flex items-center justify-center gap-6">
                <img src={pointLogoThree} alt="" />
                <h3>A single source of truth</h3>
              </div>
              <p className="pt-3">
                When you add work to your Slate calendar we automatically
                calculate useful insights
              </p>
              <p>
                Kanishka Pasindu Mudithananda is a great man and he is very
                clever
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
