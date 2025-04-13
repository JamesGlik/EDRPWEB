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
          <div className="flex flex-row items-center gap-[32px]">
            <div>
              <Image src={EdrpLogo} width={153} height={33} alt="Edrp Logo" />
            </div>
            <div
              className="flex flex-row items-center rounded-[4px] px-[12px] py-[8px]"
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
              <div className="flex flex-row gap-[6px] font-bold items-center">
                <p className="text-[#C4C4C4] text-[14px]">ONLINE:</p>
                <span className="">293</span>
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
            <p className="font-bold bg-[#FF0040] rounded-[6px] px-[18px] py-[12px] transition-all duration-300 hover:shadow-[0_0_15px_1px_#FF0040]">
              TOP UP BALANCE
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainPage;
