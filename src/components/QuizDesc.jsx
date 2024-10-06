"use client";

import { getIsIndo } from "@/utils/data";
import Link from "next/link";

const QuizDesc = () => {
  const lang = getIsIndo();
  return (
    <>
      <div className="relative text-[48px] lg:text-[80px] font-semibold w-min">
        <p
          className="absolute top-[1px] left-[4px] z-10 w-full "
          style={{
            WebkitTextStroke: "1px #FFFFFF ",
            opacity: 0.42,
            color: "transparent",
          }}
        >
          {lang ? "KUIS" : "CULTURE"}
        </p>
        <p className="z-20 text-[#D5CDB6] w-full ">
          {lang ? "KUIS" : "CULTURE"}
        </p>
      </div>
      <div className="relative text-[48px] lg:text-[80px] mt-[-15px] md:mt-[-10px] font-semibold w-min">
        <p
          className="absolute top-[1px] left-[4px] z-10 w-full "
          style={{
            WebkitTextStroke: "1px #FFFFFF ",
            opacity: 0.42,
            color: "transparent",
          }}
        >
          {lang ? "BUDAYA" : "QUIZ!"}
        </p>
        <p className="z-20 text-[#D5CDB6] w-full ">
          {lang ? "BUDAYA" : "QUIZ!"}
        </p>
      </div>
      <p className="text-[12px] lg:text-[16px] mt-[12px] md:mt-[19px] mb-[20px] md:mb-[30px] text-[#FFFFFF]/[0.5]">
        |
        {lang
          ? " Mari bermain quiz seputar kebudayaan Indonesia"
          : " Let's play a quiz about Indonesian culture"}
      </p>
      <Link
        href="/quiz/play"
        className="bg-[#725035] font-semibold text-[#FFF9E9] text-[12px] lg:text-[18px] py-[11px] px-[69px] rounded-[100px]"
      >
        {lang ? "Mulai" : "Start"}
      </Link>
    </>
  );
};

export default QuizDesc;
