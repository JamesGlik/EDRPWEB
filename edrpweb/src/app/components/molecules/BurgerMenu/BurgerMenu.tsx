"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import HeaderText from "../../atoms/HeaderText/HeaderText";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleScroll = (pixels: number) => {
    window.scrollBy({ top: pixels, behavior: "smooth" });
    setOpen(false);
  };

  const isTopUpPage = pathname === "/top-up";

  const navItems = isTopUpPage
    ? [
        {
          label: "MAIN PAGE",
          action: () => {
            router.push("/");
            setOpen(false);
          },
        },
        {
          label: "FORUM",
          action: () => {
            window.open("https://forum.edrp-v.ge/", "_blank");
            setOpen(false);
          },
        },
      ]
    : [
        { label: "START GAME", action: () => setOpen(false) },
        { label: "DOWNLOAD", action: () => handleScroll(650) },
        { label: "CONTACT US", action: () => handleScroll(1300) },
        { label: "ABOUT", action: () => handleScroll(2200) },
        {
          label: "FORUM",
          action: () => {
            window.open("https://forum.edrp-v.ge/", "_blank");
            setOpen(false);
          },
        },
        {
          label: "TOP UP BALANCE",
          action: () => {
            router.push("/top-up");
            setOpen(false);
          },
        },
      ];

  return (
    <div className="relative z-[9999]">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="flex flex-col items-start gap-[6px] cursor-pointer group"
        >
          <span className="h-[4px] w-[30px] bg-white transition-all duration-300 rounded-full" />
          <span className="h-[4px] w-[18px] bg-white transition-all duration-300 group-hover:w-[30px] rounded-full" />
        </button>
      ) : (
        <button
          onClick={() => setOpen(false)}
          className="text-white text-[32px] font-bold fixed top-[50px] right-6 z-[10000]"
        >
          ✕
        </button>
      )}

      {open && (
        <>
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            className="fixed inset-0 z-[9998]"
          />

          <div className="fixed top-32 right-0 w-full h-full z-[9999] text-white flex justify-center py-8 px-4">
            <div className="flex flex-col gap-4 w-full mx-auto">
              {navItems.map((item, idx) => (
                <div
                  key={idx}
                  onClick={item.action}
                  className="w-full py-4 hover:bg-[#111] cursor-pointer border rounded-lg border-[#373737] bg-[#0D0D0D] text-center"
                >
                  <HeaderText text={item.label} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BurgerMenu;
