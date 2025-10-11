import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero-Section";
import Testimonials from "./Testimonials";
import Slider from "./components/Slider";
import trainerImages from "./data/trainerImages";
import galleryImages from "./data/gallery";
import Services from "./components/Services";
import Promotions from "./components/Promotions";
import Footer from "./components/Footer";

export default function () {

    return (
        <>
            <Navbar />
            <main className="pt-[163px] pb-[50px] overflow-x-hidden">
                <HeroSection />
                <Testimonials />
                <Slider images={trainerImages} />
                <Services />
                <div>
                    <h1 className="text-[40px] font-bold text-[#535353] leading-[80px] ml-[30px] mb-[220px]">Gallery</h1>
                    <Slider images={galleryImages} />
                </div>
                <Promotions />
            </main>
            <Footer />
        </>
    )
}

// Home page: Navbar >> Hero section >> Testimonials >> Services >> Gallery >> Promotions >> Footer
