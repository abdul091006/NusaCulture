"use client";
import Image from "next/image";
import QuizDesc from "./QuizDesc";
import { motion } from "framer-motion";

const LandingQuiz = () => {
  return (
    <div className="h-screen  w-full flex justify-center items-center">
      <div className="w-min flex flex-col lg:flex-row justify-center items-center gap-[35px] lg:gap-[70px] ">
        <motion.div
          initial={{ scale: 1, opacity: 0 }}
          whileInView={{ opacity: 1, translateX: [200, 0] }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="w-[100%] max-w-[350px] sm:min-w-[350px] sm:h-[368px] lg:min-w-[438.96px] lg:h-[458.78px]"
        >
          <Image
            src="/quizImg.png"
            alt="Quiz Image"
            width={438.96}
            height={458.78}
            quality={100}
          />
        </motion.div>
        <motion.div
          initial={{ scale: 1, opacity: 0 }}
          whileInView={{ opacity: 1, translateX: [-200, 0] }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          viewport={{ once: true }}
        >
          <QuizDesc />
        </motion.div>
      </div>
    </div>
  );
};

export default LandingQuiz;
