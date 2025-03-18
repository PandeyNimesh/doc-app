import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row flex-wrap bg-primary rounded-lg px-6 sm:px-8 md:px-10 lg:px-20 xl:px-24">
      {/* left section */}
      <div className="sm:w-full md:w-1/2 lg:w-2/5 xl:w-2/5 flex flex-col items-start justify-center gap-4 py-10 m-auto sm:py-8 md:py-[10vw] lg:py-[8vw] xl:py-[6vw] md:mb-[-30px]">
        <p className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-white font-semibold leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center gap-3 text-white text-sm sm:text-base md:text-base lg:text-lg xl:text-lg font-light">
          <img
            className="w-28 sm:w-24 md:w-28 lg:w-32 xl:w-36"
            src={assets.group_profiles}
            alt="group_profiles"
          />
          <p>
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" /> schedule your appointment
            hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-8 py-3 sm:px-6 sm:py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 xl:px-12 xl:py-5 rounded-full text-gray-600 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Book Appointment
          <img className="w-3 sm:w-2 md:w-3 lg:w-4 xl:w-5" src={assets.arrow_icon} alt="arrow_icon" />
        </a>
      </div>

      {/* right section */}
      <div className="sm:w-full md:w-1/2 lg:w-3/5 xl:w-3/5 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt="header_img"
        />
      </div>
    </div>
  );
};

export default Header;
