"use client";
import React, { useContext } from "react";
import CharactersSection from './components/organisms/CharactersSection/CharactersSection';
import TrySection from './components/organisms/TrySection/TrySection';
import DownloadSection from './components/organisms/DownloadSection/DownloadSection';
import AboutUsSection from './components/organisms/AboutUsSection/AboutUsSection';
import { HoverContext } from './ClientLayout';

const Page = () => {
  const { isMiddleHovered, setIsMiddleHovered } = useContext(HoverContext);

  return (
    <>
      <CharactersSection
        isMiddleHovered={isMiddleHovered}
        setIsMiddleHovered={setIsMiddleHovered}
      />
      <TrySection />
      <DownloadSection />
      <AboutUsSection />
    </>
  );
};

export default Page;