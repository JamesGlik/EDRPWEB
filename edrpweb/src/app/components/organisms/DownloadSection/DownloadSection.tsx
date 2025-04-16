import React from 'react'
import Image from 'next/image'
import Gta5Logo from '../../../assets/Gta5Logo.svg'
import RageMPLogo from '../../../assets/RageMPLogo.svg'
import DiscordLogo from '../../../assets/DiscordLogo.svg'
import FacebookLogo from '../../../assets/FacebookLogo.svg'
import VkLogo from '../../../assets/VkLogo.svg'
import YouTubeLogo from '../../../assets/YoutubeLogo.svg'
import TelegramLogo from '../../../assets/TelegramLogo.svg'
import TiktokLogo from '../../../assets/TiktokLogo.svg'

const socialLinks = [
    { logo: DiscordLogo, hover: 'hover:bg-[#5865F2]' },  
    { logo: FacebookLogo, hover: 'hover:bg-[#1877F2]' }, 
    { logo: VkLogo, hover: 'hover:bg-[#4C75A3]' },      
    { logo: YouTubeLogo, hover: 'hover:bg-[#FF0000]' },  
    { logo: TelegramLogo, hover: 'hover:bg-[#229ED9]' }, 
    { logo: TiktokLogo, hover: 'hover:bg-[#FF0040]' },  ]   

const DownloadSection = () => {
  return (
    <div className='pb-[192px] pt-[160px] lg:px-[120px] px-4'>
        <div className='flex flex-wrap 2xl:flex-row 2xl:justify-center justify-between gap-[122px]'>
            <div className=''>
                <h1 className='text-[24px] font-extrabold'>HOW TO START THE GAME?</h1>
                <p className='font-bold text-[#C2C2C2] pb-[24px]'>Just two simple steps and you're ready to play! </p>
                <div className='flex flex-row bg-[#0D0D0D] border border-[#373737] rounded-[12px] py-[20px] px-[20px] items-center xl:w-[820px]'>
                    <Image
                        src={Gta5Logo}
                        width={45}
                        height={45}
                        alt="Gta 5 Logo"
                    />
                    <div className='flex flex-col pl-[24px] '>
                        <p className='font-extrabold'>Purchase Grand Theft Auto V Legacy</p>
                        <p className='font-semibold text-[14px] text-[#C2C2C2]'>You can`t play with Grand Theft Auto V Enhanced edition</p>
                    </div>
                    <a 
                        href="https://store.steampowered.com/app/271590/Grand_Theft_Auto_V_Legacy/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='ml-auto'
                    >
                        <button className='w-[186px] font-extrabold bg-[#FF0040] px-[50px] py-[18px] rounded-[6px] ml-auto cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_1px_#FF0040]'>PURCHASE</button>
                    </a>
                </div>
                <div className='flex flex-row bg-[#0D0D0D] border border-[#373737] rounded-[12px] py-[20px] px-[20px] items-center mt-[24px]'>
                    <Image
                        src={RageMPLogo}
                        width={45}
                        height={45}
                        alt="RageMP Logo"
                    />
                    <div className='flex flex-col pl-[24px] '>
                        <p className='font-extrabold'>Download RAGE MP Launcher</p>
                        <p className='font-semibold text-[14px] text-[#C2C2C2]'>Download Rage Multiplayer From Official Website</p>
                    </div>
                    <a 
                        href="https://rage.mp/#" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='ml-auto'
                    >
                        <button className='w-[186px] font-extrabold bg-[#FF0040] px-[50px] py-[18px] rounded-[6px] cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_1px_#FF0040]'>
                            DOWNLOAD
                        </button>
                    </a>
                </div>
            </div>

            <div>
                <h1 className='text-[24px] font-extrabold'>MOVE WITH US</h1>
                <p className='font-bold text-[#C2C2C2] pb-[24px]'>Be the first to know about promotions and news </p>
                <div className="grid grid-cols-3 gap-[24px]">
                    {socialLinks.map((item, index) => (
                        <div
                        key={index}
                        className={`bg-[#0D0D0D] px-[50px] py-[33px] flex items-center justify-center rounded-[12px] border border-[#373737] transition-colors duration-300  cursor-pointer ${item.hover}`}
                        >
                        <Image src={item.logo} alt={`Social Logo ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default DownloadSection