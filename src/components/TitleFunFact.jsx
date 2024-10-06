"use client";
import { getIsIndo } from "@/utils/data";
import { motion } from "framer-motion";

const TitleFunFact = () => {
  const lang = getIsIndo();
  return (
    <motion.div
      className="mb-[45px] font-semibold relative text-[20px] md:text-[40px] lg:text-[50px] "
      initial={{ scale: 1, opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3,
      }}
      viewport={{ once: true }}
    >
      <div className="absolute flex justify-center  items-center z-10 w-full top-[2px] left-[4px]   ">
        <p
          style={{
            WebkitTextStroke: "1px #FFFFFF ",
            opacity: 0.42,
            color: "transparent",
          }}
        >
          {lang ? "Fakta Menarik" : "Fun Facts"}
        </p>
      </div>
      <p className=" z-20 text-[#D5CDB6] ">
        {lang ? "Fakta Menarik" : "Fun Facts"}
      </p>
    </motion.div>
  );
};

export default TitleFunFact;