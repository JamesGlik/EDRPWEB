import Image from 'next/image';
import BackgroundMan from '../../../assets/BackgroundMan.png';
import GroupPhoto1 from '../../../assets/GroupPhotos1.png';
import GroupPhoto2 from '../../../assets/GroupPhotos2.png';
import GroupPhoto3 from '../../../assets/GroupPhotos3.png';
import GroupPhoto4 from '../../../assets/GroupPhotos4.png';
import GroupPhoto5 from '../../../assets/GroupPhotos5.png';
import GroupPhoto6 from '../../../assets/GroupPhotos6.png';
import GroupPhoto7 from '../../../assets/GroupPhotos7.png';

export default function Page() {
  return (
    <section className="flex pt-[196px] pr-[160px]">
      <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8">
        <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start relative">
          <div className="relative ">
            <Image src={BackgroundMan} width={1314}  alt="Two Characters" className="w-full h-auto pl-[100px]" />
            
            <div className="absolute top-0 left-[168px] w-auto h-full flex items-end ">
              <div className=" w-full">
                <h2 className="text-[24px] font-extrabold ">YOUR WAY - YOUR RULES</h2>
                <p className="font-bold">
                  Form a gang or an organization, engage in criminal activities... but there is always the opportunity to
                  go to the bright side. At any time, you can become a member of the security forces and start maintaining
                  order in the state, carrying out high-profile arrests of gangsters!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 ">
          <Image src={GroupPhoto1} width={738} height={292} alt="Group Scene 1" className="w-full h-auto" />

          <div className="grid grid-cols-3 gap-[24px]">
            <Image src={GroupPhoto2} width={240} height={120} alt="Group Scene 2" />
            <Image src={GroupPhoto3} width={240} height={120} alt="Group Scene 3" />
            <Image src={GroupPhoto4} width={240} height={120} alt="Group Scene 4" />
            <Image src={GroupPhoto5} width={240} height={120} alt="Group Scene 5" />
            <Image src={GroupPhoto6} width={240} height={120} alt="Group Scene 6" />
            <Image src={GroupPhoto7} width={240} height={120} alt="Group Scene 7" />
          </div>
        </div>
      </div>
    </section>
  );
}