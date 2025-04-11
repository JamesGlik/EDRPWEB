'use client'

import React from 'react'
import Image from 'next/image'
import ArrowDown from '../../../assets/ArrowDown.svg'
import ArrowUp from '../../../assets/ArrowUp.svg'

const TrySection = () => {
  const handleScrollDown = () => {
    window.scrollBy({ top: 1300, behavior: 'smooth' }) 
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }) 
  }

  return (
    <div className='pt-[102px] flex flex-col items-center justify-center px-4 lg:px-[187px]'>
      <p className='font-bold text-center w-[48%]'>
        <span className='text-[#FF0040]'>EDRP-V</span> is a unique opportunity to immerse yourself in a virtual universe and play a chosen role, following the rules similar to real life. Become a politician, a bandit, a businessman, a taxi driver, a factory worker, a policeman or embody any other role. We have no restrictions, you are free to choose your path and create your own story in this virtual world! you are free to choose your path and create your own story in this virtual world!
      </p>
      <h3 className='pt-[48px] font-bold text-[18px]'>Are you ready for new challenges?</h3>
      <div className='bg-[#FF0040] h-[4px] w-[296px] rounded-full'></div>
      <div className='flex flex-row pt-[48px] gap-[24px] font-extrabold'>
        <button
          onClick={handleScrollDown}
          className='bg-[#0D0D0D] pl-[24px] pr-[12px] py-[16px] border border-[#373737] rounded-[4px] cursor-pointer flex gap-[56px]'
        >
          I Am Ready
          <Image
            src={ArrowDown}
            width={24}
            height={24}
            alt="Arrow Down"
            className='bg-[#1D1D1D] duration-300 hover:bg-[#292929]'
          />
        </button>
        <button
          onClick={handleScrollToTop}
          className='bg-[#0D0D0D] pl-[24px] pr-[12px] py-[16px] border border-[#373737] rounded-[4px] cursor-pointer flex gap-[56px]'
        >
          I Am Not
          <Image
            src={ArrowUp}
            width={24}
            height={24}
            alt="Arrow Up"
            className='bg-[#1D1D1D] duration-300 hover:bg-[#292929]'
          />
        </button>
      </div>
    </div>
  )
}

export default TrySection