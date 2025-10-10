// import { useEffect, useState } from "react"

// export default function (props) {
//     let [currentIndex, setCurrentIndex] = useState(0)
//     let images = props.images.map((image, index) => {
//         return (
//             <img src={image} key={index} className={`w-[320px] h-[485px] object-cover ${index === currentIndex && "border-12 border-[#79b420]"}`} alt="Trainer" />
//         )
//     })
//     const visibleImages = Math.floor(window.innerWidth / 320); // how many images fit in viewport
    


//     useEffect(() => {
//         let interval = setInterval(() => {
//             setCurrentIndex(prevIndex => (prevIndex < currentIndex+1 ? prevIndex + 1 : 0)); // loop back to start

//             // let slider = document.querySelector('#slider')
//             // slider.style.transform = `translateX(-320px)`
//         }, 2000);

//         return () => clearInterval(interval);
//     })

//     return (
//         <>
//             <div id="slider" className="slider flex -mt-[170px] -translate-x-30 transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 320}px)` }} >
//                 {images}
//             </div>
//         </>
//     )
// }




import { useEffect, useRef } from "react";

export default function InfiniteSlider({ images }) {
  const sliderRef = useRef(null);

  console.log(sliderRef.current);
  
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const imageWidth = 320; // width of one image
    const totalWidth = imageWidth * images.length;

    // duplicate images for seamless looping
    slider.innerHTML += slider.innerHTML;

    const interval = setInterval(() => {
      scrollAmount += 1; // move 1px per tick
      if (scrollAmount >= totalWidth) scrollAmount = 0; // loop back
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    }, 10); // smaller interval for smooth movement

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="overflow-hidden w-full h-[485px]">
      <div
        ref={sliderRef}
        className="flex"
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`slider-${i}`}
            className="w-[320px] h-[485px] object-cover"
          />
        ))}
      </div>
    </div>
  );
}
