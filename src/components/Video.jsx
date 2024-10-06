"use client";

import ReactPlayer from "react-player";
import TitleVideo from "./TitleVideo";
import { motion } from "framer-motion";
import Image from "next/image";

const Video = () => {
  return (
    <>
      <motion.div
        className="flex justify-center items-center h-max mb-[20px]"
        initial={{ scale: 1, opacity: 0, translateY: 0 }}
        whileInView={{ opacity: 1, translateY: [200, 0] }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.3,
        }}
        viewport={{ once: true }}
      >
        <div className="w-[30px] h-[30px] md:w-[90px] md:h-[90px] lg:w-[104px] lg:h-[104px]">
          <Image
            src="/imgVideo.svg"
            alt="hiasan"
            width={104}
            height={104}
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <div className="font-semibold relative text-[20px] md:text-[40px] lg:text-[50px] max-w-full">
          <TitleVideo />
        </div>
        <div className="w-[30px] h-[30px] md:w-[90px] md:h-[90px] lg:w-[104px] lg:h-[104px]">
          <Image
            src="/imgVideo2.svg"
            alt="hiasan"
            width="104"
            height="104"
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </div>
      </motion.div>
      <div
        className="max-w-[85%] max-h-[70%]"
        initial={{ scale: 1, opacity: 0, translateY: 0 }}
        whileInView={{ opacity: 1, translateY: [200, 0] }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.3,
        }}
        viewport={{ once: true }}
      >
        <ReactPlayer
          width="100%"
          height="100%"
          url="/video.mp4"
          controls={true}
          playing={false}
        />
      </div>
    </>
  );
};

export default Video;
