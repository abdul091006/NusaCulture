import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { handleLikeCulture, getIsIndo, getIsLogin } from "@/utils/data";
import { useState } from "react";

const CardCulture = ({ id, img, title, prov, desc, like }) => {
  const lang = getIsIndo();
  const isLogin = getIsLogin();
  const [isLike, setIsLike] = useState(like);
  const [isAnimationVisible, setAnimationVisible] = useState(false);

  const router = useRouter();

  const handleSelengkapnya = ({}) => {
    router.push(`/explore/${id}`);
  };

  const handleLike = (id) => {
    if (isLogin) {
      setIsLike(!isLike);
      handleLikeCulture(id);
    } else {
      setAnimationVisible(true);
    }
  };
  const variants = {
    liked: {
      opacity: [0.5, 1, 0],
      scale: [0, 10],
      y: [0, 0, -400],
      transition: {
        duration: 1,
      },
    },
    initial: { scale: 10, opacity: 0, y: 0 },
  };

  return (
    <motion.div
      className="relative overflow-clip"
      initial={{ scale: [1], opacity: 0 }}
      whileInView={{ scale: [0, 1], opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      viewport={{ once: true }}
    >
      {isLogin ? (
        <motion.svg
          className="absolute my-auto mx-auto top-0 left-0 right-0 bottom-0 "
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          variants={variants}
          initial="initial"
          animate={isLike ? "liked" : "initial"}
        >
          <path
            d="M9.50004 16.9021L8.35212 15.8571C4.27504 12.16 1.58337 9.71375 1.58337 6.72917C1.58337 4.28292 3.49921 2.375 5.93754 2.375C7.31504 2.375 8.63712 3.01625 9.50004 4.02167C10.363 3.01625 11.685 2.375 13.0625 2.375C15.5009 2.375 17.4167 4.28292 17.4167 6.72917C17.4167 9.71375 14.725 12.16 10.648 15.8571L9.50004 16.9021Z"
            fill="#D12B2B"
          />
        </motion.svg>
      ) : (
        <AnimatePresence>
          {isAnimationVisible && (
            <motion.div
              className="absolute  w-[70%] py-[20px] h-min my-auto mx-auto top-0 left-0 right-0 bottom-0 bg-red-600/[0.5] backdrop-blur-lg  text-[#DCD7C9]  text-center rounded-lg font-semibold  "
              initial={{ opacity: 1 }}
              animate={{ opacity: [1], transition: { duration: 2 } }}
              exit={{ opacity: 0 }}
              onAnimationComplete={() => setAnimationVisible(false)}
            >
              {lang
                ? "Mohon untuk masuk terlebih dahulu"
                : "Please login first"}
            </motion.div>
          )}
        </AnimatePresence>
      )}

      <motion.div className="h-[470px] w-[270px] rounded-[20px] bg-[#dcd7c9]">
        <div className="h-[250px]">
          <Image
            src={img}
            alt={title}
            width={270}
            height={250}
            style={{
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              objectFit: "cover",
              height: "100%",
            }}
          />
        </div>
        <div className="h-[220px] px-5 py-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center">
              <p className="text-[18px] font-semibold">{title}</p>
              <motion.svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleLike(id)}
                className="hover:cursor-pointer"
              >
                <path
                  d="M9.50004 16.9021L8.35212 15.8571C4.27504 12.16 1.58337 9.71375 1.58337 6.72917C1.58337 4.28292 3.49921 2.375 5.93754 2.375C7.31504 2.375 8.63712 3.01625 9.50004 4.02167C10.363 3.01625 11.685 2.375 13.0625 2.375C15.5009 2.375 17.4167 4.28292 17.4167 6.72917C17.4167 9.71375 14.725 12.16 10.648 15.8571L9.50004 16.9021Z"
                  fill={isLogin ? (isLike ? "#D12B2B" : "none") : "none"}
                  stroke={isLogin ? (isLike ? "none" : "black") : "black"}
                  strokeWidth={2}
                />
              </motion.svg>
            </div>
            <div className="mb-[8px] flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
              >
                <path
                  d="M9.08335 4.24999C9.08335 3.71376 8.97774 3.18278 8.77253 2.68737C8.56732 2.19195 8.26655 1.74181 7.88737 1.36264C7.5082 0.983464 7.05806 0.682688 6.56264 0.477482C6.06723 0.272275 5.53625 0.166656 5.00002 0.166656C4.46379 0.166656 3.93281 0.272275 3.4374 0.477482C2.94198 0.682688 2.49184 0.983464 2.11267 1.36264C1.7335 1.74181 1.43272 2.19195 1.22751 2.68737C1.02231 3.18278 0.916687 3.71376 0.916687 4.24999C0.916687 5.05907 1.15527 5.81157 1.56127 6.44624H1.5566L5.00002 11.8333L8.44344 6.44624H8.43935C8.85986 5.79091 9.08338 5.02863 9.08335 4.24999ZM5.00002 5.99999C4.53589 5.99999 4.09077 5.81562 3.76258 5.48743C3.43439 5.15924 3.25002 4.71412 3.25002 4.24999C3.25002 3.78586 3.43439 3.34074 3.76258 3.01255C4.09077 2.68436 4.53589 2.49999 5.00002 2.49999C5.46415 2.49999 5.90927 2.68436 6.23746 3.01255C6.56565 3.34074 6.75002 3.78586 6.75002 4.24999C6.75002 4.71412 6.56565 5.15924 6.23746 5.48743C5.90927 5.81562 5.46415 5.99999 5.00002 5.99999Z"
                  fill="#2C3639"
                />
              </svg>
              <p className="text-[12px] italic ml-[5px] mt-[2px]">{prov}</p>
            </div>
            <p className="text-[10px] h-[90px] overflow-hidden text-justify">
              {desc}
            </p>
          </div>
          <div className="flex justify-end mt-[15px]">
            <button
              className="w-[115px] h-[30px] text-[12px] flex items-center justify-center bg-[#AEAEAE]/[0.3] rounded-[50px] py-[9px] border-solid border-2 border-black"
              onClick={handleSelengkapnya}
            >
              {lang ? "Selengkapnya" : "More"}

              <Image
                src="IconArrow.svg"
                alt=""
                className="ml-[2px] w-auto"
                width={11.4}
                height={9}
              />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CardCulture;
