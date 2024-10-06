"use client";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { getCulture, getIsIndo } from "@/utils/data";
import { Ruthie } from "next/font/google";
import Image from "next/image";

import { useParams, useRouter } from "next/navigation";

const ruthie = Ruthie({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
const page = () => {
  const router = useRouter();
  const params = useParams();
  const lang = getIsIndo();
  const culture = getCulture(parseInt(params.id));
  const titleCapitalize = culture.title
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="bg-[#181818] w-full h-full">
      <Navigation />
      <div className="pt-[130px] md:mx-[100px] mx-[40px]">
        <div className="mb-[11px] md:mb-[25px] flex items-center opacity-50 hover:opacity-100 hover:cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
          >
            <path
              d="M9 2L2 8.54776L9 14.6278"
              stroke="#DCD7C9"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <p
            className="text-[13px] md:text-[18px] font-medium ml-[3px] text-[#DCD7C9]  "
            onClick={() => router.back()}
          >
            {lang ? "Kembali" : "Back"}
          </p>
        </div>
        <div className=" flex flex-col items-center">
          <div className="flex flex-col md:flex-row w-full">
            <div className="md:w-[480px] w-full">
              <Image
                src={culture.img}
                alt={titleCapitalize}
                width={480}
                height={430}
                style={{
                  borderRadius: "15px",
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
                quality={100}
                priority
              />
            </div>
            <div className="mt-[15px] flex flex-col items-center w-full">
              <div className="flex items-center justify-center mb-[20px] relative mt-[20px] md:mt-0">
                <div className=" h-[20px] md:h-[30px] bg-[#725035] absolute w-full"></div>
                <p
                  className={` ${ruthie.className}  md:text-[40px]  text-[20px] text-[#FFF9E9] relative mt-[-15px] md:mt-[-25px] tracking-[0.5em] indent-2    `}
                >
                  -{titleCapitalize}-
                </p>
              </div>
              <div className="flex w-full flex-row md:mt-0 mt-[25px]">
                <div className="md:w-[5px] w-[2px] min-h-full bg-[#DCD7C9] justify-center mt-[5px] md:ml-[25px] ml-0 md:mr-[25px] mr-[15px]"></div>
                <p className="text-[#FFF9E9] w-full h-full font-light text-justify text-[12px] md:text-[16px]">
                  {lang ? culture.desc2ind : culture.desc2eng}
                </p>
              </div>
            </div>
          </div>

          <div className="flex mt-[50px] mb-[125px] flex-col-reverse md:flex-row">
            <div className="flex w-full flex-row md:mt-0 mt-[25px]">
              <p className="text-[#FFF9E9] w-full h-full font-light text-justify text-[12px] md:text-[16px]">
                {lang ? culture.desc2ind : culture.desc2eng}
              </p>
              <div className="md:w-[5px] w-[2px] min-h-full bg-[#DCD7C9] justify-center mt-[5px] md:mr-[25px] mr-0 md:ml-[25px] ml-[15px]"></div>
            </div>
            <div className="md:w-[480px] w-full ">
              <Image
                src={culture.img2}
                alt={titleCapitalize}
                width={480}
                height={595}
                style={{
                  borderRadius: "15px",
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
