"use client";

import React, { useState } from "react";
import Image from "next/image";
import ArrowDown from "../../../assets/ArrowDown.svg";
import ArrowUp from "../../../assets/ArrowUp.svg";
import GangsterImg from "../../../assets/LeftCharacter.svg";
import LawImg from "../../../assets/RightCharacter.svg";

const TrySection = () => {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  return (
    <div
      className="relative w-full h-screen overflow-hidden mb-[-100px] xl:mt-[0px] sm:mt-[-200px] mt-[-250px]"
      onMouseMove={(e) => {
        const middle = window.innerWidth / 2;
        setHoveredSide(e.clientX < middle ? "left" : "right");
      }}
      onMouseLeave={() => setHoveredSide(null)}
    >
      <div className="absolute top-0 xl:left-[80px] h-full xl:w-[549px] sm:w-[300px] w-[200px]">
        <Image
          src={GangsterImg}
          alt="Gangster"
          fill
          className={`object-contain transition-all duration-300 ${
            hoveredSide === "left" ? "grayscale-0" : "grayscale"
          }`}
        />
      </div>

      <div className="absolute top-0 xl:right-[110px] right-[0px] h-full xl:w-[549px] sm:w-[300px] w-[200px]">
        <Image
          src={LawImg}
          alt="Law"
          fill
          className={`object-contain transition-all duration-300 ${
            hoveredSide === "right" ? "grayscale-0" : "grayscale"
          }`}
        />
      </div>
      <div className="absolute xl:top-[400px] top-[800px] w-[90%] left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-center xl:w-[40%] ">
        <p className="text-white font-bold text-[18px] pb-[48px]">
          <span className="text-[#FF0040]">EDRP-V</span> — is a unique
          opportunity to immerse yourself in a virtual universe and play a
          chosen role, following the rules similar to real life. Become a
          politician, a bandit, a businessman, a taxi driver, a factory worker,
          a policeman or embody any other role. We have no restrictions, you are
          free to choose your path and create your own story in this virtual
          world!
        </p>
        <h3 className="text-white  font-bold text-[20px] ">
          Are you ready for new challenges?
        </h3>
        <div className="bg-[#FF0040] h-[4px] w-[316px] rounded-full mx-auto" />

        <div className="flex gap-18 justify-center pt-[96px]">
          <button
            className={`px-[14px] py-[12px] border rounded-[4px] flex items-center justify-between gap-[16px] font-bold transition-all duration-300 ${
              hoveredSide === "left"
                ? "bg-[#FF0040] border-[#FF0040] text-white"
                : "bg-[#0D0D0D] border-[#373737] border-[2px]"
            }`}
          >
            <Image
              src={ArrowDown}
              width={24}
              height={24}
              alt="Arrow Down"
              className="rounded-full rotate-90"
            />
            The way of the slum gangster
          </button>

          <button
            className={`px-[16px] py-[12px] border rounded-[4px] flex items-center justify-between gap-[16px] font-bold transition-all duration-300 ${
              hoveredSide === "right"
                ? "bg-[#FF0040] border-[#FF0040] text-white"
                : "bg-[#0D0D0D] border-[#373737] border-[2px]"
            }`}
          >
            The path of a Lawman
            <Image
              src={ArrowUp}
              width={24}
              height={24}
              alt="Arrow Up"
              className=" rounded-full rotate-90"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrySection;
