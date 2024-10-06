"use client";
import { useMediaQuery } from "@/utils/MediaQuery";
import { getChangeNama, getIsIndo, login } from "@/utils/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const isLarge = useMediaQuery("(min-width: 1024px)");
  const [stateNama, setStateNama] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    router.push("/");
    console.log(stateNama);
    getChangeNama(stateNama);
  };
  const lang = getIsIndo();
  const [masuk, setMasuk] = useState(true);

  return (
    <div className="bg-[#181818] h-screen w-screen relative lg:flex lg:flex-row overflow-hidden">
      <motion.div
        className={` lg:w-[55%] lg:h-screen bg-[#20292C]/50  ${
          masuk
            ? "lg:rounded-l-[50px] lg:rounded-tr-[0px]"
            : "lg:rounded-r-[50px] lg:rounded-tl-[0px]"
        } absolute z-30`}
        initial="right"
        animate={masuk ? "right" : "left"}
        variants={{
          left: {
            left: 0,
          },
          right: {
            right: 0,
          },
        }}
        transition={{
          type: "spring",
          damping: 20,
          duration: "2s",
        }}
      >
        <Image
          src="/home.jpg"
          fill
          objectFit="cover"
          priority
          quality={100}
          className={`${masuk ? " rounded-l-[50px]" : " rounded-r-[50px]"}  `}
        ></Image>
      </motion.div>
      <div className="flex justify-between z-[1] w-full">
        <motion.div
          className="flex flex-col justify-center items-center w-full h-[85%] lg:h-screen lg:w-[45%] rounded-t-[50px] lg:rounded-none absolute lg:static bg-[#20292C] lg:bg-transparent z-10 bottom-0"
          variants={
            isLarge
              ? { visible: { opacity: 1 }, hidden: { opacity: 0 } }
              : {
                  visible: { opacity: 1, bottom: 0 },
                  hidden: { opacity: 1, bottom: -600 },
                }
          }
          animate={masuk ? "visible" : "hidden"}
          initial={"hidden"}
        >
          <div className="mb-[15px] lg:mb-[30px] w-[300px] md:w-[400px]">
            <p className="text-white/60 font-semibold hidden lg:block">
              {lang ? "MASUK SEKARANG" : "LOGIN NOW"}
            </p>
            <p className="font-semibold text-[26px] md:text-[36px] my-[8px] text-[#E5DECC]  text-center lg:text-start">
              {lang ? "MASUK" : "LOGIN"}
            </p>
            <p className="text-white/60 inline-block">
              {lang ? "Belum mempunyai akun?" : "Don't have an account yet?"}
            </p>
            <p
              className="hover:text-[#c08d63] text-[#725035]  ml-[3px] underline cursor-pointer inline-block"
              onClick={() => setMasuk(false)}
            >
              {lang ? "Daftar" : "Register"}
            </p>
          </div>
          <form
            className="flex flex-col w-[300px] md:w-[400px]"
            onSubmit={handleSubmit}
          >
            <label
              for="name"
              className="text-[#FFF9E9] text-[14px] md:text-[16px] ml-[5px] mb-[3px] font-semibold"
            >
              {lang ? "Nama Pengguna" : "Username"}
            </label>
            <div className="flex w-full h-[50px] items-center border-2 border-white/50 rounded-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                className="ml-[15px]"
              >
                <path
                  opacity="0.16"
                  d="M4.16667 19.2499C4.16667 18.1448 4.60566 17.085 5.38706 16.3036C6.16846 15.5222 7.22827 15.0833 8.33334 15.0833H16.6667C17.7717 15.0833 18.8315 15.5222 19.6129 16.3036C20.3944 17.085 20.8333 18.1448 20.8333 19.2499C20.8333 19.8025 20.6138 20.3324 20.2231 20.7231C19.8324 21.1138 19.3025 21.3333 18.75 21.3333H6.25001C5.69747 21.3333 5.16757 21.1138 4.77687 20.7231C4.38617 20.3324 4.16667 19.8025 4.16667 19.2499Z"
                  fill="#FFF9E9"
                  fill-opacity="0.7"
                />
                <path
                  d="M4.16667 19.2499C4.16667 18.1448 4.60566 17.085 5.38706 16.3036C6.16846 15.5222 7.22827 15.0833 8.33334 15.0833H16.6667C17.7717 15.0833 18.8315 15.5222 19.6129 16.3036C20.3944 17.085 20.8333 18.1448 20.8333 19.2499C20.8333 19.8025 20.6138 20.3324 20.2231 20.7231C19.8324 21.1138 19.3025 21.3333 18.75 21.3333H6.25001C5.69747 21.3333 5.16757 21.1138 4.77687 20.7231C4.38617 20.3324 4.16667 19.8025 4.16667 19.2499Z"
                  stroke="#FFF9E9"
                  strokeOpacity="0.7"
                  strokeWidth="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 10.9166C14.2259 10.9166 15.625 9.51752 15.625 7.79163C15.625 6.06574 14.2259 4.66663 12.5 4.66663C10.7741 4.66663 9.375 6.06574 9.375 7.79163C9.375 9.51752 10.7741 10.9166 12.5 10.9166Z"
                  stroke="#FFF9E9"
                  strokeOpacity="0.7"
                  strokeWidth="2"
                />
              </svg>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={lang ? "Masukkan Nama Pengguna" : "Enter Username"}
                className="bg-transparent w-full mx-[10px] focus:outline-none focus:text-white text-[12px] md:text-[14px] font-semibold "
                required
                onChange={(e) => {
                  setStateNama(e.target.value);
                }}
              />
            </div>

            <label
              for="password"
              className="text-[#FFF9E9] text-[14px] md:text-[16px] ml-[5px] mb-[3px] mt-[15px] font-semibold"
            >
              {lang ? "Kata Sandi" : "Password"}
            </label>
            <div className="flex w-full h-[50px] items-center border-2 border-white/50 rounded-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                className="ml-[15px]"
              >
                <path
                  d="M12 17.5C11.4696 17.5 10.9609 17.2893 10.5858 16.9142C10.2107 16.5391 10 16.0304 10 15.5C10 14.39 10.89 13.5 12 13.5C12.5304 13.5 13.0391 13.7107 13.4142 14.0858C13.7893 14.4609 14 14.9696 14 15.5C14 16.0304 13.7893 16.5391 13.4142 16.9142C13.0391 17.2893 12.5304 17.5 12 17.5ZM18 20.5V10.5H6V20.5H18ZM18 8.5C18.5304 8.5 19.0391 8.71071 19.4142 9.08579C19.7893 9.46086 20 9.96957 20 10.5V20.5C20 21.0304 19.7893 21.5391 19.4142 21.9142C19.0391 22.2893 18.5304 22.5 18 22.5H6C5.46957 22.5 4.96086 22.2893 4.58579 21.9142C4.21071 21.5391 4 21.0304 4 20.5V10.5C4 9.39 4.89 8.5 6 8.5H7V6.5C7 5.17392 7.52678 3.90215 8.46447 2.96447C9.40215 2.02678 10.6739 1.5 12 1.5C12.6566 1.5 13.3068 1.62933 13.9134 1.8806C14.52 2.13188 15.0712 2.50017 15.5355 2.96447C15.9998 3.42876 16.3681 3.97995 16.6194 4.58658C16.8707 5.19321 17 5.84339 17 6.5V8.5H18ZM12 3.5C11.2043 3.5 10.4413 3.81607 9.87868 4.37868C9.31607 4.94129 9 5.70435 9 6.5V8.5H15V6.5C15 5.70435 14.6839 4.94129 14.1213 4.37868C13.5587 3.81607 12.7956 3.5 12 3.5Z"
                  fill="#FFF9E9"
                  fill-opacity="0.7"
                />
              </svg>
              <input
                type="password"
                id="password"
                name="password"
                placeholder={lang ? "Masukkan Kata Sandi" : "Enter Password"}
                className="bg-transparent w-full mx-[10px] focus:outline-none focus:text-white text-[12px] md:text-[14px] font-semibold "
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#F1ECDE] rounded-[10px] h-[50px] text-[18px] font-bold text-[#725035] mt-[22px]"
            >
              {lang ? "MASUK" : "LOGIN"}
            </button>
          </form>

          <div className="flex items-center mt-[17px]">
            <div className="w-[50px] h-[1px] bg-[#F1ECDE]"></div>
            <p className="text-[#F1ECDE] font-light text-[10px] mx-[10px]">
              {lang
                ? "Atau masuk dengan platform sosial"
                : "Or log in with social platforms"}
            </p>
            <div className="w-[50px] md:w-[90px] h-[1px] bg-[#F1ECDE]"></div>
          </div>

          <div className="flex mt-[10px]">
            <div className="flex mt-[20px]">
              <div className="w-[50px] h-[50px] md:w-[54px] md:h-[54px] flex justify-center items-center border-[1px] border-[#F1ECDE] rounded-full cursor-pointer">
                <div className="w-[28px] h-[28px] md:w-[32px] md:h-[32px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 32 33"
                    fill="none"
                  >
                    <path
                      d="M28.608 14.0386C28.772 14.9173 28.8613 15.836 28.8613 16.7946C28.8613 24.2933 23.8427 29.6253 16.2627 29.6253C14.5389 29.6258 12.8319 29.2867 11.2392 28.6273C9.64652 27.9678 8.19938 27.0011 6.98048 25.7821C5.76157 24.5632 4.79479 23.1161 4.13537 21.5234C3.47594 19.9308 3.1368 18.2238 3.13733 16.5C3.1368 14.7762 3.47594 13.0692 4.13537 11.4765C4.79479 9.88382 5.76157 8.43669 6.98048 7.21778C8.19938 5.99888 9.64652 5.03209 11.2392 4.37267C12.8319 3.71325 14.5389 3.37411 16.2627 3.37463C19.8067 3.37463 22.768 4.67863 25.04 6.79597L21.34 10.496V10.4866C19.9627 9.17463 18.2147 8.5013 16.2627 8.5013C11.932 8.5013 8.412 12.16 8.412 16.492C8.412 20.8226 11.932 24.4906 16.2627 24.4906C20.192 24.4906 22.8667 22.2426 23.416 19.1573H16.2627V14.0386H28.6093H28.608Z"
                      fill="#F1ECDE"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-[50px] h-[50px] md:w-[54px] md:h-[54px] flex justify-center items-center border-[1px] border-[#F1ECDE] rounded-full mx-[15px] cursor-pointer">
                <div className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 28 29"
                    fill="none"
                  >
                    <path
                      d="M26.2033 7.49996C25.305 7.90829 24.3367 8.17663 23.3333 8.30496C24.36 7.68663 25.1533 6.70663 25.5267 5.52829C24.5583 6.11163 23.485 6.51996 22.3533 6.75329C21.4317 5.74996 20.1367 5.16663 18.6667 5.16663C15.925 5.16663 13.685 7.40663 13.685 10.1716C13.685 10.5683 13.7317 10.9533 13.8133 11.315C9.66 11.105 5.96167 9.10996 3.5 6.08829C3.06834 6.82329 2.82334 7.68663 2.82334 8.59663C2.82334 10.335 3.69834 11.875 5.05167 12.75C4.22334 12.75 3.45334 12.5166 2.77667 12.1666V12.2016C2.77667 14.6283 4.50334 16.6583 6.79 17.1133C6.05585 17.3142 5.28511 17.3422 4.53834 17.195C4.85521 18.1895 5.4758 19.0598 6.31286 19.6834C7.14991 20.307 8.16136 20.6526 9.205 20.6716C7.4359 22.0721 5.243 22.8292 2.98667 22.8183C2.59 22.8183 2.19334 22.795 1.79667 22.7483C4.01334 24.1716 6.65 25 9.47334 25C18.6667 25 23.7183 17.37 23.7183 10.755C23.7183 10.5333 23.7183 10.3233 23.7067 10.1016C24.6867 9.40163 25.5267 8.51496 26.2033 7.49996Z"
                      fill="#F1ECDE"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-[50px] h-[50px] md:w-[54px] md:h-[54px] flex justify-center items-center border-[1px] border-[#F1ECDE] rounded-full cursor-pointer">
                <div className="w-[28px] h-[28px] md:w-[30px] md:h-[30px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 30 31"
                    fill="none"
                  >
                    <path
                      d="M17.5 17.375H20.625L21.875 12.375H17.5V9.875C17.5 8.5875 17.5 7.375 20 7.375H21.875V3.175C21.4675 3.12125 19.9287 3 18.3037 3C14.91 3 12.5 5.07125 12.5 8.875V12.375H8.75V17.375H12.5V28H17.5V17.375Z"
                      fill="#F1ECDE"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center  w-full  lg:h-screen lg:w-[45%] rounded-t-[50px] lg:rounded-none absolute lg:static bottom-0 h-[90%] bg-[#20292C] bg-opacity-50"
          variants={
            isLarge
              ? { visible: { opacity: 1 }, hidden: { opacity: 0 } }
              : {
                  visible: { opacity: 1, bottom: 0 },
                  hidden: { opacity: 1, bottom: 0 },
                }
          }
          animate={masuk ? "hidden" : "visible"}
          initial={"hidden"}
        >
          <div className=" mb-[15px] lg:mb-[30px] w-[300px] md:w-[400px]">
            <p className="text-white/60 font-semibold hidden lg:block">
              {lang ? "MULAI PERJALANAN ANDA" : "START YOUR JOURNEY"}
            </p>
            <p className="font-semibold text-[26px] md:text-[36px] my-[8px] text-[#E5DECC] text-center lg:text-start">
              {lang ? "DAFTAR" : "REGISTER"}
            </p>
            <p className="text-white/60 inline-block">
              {lang ? "Sudah mempunyai akun?" : "Already have an account?"}
            </p>
            <p
              className="hover:text-[#c08d63] text-[#725035]  ml-[3px] underline cursor-pointer inline-block"
              onClick={() => setMasuk(true)}
            >
              {lang ? "Masuk" : "Login"}
            </p>
          </div>
          <form
            className="flex flex-col w-[300px] md:w-[400px]"
            onSubmit={handleSubmit}
          >
            <label
              for="name"
              className="text-[#FFF9E9] text-[14px] md:text-[16px] ml-[5px] mb-[3px] font-semibold"
            >
              {lang ? "Nama Pengguna" : "Username"}
            </label>
            <div className="flex w-full h-[50px] items-center border-2 border-white/50 rounded-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                className="ml-[15px]"
              >
                <path
                  opacity="0.16"
                  d="M4.16667 19.2499C4.16667 18.1448 4.60566 17.085 5.38706 16.3036C6.16846 15.5222 7.22827 15.0833 8.33334 15.0833H16.6667C17.7717 15.0833 18.8315 15.5222 19.6129 16.3036C20.3944 17.085 20.8333 18.1448 20.8333 19.2499C20.8333 19.8025 20.6138 20.3324 20.2231 20.7231C19.8324 21.1138 19.3025 21.3333 18.75 21.3333H6.25001C5.69747 21.3333 5.16757 21.1138 4.77687 20.7231C4.38617 20.3324 4.16667 19.8025 4.16667 19.2499Z"
                  fill="#FFF9E9"
                  fill-opacity="0.7"
                />
                <path
                  d="M4.16667 19.2499C4.16667 18.1448 4.60566 17.085 5.38706 16.3036C6.16846 15.5222 7.22827 15.0833 8.33334 15.0833H16.6667C17.7717 15.0833 18.8315 15.5222 19.6129 16.3036C20.3944 17.085 20.8333 18.1448 20.8333 19.2499C20.8333 19.8025 20.6138 20.3324 20.2231 20.7231C19.8324 21.1138 19.3025 21.3333 18.75 21.3333H6.25001C5.69747 21.3333 5.16757 21.1138 4.77687 20.7231C4.38617 20.3324 4.16667 19.8025 4.16667 19.2499Z"
                  stroke="#FFF9E9"
                  strokeOpacity="0.7"
                  strokeWidth="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 10.9166C14.2259 10.9166 15.625 9.51752 15.625 7.79163C15.625 6.06574 14.2259 4.66663 12.5 4.66663C10.7741 4.66663 9.375 6.06574 9.375 7.79163C9.375 9.51752 10.7741 10.9166 12.5 10.9166Z"
                  stroke="#FFF9E9"
                  strokeOpacity="0.7"
                  strokeWidth="2"
                />
              </svg>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={lang ? "Masukkan Nama Pengguna" : "Enter Username"}
                className="bg-transparent w-full mx-[10px] focus:outline-none focus:text-white text-[12px] md:text-[14px] font-semibold  "
                required
                onChange={(e) => {
                  setStateNama(e.target.value);
                }}
              />
            </div>
            <label
              for="email"
              className="text-[#FFF9E9] text-[14px] md:text-[16px] ml-[5px] mb-[3px] mt-[15px] font-semibold"
            >
              Email
            </label>
            <div className="flex w-full h-[50px] items-center border-2 border-white/50 rounded-[15px]">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-[15px]"
              >
                <path
                  d="M20 4.5H4C2.89543 4.5 2 5.39543 2 6.5V18.5C2 19.6046 2.89543 20.5 4 20.5H20C21.1046 20.5 22 19.6046 22 18.5V6.5C22 5.39543 21.1046 4.5 20 4.5Z"
                  stroke="#FFF9E9"
                  strokeOpacity="0.7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 7.5L13.03 13.2C12.7213 13.3934 12.3643 13.496 12 13.496C11.6357 13.496 11.2787 13.3934 10.97 13.2L2 7.5"
                  stroke="#FFF9E9"
                  strokeOpacity="0.7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input
                type="text"
                id="email"
                name="email"
                placeholder="Masukkan Email"
                className="bg-transparent w-full mx-[10px] focus:outline-none focus:text-white text-[12px] md:text-[14px] font-semibold  "
                required
              />
            </div>
            <label
              for="password"
              className="text-[#FFF9E9] text-[14px] md:text-[16px] ml-[5px] mb-[3px] mt-[15px] font-semibold"
            >
              {lang ? "Kata Sandi" : "Password"}
            </label>

            <div className="flex w-full h-[50px] items-center border-2 border-white/50 rounded-[15px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                className="ml-[15px]"
              >
                <path
                  d="M12 17.5C11.4696 17.5 10.9609 17.2893 10.5858 16.9142C10.2107 16.5391 10 16.0304 10 15.5C10 14.39 10.89 13.5 12 13.5C12.5304 13.5 13.0391 13.7107 13.4142 14.0858C13.7893 14.4609 14 14.9696 14 15.5C14 16.0304 13.7893 16.5391 13.4142 16.9142C13.0391 17.2893 12.5304 17.5 12 17.5ZM18 20.5V10.5H6V20.5H18ZM18 8.5C18.5304 8.5 19.0391 8.71071 19.4142 9.08579C19.7893 9.46086 20 9.96957 20 10.5V20.5C20 21.0304 19.7893 21.5391 19.4142 21.9142C19.0391 22.2893 18.5304 22.5 18 22.5H6C5.46957 22.5 4.96086 22.2893 4.58579 21.9142C4.21071 21.5391 4 21.0304 4 20.5V10.5C4 9.39 4.89 8.5 6 8.5H7V6.5C7 5.17392 7.52678 3.90215 8.46447 2.96447C9.40215 2.02678 10.6739 1.5 12 1.5C12.6566 1.5 13.3068 1.62933 13.9134 1.8806C14.52 2.13188 15.0712 2.50017 15.5355 2.96447C15.9998 3.42876 16.3681 3.97995 16.6194 4.58658C16.8707 5.19321 17 5.84339 17 6.5V8.5H18ZM12 3.5C11.2043 3.5 10.4413 3.81607 9.87868 4.37868C9.31607 4.94129 9 5.70435 9 6.5V8.5H15V6.5C15 5.70435 14.6839 4.94129 14.1213 4.37868C13.5587 3.81607 12.7956 3.5 12 3.5Z"
                  fill="#FFF9E9"
                  fill-opacity="0.7"
                />
              </svg>
              <input
                type="password"
                id="password"
                name="password"
                placeholder={lang ? "Masukkan Kata Sandi" : "Enter Password"}
                className="bg-transparent w-full mx-[10px] focus:outline-none focus:text-white text-[12px] md:text-[14px] font-semibold "
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#F1ECDE] rounded-[10px] h-[50px] text-[18px] font-bold text-[#725035] mt-[22px]"
            >
              {lang ? "DAFTAR" : "REGISTER"}
            </button>
          </form>

          <div className="flex items-center mt-[17px]">
            <div className="w-[50px] md:w-[100px] h-[1px] bg-[#F1ECDE]"></div>
            <p className="text-[#F1ECDE] font-light text-[10px] mx-[10px]">
              {lang
                ? "Atau daftar dengan platform sosial"
                : "Or register with social platforms"}
            </p>
            <div className="w-[50px] md:w-[90px] h-[1px] bg-[#F1ECDE]"></div>
          </div>

          <div className="flex mt-[20px]">
            <div className="w-[50px] h-[50px] md:w-[54px] md:h-[54px] flex justify-center items-center border-[1px] border-[#F1ECDE] rounded-full cursor-pointer">
              <div className="w-[28px] h-[28px] md:w-[32px] md:h-[32px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 32 33"
                  fill="none"
                >
                  <path
                    d="M28.608 14.0386C28.772 14.9173 28.8613 15.836 28.8613 16.7946C28.8613 24.2933 23.8427 29.6253 16.2627 29.6253C14.5389 29.6258 12.8319 29.2867 11.2392 28.6273C9.64652 27.9678 8.19938 27.0011 6.98048 25.7821C5.76157 24.5632 4.79479 23.1161 4.13537 21.5234C3.47594 19.9308 3.1368 18.2238 3.13733 16.5C3.1368 14.7762 3.47594 13.0692 4.13537 11.4765C4.79479 9.88382 5.76157 8.43669 6.98048 7.21778C8.19938 5.99888 9.64652 5.03209 11.2392 4.37267C12.8319 3.71325 14.5389 3.37411 16.2627 3.37463C19.8067 3.37463 22.768 4.67863 25.04 6.79597L21.34 10.496V10.4866C19.9627 9.17463 18.2147 8.5013 16.2627 8.5013C11.932 8.5013 8.412 12.16 8.412 16.492C8.412 20.8226 11.932 24.4906 16.2627 24.4906C20.192 24.4906 22.8667 22.2426 23.416 19.1573H16.2627V14.0386H28.6093H28.608Z"
                    fill="#F1ECDE"
                  />
                </svg>
              </div>
            </div>
            <div className="w-[50px] h-[50px] md:w-[54px] md:h-[54px] flex justify-center items-center border-[1px] border-[#F1ECDE] rounded-full mx-[15px] cursor-pointer">
              <div className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 28 29"
                  fill="none"
                >
                  <path
                    d="M26.2033 7.49996C25.305 7.90829 24.3367 8.17663 23.3333 8.30496C24.36 7.68663 25.1533 6.70663 25.5267 5.52829C24.5583 6.11163 23.485 6.51996 22.3533 6.75329C21.4317 5.74996 20.1367 5.16663 18.6667 5.16663C15.925 5.16663 13.685 7.40663 13.685 10.1716C13.685 10.5683 13.7317 10.9533 13.8133 11.315C9.66 11.105 5.96167 9.10996 3.5 6.08829C3.06834 6.82329 2.82334 7.68663 2.82334 8.59663C2.82334 10.335 3.69834 11.875 5.05167 12.75C4.22334 12.75 3.45334 12.5166 2.77667 12.1666V12.2016C2.77667 14.6283 4.50334 16.6583 6.79 17.1133C6.05585 17.3142 5.28511 17.3422 4.53834 17.195C4.85521 18.1895 5.4758 19.0598 6.31286 19.6834C7.14991 20.307 8.16136 20.6526 9.205 20.6716C7.4359 22.0721 5.243 22.8292 2.98667 22.8183C2.59 22.8183 2.19334 22.795 1.79667 22.7483C4.01334 24.1716 6.65 25 9.47334 25C18.6667 25 23.7183 17.37 23.7183 10.755C23.7183 10.5333 23.7183 10.3233 23.7067 10.1016C24.6867 9.40163 25.5267 8.51496 26.2033 7.49996Z"
                    fill="#F1ECDE"
                  />
                </svg>
              </div>
            </div>
            <div className="w-[50px] h-[50px] md:w-[54px] md:h-[54px] flex justify-center items-center border-[1px] border-[#F1ECDE] rounded-full cursor-pointer">
              <div className="w-[28px] h-[28px] md:w-[30px] md:h-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    d="M17.5 17.375H20.625L21.875 12.375H17.5V9.875C17.5 8.5875 17.5 7.375 20 7.375H21.875V3.175C21.4675 3.12125 19.9287 3 18.3037 3C14.91 3 12.5 5.07125 12.5 8.875V12.375H8.75V17.375H12.5V28H17.5V17.375Z"
                    fill="#F1ECDE"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
