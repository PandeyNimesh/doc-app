import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${assets.background_image})` }}>
      <div className="bg-white bg-opacity-90 min-h-screen flex flex-col items-center justify-center p-3">
        <div className="text-center text-3xl pt-4 text-gray-700"> {/* Adjusted padding-top from 10 to 4 */}
          <p>
            CONTACT <span className="text-primary font-bold">US</span>
          </p>
        </div>

        <div className="flex flex-col justify-center md:flex-row gap-10 text-sm max-w-4xl mx-auto bg-gray-100 p-10 rounded-lg shadow-lg">
          <img
            className="w-full md:max-w-[360px] rounded-lg shadow-md"
            src={assets.contact_image}
            alt="contact_image"
          />

          <div className="flex flex-col justify-center items-start gap-6">
            <p className="font-semibold text-lg text-gray-800">OUR OFFICE</p>
            <p className="text-gray-700">
              54709 Willms Station <br />
              Suite 350, Washington, USA
            </p>
            <p className="text-gray-700">
              Tel: (123) 456-7890 <br />
              Email: support@doctorhub.com
            </p>
            <p className="font-semibold text-lg text-gray-800">
              CAREERS AT PRESCRIPTO
            </p>
            <p className="text-gray-700">
              Learn more about our teams and job openings.
            </p>
            <button className="bg-gray-800 text-white px-8 py-4 text-sm hover:bg-gray-700 transition-all duration-500 rounded-lg shadow-md">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
