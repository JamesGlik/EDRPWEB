import React from 'react'
import Image from 'next/image'
import EdrpLogo from '../../../assets/EdrpLogo.svg'

const Footer = () => {
  return (
    <div className='lg:px-[120px] px-4 pb-[60px]'>
        <div className='flex flex-row justify-between'>
            <div className='cursor-pointer'>
              <Image src={EdrpLogo} width={153} height={33} alt="Edrp Logo" className=' cursor-pointer' />
            </div>
            <div className='space-x-[80px] flex'>
                <div className='space-y-4'>
                    <h3 className='font-extrabold '>START GAME</h3>
                    <h3 className='text-[#C2C2C2] text-[14px] font-bold cursor-pointer hover:text-[#FFFFFF]'>Start Game</h3>
                    <h3 className='text-[#C2C2C2] text-[14px] font-bold cursor-pointer hover:text-[#FFFFFF]'>Forum</h3>
                </div>
                <div className='space-y-4'>
                    <h3 className='font-extrabold '>MAIN INFORMATION</h3>
                    <h3 className='text-[#C2C2C2] text-[14px] font-bold cursor-pointer hover:text-[#FFFFFF] font-proxiNova'>User Agreement</h3>
                    <h3 className='text-[#C2C2C2] text-[14px] font-bold cursor-pointer hover:text-[#FFFFFF]'>Privacy Policy</h3>
                </div>
                <div className='space-y-4'>
                    <h3 className='font-extrabold '>CONTACT</h3> 
                    <h3 className='text-[#C2C2C2] text-[14px] font-bold cursor-pointer hover:text-[#FFFFFF]'>Youtube Channel</h3>
                    <h3 className='text-[#C2C2C2] text-[14px] font-bold cursor-pointer hover:text-[#FFFFFF]'>help@edrp-v.ge</h3>
                </div>
            </div>
            <div className=''>
                <div className='flex items-center gap-[8px]'>
                    <div className='w-[7px] h-[7px] bg-[#00FF11] rounded-full'></div>
                    <p className='text-[#C2C2C2] text-[14px] font-bold'>All systems are in order</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center pt-[64px]'>
            <p className='text-[#464646] text-[14px] font-bold'>EDRP-V is not affiliated with or endorsed by Take-Two, Rockstar North Interactive, or any other rights holder. All the used trademarks belong to their respective owners.</p>
        </div>
    </div>
  )
}

export default Footer