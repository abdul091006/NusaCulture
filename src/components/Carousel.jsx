"use client";
import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { getAllCultures } from "@/utils/data";

import { useRouter } from "next/navigation";

const Carousel = () => {
  const router = useRouter();
  const cultures = getAllCultures();
  const [positionIndexes, setPositionIndexes] = useState([2, 1, 0, 4, 3]);
  const handleSelengkapnya = (id) => {
    router.push(`/explore/${id}`);
  };
  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
    );
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 4) % 5)
    );
  };

  const data = [
    cultures[0],
    cultures[1],
    cultures[2],
    cultures[3],
    cultures[4],
  ];
  const positions = ["left", "left1", "center", "right1", "right"];

  const imageVariants = {
    left: { opacity: 1, scale: 0.8, marginRight: "73%", zIndex: 2 },
    left1: { opacity: 1, scale: 0.9, marginRight: "38%", zIndex: 3 },
    center: { opacity: 1, scale: 1, x: 0, zIndex: 5 },
    right1: { opacity: 1, scale: 0.9, marginLeft: "38%", zIndex: 4 },
    right: { opacity: 1, scale: 0.8, marginLeft: "73%", zIndex: 1 },
  };

  const rotateRefs = useRef([]);

  const useImageMotionValues = (index, xValue, yValue, initialRotation) => {
    const x = useMotionValue(xValue);
    const y = useMotionValue(yValue);

    const rotateY = useTransform(x, [0, 400], [initialRotation, 30]);

    rotateRefs.current[index] = { rotateY };

    return { x, y, rotateY };
  };

  const handleMouse = (event, { x, y }, index) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width / 2;

    const maxRotationY = 30;

    const rotateY = (mouseX / rect.width) * maxRotationY;

    rotateRefs.current[index].rotateY.set(rotateY);
  };

  const getInitialRotation = (position) => {
    switch (position) {
      case "left":
        return 10;
      case "right":
        return -10;
      case "left1":
        return 10;
      case "right1":
        return -10;
      case "center":
      default:
        return 0;
    }
  };
  const handleMouseLeave = (event, index) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const initialRotation = getInitialRotation(
      positions[positionIndexes[index]]
    );

    rotateRefs.current[index].rotateY.set(initialRotation);
  };

  return (
    <div className="h-screen relative transition-all ">
      <Image
        src={data[positionIndexes[2]].img}
        fill
        sizes="100%"
        priority
        className="absolute z-0 "
        style={{
          objectFit: "cover",
        }}
        alt={`bgImage ${data[positionIndexes[2]].title}`}
      />
      <div className="bg-[#1D1D1D]/[0.81] w-full h-full absolute z-[1] backdrop-blur-sm"></div>
      <div className="flex items-center justify-between absolute bottom-0 top-0 w-full h-full">
        <div
          className="hover:bg-white/[0.3] ml-[3%] w-[50px] h-[50px] flex justify-center items-center transition rounded-full hover:cursor-pointer z-[6]"
          onClick={handleBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M5 12L16.25 22.8L18 21L8.75 12L18 3.00001L16.25 1.20001L5 12Z"
              fill="white"
              fillOpacity="0.72"
            />
          </svg>
        </div>

        <div className="flex justify-around items-center">
          {data.map((culture, index) => {
            const initialRotation = getInitialRotation(
              positions[positionIndexes[index]]
            );
            const { x, y, rotateY } = useImageMotionValues(
              index,
              0,
              200,
              initialRotation
            );

            return (
              <motion.div
                className="hover:cursor-pointer transition-all"
                key={index}
                animate={positions[positionIndexes[index]]}
                variants={imageVariants}
                style={{ position: "absolute", perspective: 400 }}
                onMouseMove={(event) => handleMouse(event, { x, y }, index)}
                onMouseLeave={(event) => handleMouseLeave(event, index)}
                onClick={() => handleSelengkapnya(culture.id)}
              >
                <motion.div
                  className="relative"
                  style={{
                    rotateY,
                    transition: "0.5s ease",
                  }}
                  whileHover={{
                    boxShadow: "0 0 20px 10px rgba(255, 255, 255, 0.30)",
                  }}
                >
                  <Image
                    alt={culture.title}
                    src={culture.img}
                    width={300}
                    height={470}
                    priority
                    className=" w-[300px] aspect-[3/4.7]"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <div
          className="hover:bg-white/[0.3] mr-[3%] w-[50px] h-[50px] flex justify-center items-center transition rounded-full hover:cursor-pointer z-[6]"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M18.4 11L8.04999 20.9L6.43999 19.25L14.95 11L6.43999 2.75001L8.04999 1.10001L18.4 11Z"
              fill="white"
              fillOpacity="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
