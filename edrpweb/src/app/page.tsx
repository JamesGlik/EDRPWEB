import React from 'react';
import HeaderNav from './components/organisms/HeaderNav/HeaderNav';
import CharactersSection from './components/organisms/CharactersSection/CharactersSection'
import TrySection from './components/organisms/TrySection/TrySection';
import PhotosSection from './components/organisms/PhotosSection/PhotosSection';
import DownloadSection from './components/organisms/DownloadSection/DownloadSection';
import AboutUsSection from './components/organisms/AboutUsSection/AboutUsSection';
import Footer from './components/organisms/Footer/Footer';

const Page = () => {
  return (
   <>
   <HeaderNav/>
   <CharactersSection/>
   <TrySection/>
   <PhotosSection/>
   <DownloadSection/>
   <AboutUsSection/>
   <Footer/>
   </>
  );
};

export default Page;