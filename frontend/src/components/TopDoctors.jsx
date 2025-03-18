import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const scrollRef = useRef(null);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 px-4 sm:px-6 lg:px-12">
      <h1 className="text-3xl font-medium text-center">Top Doctors to Book</h1>
      <p className="w-full max-w-md text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div
        ref={scrollRef}
        className="w-full flex overflow-x-auto gap-6 pt-5 scrollbar-hide"
      >
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-gray-500 transition-all duration-300 min-w-[250px]"
            key={index}
          >
            <img className="w-full h-48 object-cover bg-blue-50" src={item.image} alt="doctor" />
            <div className="p-4 text-center">
              <div className={`flex items-center justify-center gap-2 text-sm ${item.available ? "text-green-500" : "text-gray-500"}`}>
                <p className={`w-2 h-2 ${item.available ? "bg-green-500" : "bg-gray-500"} rounded-full`}></p>
                <p>{item.available ? "Available" : "Unavailable"}</p>
              </div>
              <p className="text-gray-900 text-lg font-medium mt-2">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 hover:bg-blue-100 transition-all"
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;