"use client";
import Link from "next/link";
import { Spirax } from "next/font/google";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  setEng,
  setIndo,
  getIsIndo,
  logout,
  getIsLogin,
  getNama,
} from "@/utils/data";
import { useRouter } from "next/navigation";

const spirax = Spirax({ subsets: ["latin"], weight: "400", display: "swap" });

const Navigation = () => {
  const nama = getNama();
  const email = nama + "@gmail.com";
  const lang = getIsIndo();
  const router = useRouter();
  const isLogin = getIsLogin();
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isOpenNavbar, setisOpenNavbar] = useState(false);
  const handleClickProfile = () => {
    setIsOpenProfile(true);
  };
  const handleExitProfile = () => {
    setIsOpenProfile(false);
  };

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    logout();
    router.refresh();
  };
  const pathname = usePathname();
  const handleSetIndo = () => {
    setIndo();
    router.refresh();
  };

  const handleSetEng = () => {
    setEng();
    router.refresh();
  };

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [top, setTop] = useState(true);

  useMotionValueEvent(scrollY, "change", () => {
    if (scrollY.current <= 0) {
      setTop(true);
    } else if (scrollY.prev > scrollY.current && scrollY.current > 0) {
      setHidden(false);
      setTop(false);
    } else {
      setHidden(true);
    }
  });
  return (
    <>
      <motion.nav
        variants={{
          topest: { y: 0, background: "transparent" },
          visible: { y: 0, backgroundColor: "#181818" },
          hidden: { y: -150, backgroundColor: "#181818" },
        }}
        animate={hidden ? "hidden" : top ? "topest" : "visible"}
        initial={"topest"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`flex md:justify-between w-full md:px-[117px] py-5 md:text-[14px] lg:text-[16px] xl:text-[18px] items-center text-[#DCD7C9] font-medium fixed z-50 
      }`}
      >
        <div className="w-full flex justify-between items-center mx-[40px] mt-[10px] md:hidden">
          <div onClick={() => setisOpenNavbar(!isOpenNavbar)}>
            <motion.svg
              animate={isOpenNavbar ? "open" : "closed"}
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              className="md:hidden"
            >
              <motion.path
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
                stroke="#DCD7C9"
                strokeLinecap="round"
              />
              <motion.path
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
                stroke="#DCD7C9"
                strokeLinecap="round"
              />
              <motion.path
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
                stroke="#DCD7C9"
                strokeLinecap="round"
              />
            </motion.svg>
          </div>
          <p className={`text-2xl md:text-2xl lg:text-4xl ${spirax.className}`}>
            Nusa Culture
          </p>
          <div
            className=" bg-[#C3C3C3]/[0.15] w-[45px] h-[45px] rounded-[26px] md:hidden flex justify-center items-center cursor-pointer"
            onClick={() => handleClickProfile()}
          >
            <Image src="/IconProfile.svg" alt="" width={25} height={25} />
          </div>
        </div>
        <p
          className={`hidden md:inline-block text-2xl md:text-2xl lg:text-4xl ${spirax.className}`}
        >
          Nusa Culture
        </p>
        <div className=" hidden md:flex ">
          <ul className="flex justify-center items-center  md:gap-[25px] lg:gap-[48px]">
            <li
              className={`hover:underline underline-offset-[5px]  ${
                pathname === "/" ? "underline underline-offset-[5px]" : ""
              }`}
            >
              <Link href="/">HOME</Link>
            </li>
            <li
              className={`hover:underline underline-offset-[5px] ${
                pathname === "/explore"
                  ? "underline underline-offset-[5px]"
                  : ""
              }`}
            >
              <Link href="/explore">EXPLORE</Link>
            </li>
            <li
              className={`hover:underline underline-offset-[5px] ${
                pathname === "/quiz" ? "underline underline-offset-[5px]" : ""
              }`}
            >
              <Link href="/quiz">QUIZ</Link>
            </li>
            <li
              className={`hover:underline underline-offset-[5px] ${
                pathname === "/favorite"
                  ? "underline underline-offset-[5px]"
                  : ""
              }`}
            >
              <Link href="/favorite">FAVORITE</Link>
            </li>
          </ul>
          <div className="flex ml-6 bg-[#C3C3C3]/[0.15]  px-[18px] lg:py-[7px] lg:px-[22px] rounded-[26px]  justify-center items-center mr-[20px]">
            <p
              className={` ${lang ? "" : "text-[#565555]"} mr-2 cursor-pointer`}
              onClick={() => handleSetIndo()}
            >
              ID
            </p>
            <div>|</div>
            <p
              className={` ${lang ? "text-[#565555]" : ""} ml-2 cursor-pointer`}
              onClick={() => handleSetEng()}
            >
              EN
            </p>
          </div>
          <div
            className=" bg-[#C3C3C3]/[0.15] w-[45px] h-[45px] rounded-[26px] flex justify-center items-center cursor-pointer"
            onClick={() => handleClickProfile()}
          >
            <Image src="/IconProfile.svg" alt="" width={25} height={25} />
          </div>
        </div>
      </motion.nav>
      <motion.div
        className="flex flex-col justify-center items-center h-[350px] bg-[#20292C] rounded-[15px] z-40 w-[80%] mx-auto inset-x-0  md:hidden fixed top-[100px]"
        variants={{
          open: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 },
          },
          scroll: {
            opacity: 1,
            scale: 1,
            y: -100,
            transition: { type: "spring", stiffness: 300, damping: 24 },
          },
          closed: {
            opacity: 0,
            scale: 0,
            y: -200,
            transition: { duration: 0.2 },
          },
        }}
        initial={false}
        animate={isOpenNavbar ? (hidden ? "scroll" : "open") : "closed"}
      >
        <div className="h-[210px]">
          <ul className="flex flex-col justify-center items-center w-[335px] space-y-4">
            <li
              className={`  underline-offset-[3px] text-[#F1ECDE] ${
                pathname === "/"
                  ? "underline underline-offset-[3px] bg-[#F1ECDE33]/20"
                  : ""
              }`}
            >
              <Link href="/">
                <button className="flex justify-center items-center w-[182px] h-[40px] rounded-[10px] hover:bg-[#F1ECDE33]/20 hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5.59999 15.8333H8.53601V10.9292H12.2068V15.8333H15.1428V8.33333L10.3714 4.55167L5.59999 8.33333V15.8333ZM4.80475 16.6667V7.91667L10.3714 3.51L15.9381 7.91667V16.6667H11.4116V11.7625H9.33124V16.6667H4.80475Z"
                      fill="#F1ECDE"
                    />
                  </svg>
                  <p className="text-[14px] font-medium ml-[5px] mt-[4px]">
                    HOME
                  </p>
                </button>
              </Link>
            </li>
            <li
              className={`  underline-offset-[3px] text-[#F1ECDE] ${
                pathname === "/explore"
                  ? "underline underline-offset-[3px] bg-[#F1ECDE33]/20"
                  : ""
              }`}
            >
              <Link href="/explore">
                <button className="flex justify-center items-center w-[182px] h-[40px] rounded-[10px] hover:bg-[#F1ECDE33]/20 hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M11.3336 10.5H10.7682L10.5678 10.2975C11.2934 9.41551 11.6922 8.28952 11.6914 7.125C11.6914 6.16081 11.4186 5.21828 10.9074 4.41659C10.3962 3.6149 9.66966 2.99006 8.81959 2.62109C7.96952 2.25211 7.03413 2.15557 6.1317 2.34367C5.22928 2.53177 4.40034 2.99607 3.74973 3.67785C3.09912 4.35963 2.65604 5.22828 2.47654 6.17393C2.29703 7.11959 2.38916 8.09979 2.74127 8.99058C3.09338 9.88137 3.68966 10.6427 4.4547 11.1784C5.21974 11.7141 6.11918 12 7.03929 12C8.19159 12 9.25085 11.5575 10.0668 10.8225L10.26 11.0325V11.625L13.8386 15.3675L14.905 14.25L11.3336 10.5ZM7.03929 10.5C5.25716 10.5 3.81858 8.9925 3.81858 7.125C3.81858 5.2575 5.25716 3.75 7.03929 3.75C8.82142 3.75 10.26 5.2575 10.26 7.125C10.26 8.9925 8.82142 10.5 7.03929 10.5Z"
                      fill="#F1ECDE"
                    />
                  </svg>
                  <p className="text-[14px] font-medium ml-[5px] mt-[4px]">
                    EXPLORE
                  </p>
                </button>
              </Link>
            </li>
            <li
              className={`  underline-offset-[3px] text-[#F1ECDE] ${
                pathname === "/quiz"
                  ? "underline underline-offset-[3px] bg-[#F1ECDE33]/20"
                  : ""
              }`}
            >
              <Link href="/quiz">
                <button className="flex justify-center items-center w-[182px] h-[40px] rounded-[10px] hover:bg-[#F1ECDE33]/20 hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                  >
                    <path
                      d="M8.97379 9.70833C9.14278 9.70833 9.2895 9.64334 9.41396 9.51333C9.53841 9.38334 9.60044 9.22959 9.60004 9.05208C9.60004 8.875 9.53801 8.72146 9.41396 8.59146C9.2899 8.46146 9.14318 8.39625 8.97379 8.39583C8.8048 8.39583 8.65828 8.46104 8.53422 8.59146C8.41017 8.72188 8.34794 8.87542 8.34754 9.05208C8.34754 9.22917 8.40977 9.38292 8.53422 9.51333C8.65868 9.64375 8.8052 9.70875 8.97379 9.70833ZM8.52647 7.70834H9.42111C9.42111 7.40625 9.45094 7.185 9.51058 7.04459C9.57022 6.90417 9.70939 6.71917 9.92808 6.48959C10.2263 6.17709 10.4251 5.92459 10.5245 5.73209C10.6239 5.53959 10.6736 5.31292 10.6736 5.05209C10.6736 4.58334 10.517 4.20063 10.2036 3.90396C9.8903 3.60729 9.48036 3.45875 8.97379 3.45834C8.56623 3.45834 8.21096 3.57813 7.90798 3.81771C7.60499 4.05729 7.39365 4.375 7.27397 4.77084L8.07915 5.11459C8.16861 4.85417 8.29048 4.65896 8.44476 4.52896C8.59904 4.39896 8.77538 4.33375 8.97379 4.33334C9.21236 4.33334 9.4062 4.40375 9.55531 4.54459C9.70442 4.68542 9.77897 4.87542 9.77897 5.11459C9.77897 5.26042 9.73921 5.39854 9.65969 5.52896C9.58016 5.65938 9.44099 5.82334 9.24219 6.02084C8.91415 6.32292 8.71295 6.56 8.6386 6.73209C8.56424 6.90417 8.52687 7.22959 8.52647 7.70834ZM5.39522 11.5833C5.06719 11.5833 4.78647 11.461 4.55306 11.2165C4.31966 10.9719 4.20276 10.6775 4.20236 10.3333V2.83334C4.20236 2.48959 4.31926 2.19542 4.55306 1.95084C4.78686 1.70625 5.06758 1.58375 5.39522 1.58334H12.5524C12.8804 1.58334 13.1613 1.70584 13.3951 1.95084C13.6289 2.19584 13.7456 2.49 13.7452 2.83334V10.3333C13.7452 10.6771 13.6285 10.9715 13.3951 11.2165C13.1617 11.4615 12.8808 11.5838 12.5524 11.5833H5.39522ZM3.00951 14.0833C2.68147 14.0833 2.40075 13.961 2.16735 13.7165C1.93395 13.4719 1.81705 13.1775 1.81665 12.8333V4.08334H3.00951V12.8333H11.3595V14.0833H3.00951Z"
                      fill="#F1ECDE"
                    />
                  </svg>
                  <p className="text-[14px] font-medium ml-[5px] mt-[px]">
                    QUIZ
                  </p>
                </button>
              </Link>
            </li>
            <li
              className={`  underline-offset-[3px] text-[#F1ECDE] ${
                pathname === "/favorite"
                  ? "underline underline-offset-[3px] bg-[#F1ECDE33]/20"
                  : ""
              }`}
            >
              <Link href="/favorite">
                <button className="flex justify-center items-center w-[182px] h-[40px] rounded-[10px] hover:bg-[#F1ECDE33]/20 hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M7.44286 13.3438L6.57804 12.5188C3.50643 9.6 1.47858 7.66875 1.47858 5.3125C1.47858 3.38125 2.92193 1.875 4.75893 1.875C5.79672 1.875 6.79275 2.38125 7.44286 3.175C8.09297 2.38125 9.089 1.875 10.1268 1.875C11.9638 1.875 13.4071 3.38125 13.4071 5.3125C13.4071 7.66875 11.3793 9.6 8.30768 12.5188L7.44286 13.3438Z"
                      fill="#F1ECDE"
                    />
                  </svg>
                  <p className="text-[14px] font-medium ml-[5px] mt-[3px]">
                    FAVORITE
                  </p>
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex rounded-[26px]  justify-center items-center mt-[30px]">
          <p
            className={`${
              lang ? "text-[#DCD7C9]" : "text-[#565555]"
            } mr-2 text-[14px] font-semibold cursor-pointer`}
            onClick={() => handleSetIndo()}
          >
            ID
          </p>
          <p className="text-[#DCD7C9]">|</p>
          <p
            className={`${
              lang ? "text-[#565555]" : "text-[#DCD7C9]"
            } ml-2 cursor-pointer text-[14px] font-semibold`}
            onClick={() => handleSetEng()}
          >
            EN
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col items-center fixed top-[100px]  md:mr-[117px] sm:mr-[40px] z-50 sm:w-[350px] w-[90%] mx-auto inset-x-0  "
        variants={{
          open: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 },
          },
          scroll: {
            opacity: 1,
            scale: 1,
            y: -100,
            transition: { type: "spring", stiffness: 300, damping: 24 },
          },
          closed: {
            opacity: 0,
            scale: 0,
            y: -200,
            transition: { duration: 0.2 },
          },
        }}
        initial={false}
        animate={isOpenProfile ? (hidden ? "scroll" : "open") : "closed"}
      >
        <div className="w-full h-[350px] bg-[#20292C] rounded-[20px] flex flex-col items-center ">
          <div className="w-[118px] h-[118px] bg-[#F1ECDE] flex justify-center items-center mt-[44px] rounded-full relatve">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="62"
              height="62"
              viewBox="0 0 62 62"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.3333 13.9167C17.3333 10.292 18.7732 6.81587 21.3362 4.25287C23.8992 1.68988 27.3754 0.25 31 0.25C34.6246 0.25 38.1008 1.68988 40.6638 4.25287C43.2268 6.81587 44.6667 10.292 44.6667 13.9167C44.6667 17.5413 43.2268 21.0175 40.6638 23.5805C38.1008 26.1435 34.6246 27.5833 31 27.5833C27.3754 27.5833 23.8992 26.1435 21.3362 23.5805C18.7732 21.0175 17.3333 17.5413 17.3333 13.9167ZM17.3333 34.4167C12.8026 34.4167 8.45734 36.2165 5.25359 39.4203C2.04985 42.624 0.25 46.9692 0.25 51.5C0.25 54.2185 1.32991 56.8256 3.25216 58.7478C5.1744 60.6701 7.78153 61.75 10.5 61.75H51.5C54.2185 61.75 56.8256 60.6701 58.7478 58.7478C60.6701 56.8256 61.75 54.2185 61.75 51.5C61.75 46.9692 59.9502 42.624 56.7464 39.4203C53.5427 36.2165 49.1974 34.4167 44.6667 34.4167H17.3333Z"
                fill="#20292C"
              />
            </svg>
          </div>
          <div className="ml-[90%] m-[20px] absolute">
            <button onClick={() => handleExitProfile()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M5.096 3.178L10.5 8.582L15.876 3.206C15.9948 3.0796 16.1378 2.97849 16.2966 2.90873C16.4554 2.83896 16.6266 2.80198 16.8 2.8C17.1713 2.8 17.5274 2.9475 17.79 3.21005C18.0525 3.4726 18.2 3.8287 18.2 4.2C18.2033 4.37164 18.1714 4.54214 18.1064 4.70103C18.0414 4.85993 17.9446 5.00386 17.822 5.124L12.376 10.5L17.822 15.946C18.0527 16.1717 18.188 16.4774 18.2 16.8C18.2 17.1713 18.0525 17.5274 17.79 17.7899C17.5274 18.0525 17.1713 18.2 16.8 18.2C16.6216 18.2074 16.4436 18.1776 16.2773 18.1125C16.111 18.0475 15.96 17.9485 15.834 17.822L10.5 12.418L5.11 17.808C4.99171 17.9302 4.85039 18.0277 4.6942 18.095C4.53802 18.1623 4.37005 18.198 4.2 18.2C3.8287 18.2 3.4726 18.0525 3.21005 17.7899C2.9475 17.5274 2.8 17.1713 2.8 16.8C2.79674 16.6284 2.82858 16.4579 2.89358 16.299C2.95859 16.1401 3.05537 15.9961 3.178 15.876L8.624 10.5L3.178 5.054C2.94726 4.82826 2.81196 4.52258 2.8 4.2C2.8 3.8287 2.9475 3.4726 3.21005 3.21005C3.4726 2.9475 3.8287 2.8 4.2 2.8C4.536 2.8042 4.858 2.94 5.096 3.178Z"
                  fill="#DCD7C9"
                />
              </svg>
            </button>
          </div>
          <div className=" flex flex-col items-center">
            <div className="flex w-[230px] mt-[20px] justify-center">
              <p className="text-white font-medium mr-[8px]">
                {isLogin ? nama : lang ? "Akun Tamu" : "Guest Account"}
              </p>
            </div>
            <p className="text-white/60 text-[14px] mt-[10px] mb-[30px]">
              {isLogin ? email : ""}
            </p>
            {isLogin ? (
              <button
                className="w-[175px] h-[40px] bg-[#F1ECDE1A]/10 flex justify-center items-center rounded-[100px]"
                onClick={() => handleLogout()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 5V4C16 3.44772 15.5523 3 15 3H6C5.44771 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H15C15.5523 21 16 20.5523 16 20V19"
                    stroke="#F1ECDE"
                    strokeOpacity="0.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 12H21"
                    stroke="#F1ECDE"
                    strokeOpacity="0.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17.5 8.5L21 12L17.5 15.5"
                    stroke="#F1ECDE"
                    strokeOpacity="0.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="text-[#F1ECDE99]/60 text-[14px] ml-[3px]">
                  {lang ? "Keluar" : "Logout"}
                </p>
              </button>
            ) : (
              <button
                className="w-[175px] h-[40px] bg-[#F1ECDE1A]/10 flex justify-center items-center rounded-[100px]"
                onClick={() => handleLogin()}
              >
                <p className="text-[#F1ECDE99]/60 text-[14px] ml-[3px]">
                  {lang ? "Masuk" : "Login"}
                </p>
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
