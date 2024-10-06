import { usePathname } from 'next/navigation';
import Link from "next/link";
import React from 'react'

const CardNavbar = () => {
    const pathname = usePathname();
    return (
        <div className='flex flex-col justify-center items-center h-[350px] bg-[#20292C] rounded-[15px]'>
            <div className='h-[210px]'>
                <ul className="flex flex-col justify-center items-center w-[335px] space-y-4">
                    <li className={`  underline-offset-[3px] text-[#F1ECDE] ${pathname === '/' ? 'underline underline-offset-[3px] bg-[#F1ECDE33]/20' : ''}`}>
                        <Link href="/">
                            <button className='flex justify-center items-center w-[182px] h-[40px] rounded-[10px] hover:bg-[#F1ECDE33]/20 hover:underline'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M5.59999 15.8333H8.53601V10.9292H12.2068V15.8333H15.1428V8.33333L10.3714 4.55167L5.59999 8.33333V15.8333ZM4.80475 16.6667V7.91667L10.3714 3.51L15.9381 7.91667V16.6667H11.4116V11.7625H9.33124V16.6667H4.80475Z" fill="#F1ECDE"/>
                                </svg>
                                <p className='text-[14px] font-medium ml-[5px] mt-[4px]'>HOME</p>
                            </button>
                        </Link>
                    </li>
                    <li className={`  underline-offset-[3px] text-[#F1ECDE] ${pathname === '/explore' ? 'underline underline-offset-[3px] bg-[#F1ECDE33]/20' : ''}`}>
                        <Link href="/explore">
                            <button className='flex justify-center items-center w-[182px] h-[40px] rounded-[10px] hover:bg-[#F1ECDE33]/20 hover:underline'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M11.3336 10.5H10.7682L10.5678 10.2975C11.2934 9.41551 11.6922 8.28952 11.6914 7.125C11.6914 6.16081 11.4186 5.21828 10.9074 4.41659C10.3962 3.6149 9.66966 2.99006 8.81959 2.62109C7.96952 2.25211 7.03413 2.15557 6.1317 2.34367C5.22928 2.53177 4.40034 2.99607 3.74973 3.67785C3.09912 4.35963 2.65604 5.22828 2.47654 6.17393C2.29703 7.11959 2.38916 8.09979 2.74127 8.99058C3.09338 9.88137 3.68966 10.6427 4.4547 11.1784C5.21974 11.7141 6.11918 12 7.03929 12C8.19159 12 9.25085 11.5575 10.0668 10.8225L10.26 11.0325V11.625L13.8386 15.3675L14.905 14.25L11.3336 10.5ZM7.03929 10.5C5.25716 10.5 3.81858 8.9925 3.81858 7.125C3.81858 5.2575 5.25716 3.75 7.03929 3.75C8.82142 3.75 10.26 5.2575 10.26 7.125C10.26 8.9925 8.82142 10.5 7.03929 10.5Z" fill="#F1ECDE"/>
                                </svg>
                                <p className='text-[14px] font-medium ml-[5px] mt-[4px]'>EXPLORE</p>
                            </button>
                        </Link>
                    </li>
                    <li className={`  underline-offset-[3px] text-[#F1ECDE] ${pathname === '/quiz' ? 'underline underline-offset-[3px] bg-[#F1ECDE33]/20' : ''}`}>
                        <Link href="/quiz">
                            <button className='flex justify-center items-center w-[182px] h-[40px] rounded-[10px] hover:bg-[#F1ECDE33]/20 hover:underline'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                    <path d="M8.97379 9.70833C9.14278 9.70833 9.2895 9.64334 9.41396 9.51333C9.53841 9.38334 9.60044 9.22959 9.60004 9.05208C9.60004 8.875 9.53801 8.72146 9.41396 8.59146C9.2899 8.46146 9.14318 8.39625 8.97379 8.39583C8.8048 8.39583 8.65828 8.46104 8.53422 8.59146C8.41017 8.72188 8.34794 8.87542 8.34754 9.05208C8.34754 9.22917 8.40977 9.38292 8.53422 9.51333C8.65868 9.64375 8.8052 9.70875 8.97379 9.70833ZM8.52647 7.70834H9.42111C9.42111 7.40625 9.45094 7.185 9.51058 7.04459C9.57022 6.90417 9.70939 6.71917 9.92808 6.48959C10.2263 6.17709 10.4251 5.92459 10.5245 5.73209C10.6239 5.53959 10.6736 5.31292 10.6736 5.05209C10.6736 4.58334 10.517 4.20063 10.2036 3.90396C9.8903 3.60729 9.48036 3.45875 8.97379 3.45834C8.56623 3.45834 8.21096 3.57813 7.90798 3.81771C7.60499 4.05729 7.39365 4.375 7.27397 4.77084L8.07915 5.11459C8.16861 4.85417 8.29048 4.65896 8.44476 4.52896C8.59904 4.39896 8.77538 4.33375 8.97379 4.33334C9.21236 4.33334 9.4062 4.40375 9.55531 4.54459C9.70442 4.68542 9.77897 4.87542 9.77897 5.11459C9.77897 5.26042 9.73921 5.39854 9.65969 5.52896C9.58016 5.65938 9.44099 5.82334 9.24219 6.02084C8.91415 6.32292 8.71295 6.56 8.6386 6.73209C8.56424 6.90417 8.52687 7.22959 8.52647 7.70834ZM5.39522 11.5833C5.06719 11.5833 4.78647 11.461 4.55306 11.2165C4.31966 10.9719 4.20276 10.6775 4.20236 10.3333V2.83334C4.20236 2.48959 4.31926 2.19542 4.55306 1.95084C4.78686 1.70625 5.06758 1.58375 5.39522 1.58334H12.5524C12.8804 1.58334 13.1613 1.70584 13.3951 1.95084C13.6289 2.19584 13.7456 2.49 13.7452 2.83334V10.3333C13.7452 10.6771 13.6285 10.9715 13.3951 11.2165C13.1617 11.4615 12.8808 11.5838 12.5524 11.5833H5.39522ZM3.00951 14.0833C2.68147 14.0833 2.40075 13.961 2.16735 13.7165C1.93395 13.4719 1.81705 13.1775 1.81665 12.8333V4.08334H3.00951V12.8333H11.3595V14.0833H3.00951Z" fill="#F1ECDE"/>
                                </svg>
                                <p className='text-[14px] font-medium ml-[5px] mt-[px]'>QUIZ</p>
                            </button>
                        </Link>
                    </li>
                    <li className={`  underline-offset-[3px] text-[#F1ECDE] ${pathname === '/favorite' ? 'underline underline-offset-[3px] bg-[#F1ECDE33]/20' : ''}`}>
                        <Link href="/favorite">
                            <button className='flex justify-center items-center w-[182px] h-[40px] rounded-[10px] hover:bg-[#F1ECDE33]/20 hover:underline'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M7.44286 13.3438L6.57804 12.5188C3.50643 9.6 1.47858 7.66875 1.47858 5.3125C1.47858 3.38125 2.92193 1.875 4.75893 1.875C5.79672 1.875 6.79275 2.38125 7.44286 3.175C8.09297 2.38125 9.089 1.875 10.1268 1.875C11.9638 1.875 13.4071 3.38125 13.4071 5.3125C13.4071 7.66875 11.3793 9.6 8.30768 12.5188L7.44286 13.3438Z" fill="#F1ECDE"/>
                                </svg>
                                <p className='text-[14px] font-medium ml-[5px] mt-[3px]'>FAVORITE</p>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex rounded-[26px]  justify-center items-center mt-[30px]">
                <p className="mr-2 text-[#DCD7C9] text-[14px] font-semibold cursor-pointer">ID</p>
                <p className='text-[#DCD7C9]'>|</p>
                <p className="ml-2 cursor-pointer text-[#565555] text-[14px] font-semibold">EN</p>
            </div>
        </div>
    )
}

export default CardNavbar