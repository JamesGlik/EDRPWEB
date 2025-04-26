import Image from "next/image";
import BackgroundMan from "../../../assets/BackgroundMan.png";
import Birja from "../../../assets/Birja.png";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center px-[120px]">
      <div className="flex flex-col xl:flex-row gap-[218px] w-full justify-between items-start">
        <div className="flex flex-col items-start text-start">
          <div className="relative top-[40px]">
            <Image
              src={BackgroundMan}
              alt="Gangster Characters"
              className="w-full h-[581px] object-contain"
            />
          </div>
          <div className="-mt-[20px]">
            <h2 className="text-white text-[24px] font-extrabold mt-4">
              YOUR WAY - YOUR RULES
            </h2>
            <p className="text-[#d3d3d3] font-bold mt-2">
              Form a gang or an organization, engage in criminal activities...
              but there is always the opportunity to go to the bright side. At
              any time, you can become a member of the security forces and start
              maintaining order in the state, carrying out high-profile arrests
              of gangsters!
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start text-start">
          <div className="relative top-[0px]">
            <Image
              src={Birja}
              alt="Gangster Characters"
              className="w-full h-[581px] object-contain"
            />
          </div>
          <div className="-mt-[20px]">
            <h2 className="text-white text-[24px] font-extrabold mt-4">
              YOUR WAY - YOUR RULES
            </h2>
            <p className="text-[#d3d3d3] font-bold mt-2">
              Form a gang or an organization, engage in criminal activities...
              but there is always the opportunity to go to the bright side. At
              any time, you can become a member of the security forces and start
              maintaining order in the state, carrying out high-profile arrests
              of gangsters!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
