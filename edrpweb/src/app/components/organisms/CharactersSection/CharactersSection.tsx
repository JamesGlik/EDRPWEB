"use client";
import React from "react";
import Image from "next/image";

type CharactersSectionProps = {
  isMiddleHovered: boolean;
  setIsMiddleHovered: React.Dispatch<React.SetStateAction<boolean>>;
};

import card1Gray from "../../../assets/card1.svg";
import card1Color from "../../../assets/card1color.svg";
import char1 from "../../../assets/char1.png";

import card2Gray from "../../../assets/card2.svg";
import card2Color from "../../../assets/card2color.svg";
import char2 from "../../../assets/char2.png";

import card3Gray from "../../../assets/card3.svg";
import card3Color from "../../../assets/card3color.svg";
import char3 from "../../../assets/char3.png";

import card4Gray from "../../../assets/card4.svg";
import card4Color from "../../../assets/card4color.svg";

import card5Gray from "../../../assets/card5.svg";
import card5Color from "../../../assets/card5color.svg";
import char5 from "../../../assets/char4.png";

import card6Gray from "../../../assets/card6.svg";
import card6Color from "../../../assets/card6color.svg";
import char6 from "../../../assets/char5.png";

import card7Gray from "../../../assets/card7.svg";
import card7Color from "../../../assets/card7color.svg";
import char7 from "../../../assets/char6.png";

import playButton from "../../../assets/StartGame.svg";

const cardData = [
  {
    id: 1,
    graySrc: card1Gray,
    colorSrc: card1Color,
    charSrc: char1,
    alt: "Card 1",
    label: "POLICE",
  },
  {
    id: 2,
    graySrc: card2Gray,
    colorSrc: card2Color,
    charSrc: char2,
    alt: "Card 2",
    label: "ELECTRICIAN",
  },
  {
    id: 3,
    graySrc: card3Gray,
    colorSrc: card3Color,
    charSrc: char3,
    alt: "Card 3",
    label: "GHETTO",
  },
  {
    id: 4,
    graySrc: card4Gray,
    colorSrc: card4Color,
    alt: "Card 4",
    isMiddle: true,
  },
  {
    id: 5,
    graySrc: card5Gray,
    colorSrc: card5Color,
    charSrc: char5,
    alt: "Card 5",
    label: "GANGSTER",
  },
  {
    id: 6,
    graySrc: card6Gray,
    colorSrc: card6Color,
    charSrc: char6,
    alt: "Card 6",
    label: "MAFIA",
  },
  {
    id: 7,
    graySrc: card7Gray,
    colorSrc: card7Color,
    charSrc: char7,
    alt: "Card 7",
    label: "BIKER",
  },
];

const CharactersSection: React.FC<CharactersSectionProps> = ({
  isMiddleHovered,
  setIsMiddleHovered,
}) => {
  return (
    <div className="pb-[101px] pt-[66px] px-4 w-full">
      <div className="flex justify-center items-end gap-[16px] flex-wrap transition-all">
        {cardData.map((card) => {
          const isMiddle = !!card.isMiddle;

          return (
            <div
              key={card.id}
              className="relative overflow-hidden rounded-md group"
              onMouseEnter={() => isMiddle && setIsMiddleHovered(true)}
              onMouseLeave={() => isMiddle && setIsMiddleHovered(false)}
            >
              <Image
                src={card.graySrc}
                alt={card.alt}
                className={`absolute top-0 left-0 w-full h-full object-contain transition-normal duration-[300ms] ease-in-out ${
                  isMiddle
                    ? isMiddleHovered
                      ? "opacity-0"
                      : "opacity-100"
                    : isMiddleHovered
                    ? "opacity-0"
                    : "opacity-100 group-hover:opacity-0"
                }`}
              />

              <Image
                src={card.colorSrc}
                alt={card.alt}
                className={`w-[225px] h-[607px] object-contain transition-normal duration-[300ms] ease-in-out ${
                  isMiddle
                    ? isMiddleHovered
                      ? "opacity-100"
                      : "opacity-0"
                    : isMiddleHovered
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />

              {isMiddle && (
                <button className="absolute z-20 bottom-[20px] left-[40px] flex flex-col items-center focus:outline-none cursor-pointer">
                  <Image
                    src={playButton}
                    alt="Play Button"
                    className={`w-[72px] h-[72px] transition-all duration-300 ease-in-out transform ${
                      isMiddleHovered
                        ? "scale-116 drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
                        : ""
                    }`}
                  />
                  <span className="pt-[16px] text-[21px] font-extrabold flex justify-center items-center w-[50%] tracking-wide">
                    START GAME
                  </span>
                </button>
              )}

              {!isMiddle && card.charSrc && (
                <div className="absolute bottom-[-50px] z-10 w-full">
                  <Image
                    src={card.charSrc}
                    alt={`${card.alt} Character`}
                    className={`w-full object-contain transition-all duration-[300ms] ease-in-out ${
                      isMiddleHovered
                        ? "grayscale-0 translate-y-0"
                        : "grayscale translate-y-5 group-hover:grayscale-0 group-hover:translate-y-0"
                    }`}
                  />
                </div>
              )}

              {!isMiddle && card.label && (
                <div className="absolute bottom-[50px] w-full flex flex-col items-center justify-center z-20">
                  <span
                    className={`opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out bg-opacity-60 px-3 py-1 rounded font-extrabold tracking-wide text-[16px] text-[#ffffffa1]`}
                  >
                    FRACTION
                  </span>
                  <span
                    className={`opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out bg-opacity-60 px-3 py-1 rounded font-extrabold tracking-wide text-[18px]`}
                  >
                    {card.label}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharactersSection;
