"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const CardFunfact = ({ title, desc }) => {
  return (
    <motion.div
      className="w-[165px] h-[260px] rounded-[5px] md:w-[220px] md:h-[300px] lg:w-[272px] lg:h-[350px] md:rounded-[10px] bg-[#F1EBDA] p-[17px] md:p-[22px] lg:p-[35px] flex flex-col items-center  "
      style={{ boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.20)" }}
      initial={{ scale: 1, opacity: 0, translateY: 0 }}
      whileInView={{ scale: [0, 1], opacity: 1, translateY: [-200, 0] }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      }}
      viewport={{ once: true }}
    >
      <Image src="imgfunfact.svg" alt="" width={197.21} height={92.21} />
      <p className="text-[12px] md:text-[14px] font-semibold mt-[10px] md:mt-[20px] text-center">
        {title}
      </p>
      <div className="w-[60px] h-[2px] bg-black rounded-full mt-[3px] mb-[15px] md:mt-[3px] md:mb-[20px] lg:mb-[14px]"></div>
      <p className="text-[9px] md:text-[10px] lg:text-[12px] text-center">
        {desc}
      </p>
    </motion.div>
  );
};

export default CardFunfact;
