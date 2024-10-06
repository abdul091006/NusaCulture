"use client";
import { getIsIndo } from "@/utils/data";
import { motion } from "framer-motion";

const TitleMap = () => {
  const lang = getIsIndo();
  return (
    <>
      <motion.div
        className="mb-[10px] text-[20px] md:text-[40px] lg:text-[50px] font-semibold relative w-[80%] text-center"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, translateY: [200, 0] }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.3,
        }}
        viewport={{ once: true }}
      >
        <p
          className="absolute top-[2px] left-[4px] z-10 w-full "
          style={{
            WebkitTextStroke: "1px #FFFFFF ",
            opacity: 0.42,
            color: "transparent",
          }}
        >
          {lang ? "Mari Cari Tahu Bersama Kami!" : "Let’s Explore With Us!"}
        </p>
        <p className="z-20 text-[#D5CDB6] w-full ">
          {lang ? "Mari Cari Tahu Bersama Kami!" : "Let’s Explore With Us!"}
        </p>
      </motion.div>
      <motion.p
        className="mb-[40px] text-[#AEAEAE] text-[10px] md:text-[14px] w-[75%] text-center "
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
        {lang
          ? "Pilih salah satu provinsi untuk melihat kebudayaan provinsi tersebut"
          : "Select a province to see the culture of that province"}
      </motion.p>
    </>
  );
};

export default TitleMap;