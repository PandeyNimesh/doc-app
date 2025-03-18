import { useEffect, useRef, useState } from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrame;
    let speed = 1; // Adjust scrolling speed

    const moveScroll = () => {
      if (!isPaused && scrollContainer && window.innerWidth < 1024) { // Stop animation on large screens
        scrollContainer.scrollLeft += speed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(moveScroll);
    };

    animationFrame = requestAnimationFrame(moveScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800 relative" id="speciality">
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>
      <div
        ref={scrollRef}
        className="flex sm:justify-center gap-3 pt-5 w-full overflow-x-auto scrollbar-hide relative no-scrollbar"
        onMouseEnter={() => {
          setIsPaused(true);
        }}
        onMouseLeave={() => {
          setIsPaused(false);
        }}
      >
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 transition-all duration-500 min-w-[100px] sm:min-w-[130px] md:min-w-[160px]"
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <img className="w-16 sm:w-24 mb-2 rounded-full hover:shadow-lg hover:shadow-gray-500 hover:translate-y-[-5px]" src={item.image} alt="speciality_img" />
            <p className="text-">{item.speciality}</p>
          </Link>
        ))}
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default SpecialityMenu;
