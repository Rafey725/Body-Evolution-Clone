export default function () {
    return (
        <>
            <header className="fixed w-full h-[164px] bg-[#262626] box-border  border-b border-white flex items-end">
                <div className="text-[17px] font-[Arial] mx-[5.625rem] px-[15px] w-full h-[60%] grid grid-cols-[1fr_1fr_auto] grid-rows-1 items-center">
                    <a href="#" className="-ml-[30px]">
                        <img src="src/assets/logo.png" className=" w-[175px] h-[175px] bg-white rounded-tr-[20px] rounded-bl-[20px] rounded-tl-[80px] rounded-br-[80px]" alt="logo" />
                    </a>
                    <nav>
                        <ul className=" text-nowrap flex gap-17 justify-end mr-10 text-[#79b420]">
                            <li>Home</li>
                            <li>About us</li>
                            <li>Packages</li>
                        </ul>
                    </nav>
                    <div className="flex gap-2 border border-[#79b420] rounded-[20px] py-[6px] px-[20px]">
                        <img src="src/assets/phone.svg" className="w-4 " alt="phone icon" />
                        0306-6667817
                    </div>
                </div>
            </header>
        </>
    )
}