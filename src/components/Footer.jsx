export default function () {
    return (
        <footer>
            <div className="bg-[#262626] w-full h-[560px] pt-[96px] pb-[70px] font-[Arial] flex flex-col justify-between items-center">
                <div className="flex gap-[60px]">
                    <p className="hover:text-[#77bc22] text-[16px] font-normal cursor-pointer">Home</p>
                    <p className="hover:text-[#77bc22] text-[16px] font-normal cursor-pointer">About us</p>
                    <p className="hover:text-[#77bc22] text-[16px] font-normal cursor-pointer">Packages</p>
                </div>
                <div>
                    <div className="flex gap-x-[10px] mb-[5px] justify-center">
                        <img src="src/assets/Instagram.jpg" className="w-[50px] h-[50px]" alt="Instagram" />
                        <img src="src/assets/Facebook.png" className="w-[70px] h-[50px]" alt="Facebook" />
                    </div>
                    <p className="text-[14px] tracking-widest font-normal">Copyright © 2025. Body Evolution. | All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}