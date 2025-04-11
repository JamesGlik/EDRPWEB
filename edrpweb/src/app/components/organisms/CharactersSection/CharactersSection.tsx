'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import card1Gray from '../../../assets/card1.png'
import card1Color from '../../../assets/card1color.png'

import card2Gray from '../../../assets/card2.png'
import card2Color from '../../../assets/card2color.png'

import card3Gray from '../../../assets/card3.png'
import card3Color from '../../../assets/card3color.png'

import card4Gray from '../../../assets/card4.svg'
import card4Color from '../../../assets/card4color.svg'

import card5Gray from '../../../assets/card5.svg'
import card5Color from '../../../assets/card5color.svg'

import card6Gray from '../../../assets/card6.svg'
import card6Color from '../../../assets/card6color.svg'

import card7Gray from '../../../assets/card7.png'
import card7Color from '../../../assets/card7color.png'

const cardData = [
  { id: 1, graySrc: card1Gray, colorSrc: card1Color, alt: 'Card 1' },
  { id: 2, graySrc: card2Gray, colorSrc: card2Color, alt: 'Card 2' },
  { id: 3, graySrc: card3Gray, colorSrc: card3Color, alt: 'Card 3' },
  { id: 4, graySrc: card4Gray, colorSrc: card4Color, alt: 'Card 4', isMiddle: true },
  { id: 5, graySrc: card5Gray, colorSrc: card5Color, alt: 'Card 5' },
  { id: 6, graySrc: card6Gray, colorSrc: card6Color, alt: 'Card 6' },
  { id: 7, graySrc: card7Gray, colorSrc: card7Color, alt: 'Card 7' },
]

const CharactersSection = () => {
  const [isMiddleHovered, setIsMiddleHovered] = useState(false)

  return (
    <div className="py-[110px] lg:px-[160px] px-4 w-full">
      <div className="flex justify-center items-center gap-6">
        {cardData.map((card) => {
          const isMiddle = !!card.isMiddle

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
                className={`
                  absolute top-0 left-0 w-full h-full object-contain
                  transition-opacity duration-[800ms] ease-in-out
                  ${
                    isMiddleHovered
                      ? 'opacity-0'
                      : 'group-hover:opacity-0 opacity-100'
                  }
                `}
              />

              <Image
                src={card.colorSrc}
                alt={card.alt}
                className={`
                  w-full h-full object-contain
                  transition-opacity duration-[800ms] ease-in-out
                  ${
                    isMiddleHovered
                      ? 'opacity-100'
                      : 'group-hover:opacity-100 opacity-0'
                  }
                `}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CharactersSection