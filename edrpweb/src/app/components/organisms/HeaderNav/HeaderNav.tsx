"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import EdrpLogo from "../../../assets/EdrpLogo.svg";
import HeaderText from "../../atoms/HeaderText/HeaderText";
import TwoPersonLogo from "@/app/assets/TwoPersonLogo";
import BurgerMenu from "../../molecules/BurgerMenu/BurgerMenu";
import HeaderBackground from "../../../assets/HeaderBackground.png";

const HeaderNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleTopUpClick = () => {
    router.push("/top-up");
  };

  const handleScrollByPixels = (pixels: number) => {
    window.scrollBy({ top: pixels, behavior: "smooth" });
  };

  const isTopUpPage = pathname === "/top-up";

  return (
    <header className="relative overflow-hidden">
      {!isTopUpPage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat xl:hidden z-0 mt-[60px]"
          style={{ backgroundImage: `url(${HeaderBackground.src})` }}
        />
      )}

      <div className="relative z-10 xl:px-[120px] px-4 pt-[57px] w-full pb-[300px] sm:pb-[700px] lg:pb-[900px] xl:pb-[0px]">
        <div className="flex flex-row justify-between items-center relative">
          <div className="flex flex-row items-center gap-[32px]">
            <div
              className="cursor-pointer"
              onClick={() => (window.location.href = "/")}
            >
              <Image src={EdrpLogo} width={153} height={33} alt="Edrp Logo" />
            </div>
            {!isTopUpPage && (
              <div
                className="xl:flex hidden flex-row items-center rounded-[4px] px-[12px] py-[6px]"
                style={{
                  background:
                    "linear-gradient(344deg, #222 43.88%, #333 88.47%)",
                }}
              >
                <div className="mr-[4px]">
                  <TwoPersonLogo />
                </div>
                <div className="flex flex-row gap-[6px] font-bold items-center">
                  <p className="text-[#C4C4C4] text-[14px]">ONLINE:</p>
                  <span>293</span>
                </div>
              </div>
            )}
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 hidden 2xl:flex gap-x-[44px] items-center">
            {!isTopUpPage && (
              <>
                <div className="cursor-pointer">
                  <HeaderText text="START GAME" />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => handleScrollByPixels(1450)}
                >
                  <HeaderText text="DOWNLOAD" />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => handleScrollByPixels(1450)}
                >
                  <HeaderText text="CONTACT US" />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => handleScrollByPixels(2000)}
                >
                  <HeaderText text="ABOUT" />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    window.open("https://forum.edrp-v.ge/", "_blank")
                  }
                >
                  <HeaderText text="FORUM" />
                </div>
              </>
            )}
          </div>

          <div className="cursor-pointer xl:block hidden">
            <p
              onClick={handleTopUpClick}
              className="font-bold bg-[#FF0040] rounded-[6px] px-[18px] py-[12px] transition-all duration-300 hover:shadow-[0_0_15px_1px_#FF0040]"
            >
              TOP UP BALANCE
            </p>
          </div>

          <div className="xl:hidden">
            <BurgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
