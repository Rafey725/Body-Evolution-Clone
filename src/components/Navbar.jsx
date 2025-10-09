import { useEffect, useState } from "react"

export default function () {

    return (
        <>
            <header className="fixed z-30 w-full box-border bg-[#262626]   border-b border-white">
                <div className="flex flex-col lg:flex-row items-end mx-[5.625rem] px-[15px] w-auto h-[164px] justify-between ">
                    <div id="hamburger-container" className=" flex items-center pt-11 gap-0.5 cursor-pointer lg:hidden">
                        MENU
                        <div className="hamburger flex flex-col gap-[2.5px]">
                            <div className="lines w-[12px]"></div>
                            <div className="lines w-[12px]"></div>
                            <div className="lines w-[12px]"></div>
                        </div>
                    </div>

                    <div className="text-[17px] font-[Arial]  w-full h-[60%] grid grid-cols-2 gap-25 grid-rows-1 items-center">
                        <a href="#" className="-ml-[30px]">
                            <img src="src/assets/logo.png" className=" w-[175px] h-[175px] bg-white rounded-tr-[20px] rounded-bl-[20px] rounded-tl-[80px] rounded-br-[80px]" alt="logo" />
                        </a>
                        <div className="hidden lg:flex items-center">
                            <nav>
                                <ul className=" text-nowrap flex gap-17 justify-end mr-10 text-[#79b420] -tracking-[1px]">
                                    <li>Home</li>
                                    <li>About us</li>
                                    <li>Packages</li>
                                </ul>
                            </nav>
                            <div className="hidden [@media(min-width:1200px)]:flex justify-center gap-2 border border-[#79b420] rounded-[25px] text-nowrap py-[8px] px-[27px] ">
                                <img src="src/assets/phone.svg" className="w-4 " alt="phone icon" />
                                0306-6667817
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}