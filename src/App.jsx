import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero-Section";
import Testimonials from "./Testimonials";
import Slider from "./components/Slider";

export default function () {
    let trainerImages = [
        "src/assets/sliding-images/slider-image1.jpg",
        "src/assets/sliding-images/slider-image1.jpg",
        "src/assets/sliding-images/slider-image1.jpg",
        "src/assets/sliding-images/slider-image1.jpg",
        "src/assets/sliding-images/slider-image1.jpg",
        "src/assets/sliding-images/slider-image1.jpg",
        "src/assets/sliding-images/slider-image2.jpg",
        "src/assets/sliding-images/slider-image3.jpeg"
    ]
    return (
        <>
            <Navbar />
            <main className="pt-[163px] pb-[200px] overflow-x-hidden">
                <HeroSection />
                <Testimonials />
                <Slider images={trainerImages}/>
            </main>
        </>
    )
}

// Home page: Navbar >> Hero section >> Testimonials >> Services >> Gallery >> Promotions >> Footer
