export default function () {
    return (
        <div className="font-[Arial] text-[rgb(38,38,38)] bg-white pt-[111px] mb-[111px] h-auto">
            {/* Services */}
            <div className="max-w-[1140px] m-auto mb-[200px]">
                <p className="text-[#78bc20] font-semibold text-[12px] leading-[9px]">WELCOME TO BODY EVOLUTION</p>
                <h1 className="text-[72px] font-normal leading-[79px] mt-[3px]">Our Services</h1>
                <div className="grid grid-cols-3 gap-[30px] mt-[87px]">
                    <div>
                        <div className="flex items-center justify-start gap-[37px]">
                            <img src="src/assets/exerciseImage1.png" className="w-[62px] h-[62px]" alt="Image" />
                            <h2 className="text-[24px] font-normal leading-[36px]">Weight Loss Training</h2>
                        </div>
                        <p className="text-[14px] font-normal leading-[28px] mt-[17px] text-[#535353] tracking-wider">Personalized sessions for fast weight loss. Expert coaching & tailored nutrition. Transform your body and boost energy.</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-start gap-[37px]">
                            <img src="src/assets/exerciseImage2.png" className="w-[62px] h-[62px]" alt="Image" />
                            <h2 className="text-[24px] font-normal leading-[36px]">Strength Training</h2>
                        </div>
                        <p className="text-[14px] font-normal leading-[28px] mt-[17px] text-[#535353] tracking-wider">Personalized strength training for powerful muscle gains. Expert coaching and tailored workouts to boost endurance. Transform your body with targeted, science-backed strength sessions.</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-start gap-[37px]">
                            <img src="src/assets/exerciseImage3.png" className="w-[62px] h-[62px]" alt="Image" />
                            <h2 className="text-[24px] font-normal leading-[36px]">Rehabilitation Program</h2>
                        </div>
                        <p className="text-[14px] font-normal leading-[28px] mt-[17px] text-[#535353] tracking-wider">Our rehab program offers personalized recovery solutions that blend advanced therapy techniques with compassionate care to restore strength and mobility. Expert therapists guide you through each step, ensuring a safe, effective journey back to an active lifestyle and renewed independence.
                        </p>
                    </div>
                </div>
            </div>

            {/* Some details */}
            <div className="h-[356px] bg-[#7cba20] pt-[52px]">
                <div className="max-w-[1140px] m-auto grid grid-cols-3 gap-[75px] text-[#fff] px-[47px]">
                    <div>
                        <img src="src/assets/matrixImage.jpg" className="w-[235px] h-[60px] " alt="Image" />
                        <p className="text-[14px] font-normal leading-[28px] tracking-wider">Matrix (USA) – Cutting-edge strength and cardio equipment designed for peak performance, durability, and smooth functionality.</p>
                    </div>
                    <div>
                        <img src="src/assets/soleImage.png" className="w-[235px] h-[60px] " alt="Image" />
                        <p className="text-[14px] font-normal leading-[28px] tracking-wider">Sole Fitness (USA) – Premium treadmills, ellipticals, and bikes known for their superior cushioning, quiet operation, and advanced technology.</p>
                    </div>
                    <div>
                        <img src="src/assets/fittechImage.png" className="w-[235px] h-[60px] " alt="Image" />
                        <p className="text-[14px] font-normal leading-[28px] tracking-wider">Fittech (Portugal) – Precision-engineered machines that offer unmatched biomechanics, ensuring maximum muscle engagement and injury prevention.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}