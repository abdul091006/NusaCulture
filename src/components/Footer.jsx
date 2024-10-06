import { Spirax } from "next/font/google";
import Image from "next/image";

const spirax = Spirax({ subsets: ["latin"], weight: "400" });
const Footer = () => {
  return (
    <div className="bg-[#20292C] flex flex-col justify-between h-[200px] text-[#DCD7C9] w-full">
      <div className="flex items-center w-full h-[150px] justify-between px-[8%] md:px-[17%]">
        <p
          className={`text-[22px] md:text-4xl text-center ${spirax.className}`}
        >
          Nusa Culture
        </p>
        <div className="">
          <div className="flex mb-[17px]">
            <div className="w-[10px] h-[8px] md:w-[12.5px] md:h-[10px]">
              <Image
                src="/IconEmail.svg"
                width={13}
                height={11}
                alt="icon email"
              />
            </div>
            <p className="text-[9px] md:text-[12px] ml-[7px] mt-[-3px]">
              pawpawculture@gmail.com
            </p>
          </div>
          <div className="flex">
            <div className="w-[10px] h-[10px] md:w-[13.3px] md:h-[13.3px]">
              <Image
                src="/IconDomain.svg"
                width={13.33}
                height={13.33}
                alt="icon domain"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
            <p className="text-[9px] md:text-[12px] ml-[7px] mt-[-3px]">
              https://nusaculture.vercel.app
            </p>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-white"></div>
      <div className="w-full text-center h-[50px] flex justify-center items-center">
        <p className="mt-[5px] text-[10px] md:text-[12px]">
          Made With Love By PawPaw!♡
        </p>
      </div>
    </div>
  );
};

export default Footer;
