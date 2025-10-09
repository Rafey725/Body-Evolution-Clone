import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero-Section";

export default function () {
    return (
        <>
            <Navbar />
            <main className="pt-[163px] overflow-x-hidden">
                <HeroSection />
            </main>
        </>
    )
}

// Home page: Navbar >> Hero section >> Testimonials >> Services >> Gallery >> Promotions >> Footer
