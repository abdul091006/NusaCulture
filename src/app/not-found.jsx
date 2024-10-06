"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#181818] w-full h-screen">
      <div className="relative">
        <p className="font-semibold text-white/50 md:text-[200px] text-[100px] md:mx-4 mx-[30px] ">
          404
        </p>
        <motion.div
          className="flex md:mt-[20px] mt-[0px] absolute top-0 right-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="33"
            viewBox="0 0 30 33"
            fill="none"
          >
            <path
              d="M12.5523 17.6258C13.2515 15.9076 14.8529 14.7513 15.6787 13.2061C16.554 11.5843 15.6277 8.86186 12.6373 9.22066C10.6785 9.45568 9.89445 11.0547 9.63619 12.332L6.48259 11.4288C7.00932 8.86124 8.99185 6.47173 12.2489 6.08095C14.9727 5.75414 16.9876 6.77045 18.1244 8.20958C19.0957 9.44518 19.8699 11.8802 18.8406 13.8849C17.6959 16.1033 16.438 16.8892 15.8779 18.2967C15.6521 18.8647 15.5779 19.2263 15.7838 20.9418L12.434 21.3437C12.314 20.441 11.9983 18.9856 12.5523 17.6258ZM16.9428 25.5057C17.0957 26.7807 16.1777 27.9491 14.9027 28.102C13.6277 28.255 12.4594 27.337 12.3064 26.062C12.1535 24.787 13.0715 23.6187 14.3465 23.4657C15.6215 23.3128 16.7898 24.2308 16.9428 25.5057Z"
              fill="white"
              fillOpacity="0.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="55"
            viewBox="0 0 31 55"
            fill="none"
          >
            <path
              d="M8.99731 27.8757C12.1666 24.5921 16.8818 23.4174 20.1818 20.6445C23.6651 17.7424 24.0417 10.6777 16.8845 8.75993C12.1963 7.50372 8.94234 10.4376 7.18349 13.118L0.808779 8.16903C4.36166 2.78795 11.0759 -0.854046 18.8712 1.23468C25.3903 2.98148 29.0613 7.14651 30.34 11.4733C31.427 15.1839 30.9663 21.4529 26.7809 25.0887C22.1363 29.1069 18.5447 29.7501 15.9774 32.4517C14.942 33.542 14.4416 34.2999 13.3414 38.4055L5.32429 36.2573C5.87634 34.0861 6.48746 30.4738 8.99731 27.8757ZM11.8107 49.8885C10.9931 52.94 7.82738 54.7677 4.77587 53.95C1.72436 53.1324 -0.103349 49.9667 0.714301 46.9152C1.53195 43.8637 4.69763 42.036 7.74914 42.8536C10.8006 43.6713 12.6284 46.837 11.8107 49.8885Z"
              fill="white"
              fillOpacity="0.5"
            />
          </svg>
        </motion.div>
      </div>
      <p className="font-semibold text-[#D12B2B] text-[24px] mt-[-30px]">
        Page Not Found :(
      </p>
      <p className="font-light text-white/70 mt-[15px] text-center">
        We couldn’t find the page you were looking for
      </p>
    </div>
  );
}
