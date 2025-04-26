import React from "react";
import Image from "next/image";
import EdrpLogo from "../../../assets/EdrpLogo.svg";

const Footer = () => {
  return (
    <div className="lg:px-[120px] px-4 pb-[60px]">
      <div className="flex xl:flex-row flex-col lg:justify-between sm:justify-center sm:items-center">
        <div
          className="cursor-pointer flex justify-start"
          onClick={() => (window.location.href = "/")}
        >
          <Image src={EdrpLogo} width={153} height={33} alt="Edrp Logo" />
        </div>

        <div className="flex flex-col sm:flex-row items-start justify-start gap-x-[80px] gap-y-[50px] xl:pt-0 pt-[50px]  sm:text-left">
          <div className="space-y-4">
            <h3 className="font-extrabold">ROUTE</h3>
            <h3 className="text-[#999999] text-[14px] font-semibold cursor-pointer hover:text-[#FFFFFF]">
              Start Game
            </h3>
            <h3
              className="text-[#999999] text-[14px] font-semibold cursor-pointer hover:text-[#FFFFFF]"
              onClick={() => window.open("https://forum.edrp-v.ge/", "_blank")}
            >
              Forum
            </h3>
          </div>

          <div className="space-y-4">
            <h3 className="font-extrabold">MAIN INFORMATION</h3>
            <h3
              className="text-[#999999] text-[14px] font-semibold cursor-pointer hover:text-[#FFFFFF]"
              onClick={() => (window.location.href = "/user-agreement")}
            >
              User Agreement
            </h3>
            <h3
              className="text-[#999999] text-[14px] font-semibold cursor-pointer hover:text-[#FFFFFF]"
              onClick={() => (window.location.href = "/privacy-policy")}
            >
              Privacy Policy
            </h3>
          </div>

          <div className="space-y-4">
            <h3 className="font-extrabold">CONTACT</h3>
            <h3 className="text-[#999999] text-[14px] font-semibold cursor-pointer hover:text-[#FFFFFF]">
              help@edrp-v.ge
            </h3>
          </div>
        </div>

        <div className="xl:pt-0 pt-[50px] flex justify-start xl:justify-end">
          <div className="flex items-center gap-[8px]">
            <div className="w-[7px] h-[7px] bg-[#00FF11] rounded-full"></div>
            <p className="text-[#999999] text-[14px] font-semibold">
              All systems are in order
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-[64px] text-center">
        <p className="text-[#464646] text-[14px] font-semibold max-w-[800px]">
          EDRP-V is not affiliated with or endorsed by Take-Two, Rockstar North
          Interactive, or any other rights holder. All the used trademarks
          belong to their respective owners.
        </p>
      </div>
    </div>
  );
};

export default Footer;
