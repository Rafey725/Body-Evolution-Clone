import { useEffect, useRef, useState } from "react"

export default function (props) {
  let [currentIndex, setCurrentIndex] = useState(2)
  let intervalRef = useRef(null)
  let slidesRef = useRef(null)
  let allImages = [...props.images, ...props.images]
  let imageSlides = allImages.map((image, index) => {
    return (
      <img src={image} key={index} className={`w-[320px] h-[485px] object-cover ${index === currentIndex && "border-12 border-[#79b420] scale-y-103"}`} alt="Trainer" />
    )
  })

  // Start the interval
  function startInterval() {
    if (intervalRef.current) return

    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => prevIndex + 1)
    }, 2000);
  }

  // Pause the interval
  function pauseInterval() {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }


  useEffect(() => {
    startInterval()

    return () => clearInterval(intervalRef.current);
  }, [])

  useEffect(() => {
    if (currentIndex > props.images.length) {
      pauseInterval()
      slidesRef.current.style.transition = 'none'

      slidesRef.current.style.transform = 'none'

      void slidesRef.current.offsetWidth;

      setCurrentIndex(2)
    }
    else {
      startInterval()
      slidesRef.current.style.transition = "transform 1s ease-in-out"
      slidesRef.current.style.transform = `translateX(-${currentIndex * 320}px)`
    }
  }, [currentIndex])

  return (
    <>
      <div className="translate-x-[38%]">
        <div ref={slidesRef} className="flex -mt-[170px] transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex <= props.images.length && currentIndex * 320}px)` }} >
          {imageSlides}
        </div>
      </div>
    </>
  )
}