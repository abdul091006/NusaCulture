"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getIsIndo } from "@/utils/data";

const page = () => {
  const lang = getIsIndo();
  const questions = [
    {
      question: lang
        ? "Apa yang dianggap sebagai simbol yang melambangkan kegembiraan, kebersamaan, dan semangat gotong-royong oleh masyarakat Betawi?"
        : "What is considered a symbol that symbolizes joy, togetherness, and the spirit of gotong-royong by the Betawi people?",
      options: lang
        ? [
            "Musik gambang kromong",
            "Ondel-Ondel",
            "Pementasan seni pertunjukan",
            "Pameran kerajinan lokal",
          ]
        : [
            "Gambang kromong music",
            "Ondel-Ondel",
            "Performing arts performances",
            "Local craft exhibition",
          ],
      correctAnswer: lang ? "Ondel-Ondel" : "Ondel-Ondel",
    },
    {
      question: lang
        ? "Tari Jaipong berasal dari provinsi apa?"
        : "What province does Jaipong dance come from?",
      options: lang
        ? ["Jawa Timur", "Jawa Tengah", "Jawa Barat", "Banten"]
        : ["Jawa Timur", "Jawa Tengah", "Jawa Barat", "Banten"],
      correctAnswer: lang ? "Jawa Barat" : "Jawa Barat",
    },
    {
      question: lang
        ? "Apa makna simbolis dari piring-piring yang dipegang oleh penari dalam Tari Piring?"
        : "What is the symbolic meaning of the plates held by the dancers in the Piring Dance?",
      options: lang
        ? [
            "Alat untuk mengekspresikan gerakan tari",
            "Simbol rejeki dan kelimpahan",
            "Atribut utama untuk keunikan gerakan",
            "Semua jawaban benar",
          ]
        : [
            "A tool to express dance movements",
            "Symbol of fortune and abundance",
            "The main attribute for the uniqueness of the movement",
            "All answers are correct",
          ],
      correctAnswer: lang
        ? "Simbol rejeki dan kelimpahan"
        : "Symbol of fortune and abundance",
    },
    {
      question: lang
        ? "Upacara lompat batu di Sulawesi Utara seringkali diadakan dalam konteks apa?"
        : "The stone jumping ceremony in Sulawesi Utara is often held in what context?",
      options: lang
        ? [
            "Perayaan musim panas",
            "Pertemuan bisnis lokal",
            "Perayaan keagamaan atau acara khusus",
            "Lomba olahraga tahunan",
          ]
        : [
            "Summer celebration",
            "Local business meeting",
            "Religious celebrations or special events",
            "Annual sports competition",
          ],
      correctAnswer: lang
        ? "Perayaan keagamaan atau acara khusus"
        : "Religious celebrations or special events",
    },
    {
      question: lang
        ? "Apa peran Tari Tor Tor dalam masyarakat Batak selain sebagai ekspresi seni tradisional?"
        : "What is the role of Tor Tor Dance in Batak society other than as an expression of traditional art?",
      options: lang
        ? [
            "Sarana untuk menyampaikan pesan moral dan cerita tentang leluhur",
            "Media untuk mempromosikan pariwisata lokal",
            "Alat untuk menjalin hubungan sosial",
            "Semua jawaban benar",
          ]
        : [
            "A means to convey moral messages and stories about ancestors",
            "A medium to promote local tourism",
            "A tool to establish social relationships",
            "All answers are correct",
          ],
      correctAnswer: lang ? "Semua jawaban benar" : "All answers are correct",
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    new Array(questions.length).fill("")
  );
  const [score, setScore] = useState(null);
  const router = useRouter();

  const generateNumberColors = () => {
    const colors = new Array(questions.length).fill("#D6CEBA");
    for (let i = 0; i < currentQuestion; i++) {
      colors[i] = "#725035";
    }
    return colors;
  };

  const [numberColors, setNumberColors] = useState(generateNumberColors());

  useEffect(() => {
    setNumberColors(generateNumberColors());
  }, [currentQuestion]);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const userScore = calculateScore();
      console.log(userScore);
      setScore(userScore);

      router.replace(`/quiz/results?score=${userScore}`);
    }
  };

  const handleAnswer = (answer) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestion] = answer;
    setUserAnswers(updatedUserAnswers);
  };

  const calculateScore = () => {
    let userScore = 0;

    userAnswers.forEach((userAnswer, index) => {
      if (userAnswer === questions[index].correctAnswer) {
        userScore += 20;
      }
    });

    return userScore;
  };

  return (
    <div className="bg-[#181818] w-full h-screen flex xl:flex-row flex-col justify-center items-center">
      <div className="xl:mr-[100px] mb-[72px]">
        <div className="flex xl:flex-col items-center xl:mt-[60px]">
          {numberColors.map((color, index) => (
            <div key={index} className={`flex xl:flex-col items-center`}>
              <div
                className={`h-[6px] xl:h-[55px] w-[20px] md:w-[30px] xl:w-[8px] ${
                  color === "#725035" ? "bg-[#725035]" : "bg-[#D6CEBA]"
                }`}
              ></div>
              {color === "#725035" ? (
                <div className="w-[43px] h-[43px] md:w-[55px] md:h-[55px] lg:w-[64px] lg:h-[64px] bg-[#725035] rounded-full lg:text-[22px] font-semibold text-[#D6CEBA] flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_437_505)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M28.728 6.81476C29.103 7.18981 29.3136 7.69843 29.3136 8.22876C29.3136 8.75908 29.103 9.2677 28.728 9.64275L13.7373 24.6334C13.5392 24.8316 13.304 24.9888 13.0452 25.096C12.7863 25.2032 12.5089 25.2584 12.2287 25.2584C11.9485 25.2584 11.671 25.2032 11.4122 25.096C11.1533 24.9888 10.9181 24.8316 10.72 24.6334L3.27201 17.1868C3.08099 17.0023 2.92863 16.7816 2.82381 16.5376C2.71899 16.2936 2.66382 16.0311 2.66151 15.7656C2.65921 15.5 2.70981 15.2366 2.81037 14.9908C2.91093 14.7451 3.05944 14.5217 3.24722 14.334C3.43501 14.1462 3.65831 13.9977 3.90411 13.8971C4.1499 13.7965 4.41326 13.7459 4.67882 13.7483C4.94438 13.7506 5.20682 13.8057 5.45082 13.9106C5.69483 14.0154 5.91552 14.1677 6.10001 14.3588L12.228 20.4868L25.8987 6.81476C26.0844 6.6289 26.305 6.48147 26.5477 6.38088C26.7904 6.28029 27.0506 6.22852 27.3134 6.22852C27.5761 6.22852 27.8363 6.28029 28.079 6.38088C28.3217 6.48147 28.5423 6.6289 28.728 6.81476Z"
                        fill="#D6CEBA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_437_505">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              ) : (
                <div
                  className={`w-[43px] h-[43px] md:w-[55px] md:h-[55px] lg:w-[64px] lg:h-[64px] bg-[#D9D9D9] rounded-full lg:text-[22px] font-semibold text-[#725035] flex justify-center items-center border-[#D6CEBA] border-[3px]`}
                >
                  {index + 1}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center w-[320px] md:w-[600px] lg:w-[855px]">
        <div className="w-full flex justify-center">
          <div className="w-[15px] md:w-[20px] lg:w-[26px] h-[19px] md:h-[25px] lg:h-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 26 30"
              fill="none"
            >
              <path
                d="M17.8592 8.25617C19.702 10.9646 22.3215 16.2087 20.7642 20.5319C20.198 19.0112 18.1632 16.8567 16.9626 15.9581C15.3055 14.7178 13.2376 13.9463 10.9667 14.1592C7.90802 14.4461 4.1676 14.2695 2.42926 11.8218C1.3498 10.3019 1.74315 8.06264 3.08168 6.21764C4.46196 4.31508 7.19721 3.41203 9.1164 3.49795C12.8283 3.66413 15.9775 5.49065 17.8592 8.25617Z"
                fill="#DCD7C9"
              />
              <path
                d="M16.7854 20.2854C17.9293 21.9665 19.5552 25.2216 18.5886 27.9051C18.2371 26.9611 16.9741 25.6238 16.2288 25.066C15.2003 24.2962 13.9167 23.8173 12.5071 23.9495C10.6085 24.1275 8.28681 24.0179 7.2078 22.4986C6.53777 21.5552 6.78193 20.1652 7.61277 19.02C8.46953 17.8391 10.1673 17.2785 11.3586 17.3319C13.6626 17.435 15.6174 18.5688 16.7854 20.2854Z"
                fill="#DCD7C9"
              />
            </svg>
          </div>
          <div className="mx-[10px] ">
            <p className="text-[26px] md:text-[33px] lg:text-[40px] text-[#D6CEBA] font-semibold">
              {lang ? "PERTANYAAN" : "QUESTION"}
            </p>
            <div className="w-full h-[3px] bg-[#725035] rounded-full mx-auto"></div>
          </div>
          <div className="w-[15px] md:w-[20px] lg:w-[26px] h-[19px] md:h-[25px] lg:h-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 26 30"
              fill="none"
            >
              <path
                d="M8.14077 8.25617C6.29796 10.9646 3.67854 16.2087 5.23579 20.5319C5.80204 19.0112 7.83683 16.8567 9.03742 15.9581C10.6945 14.7178 12.7624 13.9463 15.0333 14.1592C18.092 14.4461 21.8324 14.2695 23.5707 11.8218C24.6502 10.3019 24.2568 8.06263 22.9183 6.21764C21.538 4.31508 18.8028 3.41203 16.8836 3.49795C13.1717 3.66413 10.0225 5.49065 8.14077 8.25617Z"
                fill="#DCD7C9"
              />
              <path
                d="M9.21464 20.2858C8.07078 21.967 6.44487 25.2221 7.41148 27.9056C7.76296 26.9616 9.02598 25.6243 9.7712 25.0665C10.7998 24.2967 12.0834 23.8178 13.4929 23.95C15.3915 24.128 17.7132 24.0184 18.7922 22.4991C19.4623 21.5556 19.2181 20.1657 18.3873 19.0205C17.5305 17.8396 15.8327 17.279 14.6414 17.3324C12.3374 17.4355 10.3826 18.5693 9.21464 20.2858Z"
                fill="#DCD7C9"
              />
            </svg>
          </div>
        </div>
        <div className="mt-[35px] md:mt-[42px] xl:mt-[50px] flex justify-center">
          <p className=" text-white md:text-[18px] lg:text-[22px] font-semibold text-center">
            {questions[currentQuestion].question}
          </p>
        </div>
        <div className="options-container flex flex-col lg:flex-row lg:flex-wrap w-full  items-center lg:justify-between mt-[35px] md:mt-[42px] xl:mt-[50px]">
          {questions[currentQuestion].options.map((option, index) => (
            <div
              key={index}
              className={`option ${
                userAnswers[currentQuestion] === option
                  ? "bg-[#725035] text-[#DCD7C9] "
                  : "bg-[#DCD7C9] text-[#725035]"
              } text-[14px] md:text-[16px] lg:text-[20px] w-[320px] md:w-[500px] lg:w-[405px] py-[10px] px-[10px] min-h-[42px] md:min-h-[55px] lg:min-h-[65px] rounded-[100px] flex justify-center items-center font-semibold mb-[18px] lg:mb-[25px] hover:bg-[#725035] hover:text-[#DCD7C9]  cursor-pointer transition-all text-center `}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center mt-[15px] md:mt-[25px] xl:mt-[35px]">
          <button
            className="bg-[#FFF9E9]/10 border-2 border-[#FFF9E9] text-white text-[12px] md:text-[16px] lg:text-[18px] font-medium w-[162px] md:w-[230px] h-[38px] md:h-[55px] rounded-[100px] hover:border-[#725035]"
            onClick={handleNext}
          >
            {currentQuestion < questions.length - 1
              ? lang
                ? "Selanjutnya"
                : "Next"
              : lang
              ? "Kirim"
              : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
