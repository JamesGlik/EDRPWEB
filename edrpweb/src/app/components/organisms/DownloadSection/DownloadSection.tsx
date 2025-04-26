import React from "react";
import Image from "next/image";
import Gta5Logo from "../../../assets/Gta5Logo.svg";
import RageMPLogo from "../../../assets/RageMPLogo.svg";
import DiscordLogo from "../../../assets/DiscordLogo.svg";
import FacebookLogo from "../../../assets/FacebookLogo.svg";
import VkLogo from "../../../assets/VkLogo.svg";
import YouTubeLogo from "../../../assets/YoutubeLogo.svg";
import TelegramLogo from "../../../assets/TelegramLogo.svg";
import TiktokLogo from "../../../assets/TiktokLogo.svg";

const socialLinks = [
  { logo: DiscordLogo, hover: "hover:bg-[#5865F2]" },
  { logo: FacebookLogo, hover: "hover:bg-[#1877F2]" },
  { logo: VkLogo, hover: "hover:bg-[#4C75A3]" },
  { logo: YouTubeLogo, hover: "hover:bg-[#FF0000]" },
  { logo: TelegramLogo, hover: "hover:bg-[#229ED9]" },
  { logo: TiktokLogo, hover: "hover:bg-[#FF0040]" },
];

const DownloadSection = () => {
  return (
    <div className="xl:pb-[192px] pb-[100px] pt-[160px] lg:px-[100px] px-4">
      <div className="flex flex-col xl:flex-row 2xl:justify-center justify-between 2xl:gap-[60px] gap-[66px]">
        <div className="xl:w-1/2 w-full">
          <h1 className="text-[24px] font-extrabold">HOW TO START THE GAME?</h1>
          <p className="font-bold text-[#C2C2C2] pb-[24px]">
            Just two simple steps and you're ready to play!{" "}
          </p>
          <div className="flex sm:flex-row flex-col bg-[#0D0D0D] border border-[#373737] rounded-[12px] py-[20px] px-[20px] items-center justify-between">
            <div className="flex flex-row">
              <Image src={Gta5Logo} width={45} height={45} alt="Gta 5 Logo" />
              <div className="flex flex-col pl-[24px] ">
                <p className="font-extrabold">
                  Purchase Grand Theft Auto V Legacy
                </p>
                <p className="font-semibold text-[14px] text-[#C2C2C2]">
                  You can`t play with Grand Theft Auto V Enhanced edition
                </p>
              </div>
            </div>
            <div className="sm:pt-0 pt-[20px] w-full sm:w-[186px]">
              <a
                href="https://store.steampowered.com/app/271590/Grand_Theft_Auto_V_Legacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto w-full"
              >
                <button className="sm:w-[186px] w-full font-extrabold  bg-[#FF0040] px-[50px] py-[18px] rounded-[6px] ml-auto cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_1px_#FF0040]">
                  PURCHASE
                </button>
              </a>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col bg-[#0D0D0D] border border-[#373737] rounded-[12px] py-[20px] px-[20px] items-center justify-between mt-[24px]">
            <div className="flex flex-row">
              <Image
                src={RageMPLogo}
                width={45}
                height={45}
                alt="RageMP Logo"
              />
              <div className="flex flex-col pl-[24px] ">
                <p className="font-extrabold">Download RAGE MP Launcher</p>
                <p className="font-semibold text-[14px] text-[#C2C2C2]">
                  Download Rage Multiplayer from the official website
                </p>
              </div>
            </div>
            <div className="sm:pt-0 pt-[20px] w-full sm:w-[186px]">
              <a
                href="https://rage.mp/#"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto w-full"
              >
                <button className="sm:w-[186px] w-full font-extrabold bg-[#FF0040] px-[50px] py-[18px] rounded-[6px] ml-auto cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_1px_#FF0040]">
                  DOWNLOAD
                </button>
              </a>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-[24px] font-extrabold">MOVE WITH US</h1>
          <p className="font-bold text-[#C2C2C2] pb-[24px]">
            Be the first to know about promotions and news{" "}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-2 2xl:grid-cols-3 gap-[24px]">
            {socialLinks.map((item, index) => (
              <div
                key={index}
                className={`bg-[#0D0D0D] 2xl:w-[230px] w-full h-[23px] px-[34px] py-[50px] flex items-center justify-center rounded-[12px] border border-[#373737] transition-colors duration-300 cursor-pointer ${item.hover}`}
              >
                <Image
                  src={item.logo}
                  alt={`Social Logo ${index + 1}`}
                  width={130}
                  height={23}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
