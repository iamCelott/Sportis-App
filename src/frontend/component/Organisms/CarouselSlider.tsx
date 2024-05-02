import Button from "../Atoms/Button";
import { useEffect, useState } from "react";

const CarouselSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images: string[] = [
    "/src/frontend/assets/carousel/hero1.jpg",
    "/src/frontend/assets/carousel/hero2.jpg",
    "/src/frontend/assets/carousel/hero3.jpg",
    "/src/frontend/assets/carousel/hero4.jpg",
  ];

  const nextImg = () => {
    if (currentIndex !== 3) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevImg = () => {
    if (currentIndex !== 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(3);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="bg-gray-200 w-full flex relative overflow-hidden">
      <div className="w-full h-[250px] lg:h-[300px] bg-red-400 mx-auto flex overflow-hidden relative">
        <Button
          type="button"
          onClick={prevImg}
          className="absolute left-5 top-1/2 z-30 rounded-full hover:bg-slate-200"
          variant="secondary"
        >
          &lt;
        </Button>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`transition-transform duration-300 w-full object-cover flex-shrink-0`}
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          />
        ))}
        <Button
          type="button"
          onClick={nextImg}
          className="absolute right-5 top-1/2 z-30 rounded-full hover:bg-slate-200"
          variant="secondary"
        >
          &gt;
        </Button>
      </div>
    </div>
  );
};

export default CarouselSlider;
