export default function () {

    return (
        <>
            <main>
                {/* Hero container */}
                <div className="relative h-auto bg-[url(src/assets/hero-image.png)] bg-[position:center_57%] bg-no-repeat bg-cover w-screen pt-[47px] ">
                    <div className="max-w-[1140px] m-auto">

                        {/* Hero title */}
                        <div className="font-[Arial] relative top-[105px] w-full flex flex-col items-center justify-center ">
                            <h1 className="text-[45px] font-[200] text-center leading-[54px] mt-[90px] mb-[36px]">
                                Ready For Your Ultimate Fitness Experience Like Never Before!
                            </h1>
                            <p>Strength Training, Cardio, MMA and Much More.</p>
                        </div>

                        {/* Hero banners */}
                        <div className="relative z-20 mt-[10px] pt-[125px] mb-10  grid grid-cols-3  ">
                            <div className="bg-[#262626] h-[440px] pt-[52px] pb-[20px] px-[37px]">
                                <img src="src/assets/mma-classes.png" alt="image" />
                                <h2 className="leading-[29px] mt-[27px] text-[24px] font-[400]">Weekly MMA CLasses</h2>
                                <p className="text-[14px] mt-[20px] leading-[28px] font-[400] font-[sans-serif] ">Train like a champion with our Weekly MMA Classes at Body Evolution, led by National Champions who bring elite-level experience and expertise to every session. Whether you’re a beginner looking to build a strong foundation or an advanced fighter aiming to sharpen your skills.</p>
                            </div>
                            <div className="bg-[#ef8701] h-[490px] pt-[50px] pb-[100px] px-[37px]">
                                <img src="src/assets/certificate-image.png" alt="image" />
                                <h2 className="leading-[29px] mt-[27px] text-[24px] font-[400]">Certified Fitness Trainers</h2>
                                <p className="text-[14px] mt-[20px] leading-[28px] font-[400] font-[sans-serif] ">Our trainers specialize in various disciplines, including strength training, weight loss, functional fitness, bodybuilding, and rehabilitation exercises. Whether you’re a beginner or an advanced athlete, our trainers provide personalized workout plans tailored to your needs, ensuring safe, effective, and result-driven training sessions.</p>
                            </div>
                            <div className="bg-[#7cba20] h-[370px] pt-[52px] pb-[71px] px-[37px]">
                                <img src="src/assets/top-brands.png" alt="image" />
                                <h2 className="leading-[29px] mt-[27px] text-[24px] font-[400]">Top Fitness Brands</h2>
                                <p className="text-[14px] mt-[20px] leading-[28px] font-[400] font-[sans-serif] ">At Body Evolution, we believe in providing the best training experience by equipping our facility with top-of-the-line fitness machines from globally renowned brands.</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* About Container */}
                <div className="bg-white relative z-10 -mt-[220px] pt-[300px] px-[115px] pb-[50px]">
                    <div className="max-w-[1140px] m-auto flex justify-between">

                        <div className="font-[Arial]">
                            <p className="text-[rgb(124,186,32)] text-[12px] font-semibold">WELCOME TO BODY EVOLUTION</p>
                            <h1 className="font-[400] leading-[79px] -mt-[3px] text-[72px] text-[#262626] w-[400px]">About <strong>Body Evolution</strong></h1>
                            <h3 className="text-[16px] mt-[35px] font-semibold w-[550px] text-[#535353] leading-[28px]">Equipped with state of the art all American and Portuguese equipment supervised by certified professionals</h3>
                            <p className="text-[14px] mt-[28px] font-[sans-serif] font-[400] text-[#535353] w-[550px] leading-[28px]">
                                Body Evolution is a state-of-the-art fitness facility designed to redefine the gym experience with cutting-edge American and Portuguese equipment. Launched with the vision of providing a high-end fitness destination, Body Evolution offers a premium workout environment that blends technology, expertise, and comfort.
                                Located in the heart of Bahadurabad, Body Evolution stands out with its commitment to safety, security, and inclusivity. Understanding the diverse fitness needs of the community, the gym offers dedicated ladies-only hours, ensuring a comfortable and private space for women to train with confidence.
                                With certified trainers always on-site, members receive professional guidance tailored to their fitness goals, whether it’s strength training, weight loss, endurance building, or general wellness. The facility is equipped with advanced fitness machines, free weights, and functional training areas, ensuring a holistic approach to fitness.
                                At Body Evolution, we believe that fitness is a lifestyle, and we are dedicated to providing a space where members feel motivated, supported, and empowered on their journey to a healthier and stronger self.</p>
                            <button className="bg-[rgb(124,186,32)] rounded-[22px] cursor-pointer mt-[50px] h-[43px] w-[190px] border text-white">Join Now</button>
                        </div>
                        <div className="mr-10 pt-8">
                            <img src="src/assets/about-image.png" className="max-w-[150%] w-[130%] -rotate-10 " alt="gym bro" />
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

