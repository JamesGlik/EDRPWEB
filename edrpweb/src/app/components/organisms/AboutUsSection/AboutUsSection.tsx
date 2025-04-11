import React from 'react'

const AboutUsSection = () => {
  const faqs = [
    {
      question: 'What is EDRP V?',
      answer: 'This is a unique project based on GTA V, allowing thousands of players to interact with each other in real time.'
    },
    {
      question: 'What is Role Play?',
      answer: 'This is a game mode where participants create characters and scenarios and then act out their roles within the gameplay.'
    },
    {
      question: 'How to start playing EDRP V?',
      answer: 'First, you need to download the licensed GTA V and install EDRP V Launcher.'
    },
    {
      question: 'What is EDRP V Launcher?',
      answer: 'This is an application for connecting to servers. The launcher is safe, can fix game errors and download necessary files.'
    },
    {
      question: 'What to do on the server?',
      answer: 'In addition to a large selection of professions and interaction with players, we have regular updates and seasonal events available.'
    },
    {
      question: 'Where can I find server rules?',
      answer: 'The section with server rules, complaints about players and other topics can be found on the project forum.'
    },
  ]

  return (
    <div className='lg:px-[120px] px-4 pb-[106px]'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-[24px] font-extrabold'>ANSWERS TO FREQUENTLY ASKED QUESTIONS</h1>
          <p className='text-[#C2C2C2] font-bold pt-[12px]'>The main questions which you should read</p>
        </div>
        <div>
          <button className='font-extrabold bg-[#FF0040] p-[18px] rounded-[6px] cursor-pointer transition-colors duration-300 hover:bg-[#d3d3d3] hover:text-[#131313]'>
            CHECK OUR FORUM AND RULES
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
        {faqs.map((faq, index) => (
          <div key={index} className='bg-[#0D0D0D] border border-[#373737] p-[24px] rounded-[12px] transition-colors duration-300 hover:bg-[#292929] cursor-pointer'>
            <h3 className='font-extrabold'>{faq.question}</h3>
            <p className='text-[14px] text-[#C2C2C2] font-bold pt-4'>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutUsSection 