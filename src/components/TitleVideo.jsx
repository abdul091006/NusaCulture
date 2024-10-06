"use client";
import { getIsIndo } from "@/utils/data";

const TitleVideo = () => {
  const lang = getIsIndo();
  return (
    <div>
      <p
        className="absolute top-[2px] left-[4px] z-10 w-full"
        style={{
          WebkitTextStroke: "1px #FFFFFF ",
          opacity: 0.42,
          color: "transparent",
        }}
      >
        {lang ? "Kebudayaan Indonesia" : "Indonesian Culture"}
      </p>
      <p
        className=" z-20 text-[#D5CDB6] w-max"
        style={{ textShadow: "0 0 10px rgba(214, 206, 186, 0.5)" }}
      >
        {lang ? "Kebudayaan Indonesia" : "Indonesian Culture"}
      </p>
    </div>
  );
};

export default TitleVideo;