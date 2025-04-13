"use client";
import React, { useState } from "react";
import HeaderNav from './components/organisms/HeaderNav/HeaderNav';
import CharactersSection from './components/organisms/CharactersSection/CharactersSection';
import TrySection from './components/organisms/TrySection/TrySection';
import DownloadSection from './components/organisms/DownloadSection/DownloadSection';
import AboutUsSection from './components/organisms/AboutUsSection/AboutUsSection';
import Footer from './components/organisms/Footer/Footer';
import '../../../edrpweb/src/app/globals.css';

import bgDefault from './assets/BackgroundPage.svg';
import bgHovered from './assets/BackgroundPageColor.svg';

const Page = () => {
  const [isMiddleHovered, setIsMiddleHovered] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat transition-all duration-00 font-[ProxiNova]"
      style={{
        backgroundImage: `url(${isMiddleHovered ? bgHovered.src : bgDefault.src})`,
      }}
    >
      <HeaderNav />
      <CharactersSection
        isMiddleHovered={isMiddleHovered}
        setIsMiddleHovered={setIsMiddleHovered}
      />
      <TrySection />
      <DownloadSection />
      <AboutUsSection />
      <Footer />
    </div>
  );
};

export default Page;