import React from "react";
import Image from "next/image";
import EdrpLogo from "../../../assets/EdrpLogo.svg";
import TwoPerson from "../../../assets/HeaderTwoPersonLogo.svg";
import HeaderText from "../../atoms/HeaderText/HeaderText";

const MainPage = () => {
  return (
    <header>
      <div className="relative lg:px-[120px] px-4 pt-[57px] w-full">
        <div className="flex flex-row justify-between items-center relative">
          <div className="flex flex-row items-center gap-[44px]">
            <div>
              <Image src={EdrpLogo} width={153} height={33} alt="Edrp Logo" />
            </div>
            <div
              className="flex flex-row items-center rounded-[4px] px-[12px] py-[10px]"
              style={{
                background: "linear-gradient(344deg, #222 43.88%, #333 88.47%)",
              }}
            >
              <div className="mr-[4px]">
                <Image
                  src={TwoPerson}
                  width={14}
                  height={14}
                  alt="Two Men Logo"
                />
              </div>
              <div className="flex flex-row gap-[6px] text-[16px] font-extrabold">
                <p className="text-[#FFFFFF99]">ONLINE:</p>
                <span>293</span>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-x-[44px] items-center">
            <HeaderText text="START GAME" />
            <HeaderText text="DOWNLOAD" />
            <HeaderText text="DISCORD" />
            <HeaderText text="FORUM" />
            <HeaderText text="ABOUT" />
          </div>

          <div className="cursor-pointer">
            <p className="font-extrabold bg-[#FF0040] rounded-[6px] px-[16px] py-[14px] transition-colors duration-300 hover:bg-[#d3d3d3] hover:text-[#131313]">
              TOP UP BALANCE
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainPage;
