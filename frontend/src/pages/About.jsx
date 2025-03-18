import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="text-center text-3xl pt-10 text-gray-700">
        <p>
          ABOUT <span className="text-primary font-bold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12 px-6 md:px-20">
        <img
          className="w-full md:max-w-[360px] rounded-lg shadow-lg"
          src={assets.about_image}
          alt="about_image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-base text-gray-700">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you are booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <b className="text-gray-800 text-lg">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="text-2xl my-8 text-center">
        <p>
          WHY <span className="text-primary font-bold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-10 px-6 md:px-20 gap-6">
        <div className="border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-700 cursor-pointer rounded-lg shadow-md">
          <b>EFFICIENCY:</b>
          <p>
            Streamline Appointment Scheduling That Fits Into Your Busy Life.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-700 cursor-pointer rounded-lg shadow-md">
          <b>CONVENIENCE:</b>
          <p>
            Access To A Network Of Trusted Healthcare Professionals In Your
            Area.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-700 cursor-pointer rounded-lg shadow-md">
          <b>PERSONALIZATION:</b>
          <p>
            Tailored Recommendations and Reminders To Help You Stay On Top Of
            Your Health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
