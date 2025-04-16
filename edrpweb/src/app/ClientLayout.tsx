"use client";
import React, { useState, createContext } from "react";
import HeaderNav from '../app/components/organisms/HeaderNav/HeaderNav';
import Footer from '../app/components/organisms/Footer/Footer';
import bgDefault from '../app/assets/BackgroundPage.png';
import bgHovered from '../app/assets/BackgroundPageColor.png';

export const HoverContext = createContext<{
  isMiddleHovered: boolean;
  setIsMiddleHovered: React.Dispatch<React.SetStateAction<boolean>>;
  backgroundImage: string;
  setBackgroundImage: React.Dispatch<React.SetStateAction<string>>;
}>({
  isMiddleHovered: false,
  setIsMiddleHovered: () => {},
  backgroundImage: bgDefault.src,
  setBackgroundImage: () => {},
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMiddleHovered, setIsMiddleHovered] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(bgDefault.src); 

  return (
    <HoverContext.Provider
      value={{
        isMiddleHovered,
        setIsMiddleHovered,
        backgroundImage,
        setBackgroundImage,
      }}
    >
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat transition-all duration-300 font-[ProxiNova]"
        style={{
          backgroundImage: `url(${isMiddleHovered ? bgHovered.src : backgroundImage})`,
        }}
      >
        <HeaderNav />
        {children}
        <Footer />
      </div>
    </HoverContext.Provider>
  );
}