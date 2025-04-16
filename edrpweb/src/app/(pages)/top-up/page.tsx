"use client";
import React, { useEffect, useContext, useState } from 'react';
import { HoverContext } from '../../ClientLayout';
import Image from 'next/image';
import DonateUser from '../../assets/DonateUser.svg';
import DonateMail from '../../assets/DonateMail.svg';
import DonateWallet from '../../assets/DonateWallet.svg';
import EdrpCoin from '../../assets/EdrpCoin.svg';
import DonateBackground from '../../assets/DonateBackground.png';
import bgDefault from '../../assets/BackgroundPage.png';


const TopUpPage = () => {


  const { setBackgroundImage } = useContext(HoverContext);

  useEffect(() => {
    setBackgroundImage(DonateBackground.src);

    return () => {
      setBackgroundImage(bgDefault.src);
    };
  }, [setBackgroundImage]);


  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [amount, setAmount] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const conversionRate = 70;
  const parsedAmount = parseInt(amount, 10);
  const coinAmount = !isNaN(parsedAmount) ? parsedAmount * conversionRate : 0;

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  return (
    <div className="h-[463px] flex items-center justify-center mb-[100px] ">
      <div className="w-full max-w-md">
        <div className='flex items-center justify-center gap-4 pb-[36px]'>
          <h1 className="text-[24px] font-extrabold text-center">TOP UP Your Account</h1>
          <p className='text-[18px] font-extrabold bg-[#FF0040] rounded-[6px] px-[8px] py-[6px]'>2x</p>
        </div>
        <form>
          <div className="mb-4 relative flex items-center bg-[#0D0D0D] border border-[#373737] rounded-[4px] focus-within:border-white focus-within:shadow-[0_0_0_1px_white] transition-all">
            <div className="pl-[21px] pr-4">
              <Image src={DonateUser} width={32} height={32} alt="User Icon" />
            </div>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full py-[20px] font-bold placeholder-white bg-transparent text-white outline-none"
              placeholder="Username"
            />
          </div>

          <div className="mb-4">
            <div className={`relative flex items-center bg-[#0D0D0D] rounded-[4px] transition-all ${
              emailError
                ? 'border border-red-500'
                : 'border border-[#373737] focus-within:border-white focus-within:shadow-[0_0_0_1px_white]'
            }`}>
              <div className="pl-[21px] pr-4">
                <Image src={DonateMail} width={32} height={32} alt="Email Icon" />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(value);
                  if (value === '' || validateEmail(value)) {
                    setEmailError('');
                  } else {
                    setEmailError('Please enter a valid email address.');
                  }
                }}
                className="w-full py-[20px] font-bold placeholder-white bg-transparent text-white outline-none"
                placeholder="E-Mail"
              />
            </div>
            {emailError && (
              <p className="text-red-500 text-sm font-medium mt-1">{emailError}</p>
            )}
          </div>

          <div className="mb-4 relative flex items-center justify-between bg-[#0D0D0D] border border-[#373737] rounded-[4px] focus-within:border-white focus-within:shadow-[0_0_0_1px_white] transition-all">
            <div className="flex items-center w-full">
              <div className="pr-4 pl-[21px]">
                <Image src={DonateWallet} width={32} height={32} alt="Amount Icon" />
              </div>
              <input
                id="amount"
                type="number"
                inputMode="numeric"
                min={1}
                max={1000000}
                step={1}
                value={amount}
                onChange={(e) => {
                  const raw = e.target.value;
                  const parsed = parseInt(raw, 10);
                  if (raw === '' || (parsed >= 1 && parsed <= 1000000 && Number.isInteger(parsed))) {
                    setAmount(raw);
                  }
                }}
                placeholder="Amount"
                style={{ MozAppearance: 'textfield' }}
                className="w-full py-[20px] font-bold placeholder-white bg-transparent text-white outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>

            <div className="flex items-center gap-2 pl-4 whitespace-nowrap mr-2 pr-4">
              <Image src={EdrpCoin} width={32} height={32} alt="Coin Icon" />
              <span className="text-white font-bold">
                {amount && !isNaN(parsedAmount) ? `${coinAmount.toLocaleString()} Coin` : ''}
              </span>
            </div>
          </div>

          <div className="pb-[36px] flex items-center">
            <input
              id="terms"
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="w-4 h-4 rounded-[4px] cursor-pointer accent-[#FF0040]"
            />
            <label htmlFor="terms" className="pl-2 text-[14px] font-semibold leading-snug text-[#C2C2C2]">
              I have read and agree to the{' '}
              <span className="text-white cursor-pointer" onClick={() => (window.location.href = "/user-agreement")}>User Agreement</span> and{' '}
              <span className="text-white cursor-pointer" onClick={() => (window.location.href = "/privacy-policy")}>Privacy Policy</span>.
            </label>
          </div>

          <button
            type="submit"
            disabled={!termsAccepted}
            className={`w-full py-[22px] rounded-[4px] font-bold transition-all duration-300 ${
              termsAccepted
                ? 'bg-[#FF0040] hover:shadow-[0_0_15px_1px_#FF0040] cursor-pointer'
                : 'bg-[#FF0040] opacity-50 cursor-not-allowed'
            }`}
          >
            COMPLETE PAYMENT
          </button>
        </form>
      </div>
    </div>
  );
};

export default TopUpPage;