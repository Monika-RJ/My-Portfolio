import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import profileImg from "../assets/InShot_20250211_114939014.png";

const Home = () => {
  return (
    <div id="home" className="bg-[#FFFFFF]">
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center  min-h-screen">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            I’m <span className="text-[#fe5617]">Monika Jothi</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2">
            <span className="text-[#fe5617]">I’m a</span>
            <Typewriter
              options={{
                strings: [
                  "Pre-Final Year Student.",
                  "Aspiring AI Engineer.",
                  "Full Stack Developer.",
                  "Machine Learning Enthusiast.",
                  "Data Analyst.",
                  "Passionate Problem Solver.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>
          {/* About Me */}
          <p className="text-lg md:text-xl text-gray-700 font-medium">
  A passionate MERN stack developer with hands-on experience in building scalable web applications. 
  Enthusiastic about AI, Machine Learning, and Data Analysis, I enjoy solving real-world problems 
  and sharing knowledge through tutoring and content creation.
</p>


          {/* Contact Information */}
          <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold ">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#fe5617]" size={20} />
              <span>Salem</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#fe5617]" size={20} />
              <span>9788583223</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#fe5617]" size={20} />
              <span>monikajothi07@gmail.com</span>
            </div>
          </div>
          {/* Button */}
          <div className="bg-[#fe5617] px-5 py-2 rounded-2xl font-bold">
  <a
    href="/MONIKA_R_J_Common_Resume.pdf"
    download="MONIKA_R_J_Common_Resume.pdf"
    className="text-white"
  >
    Download CV
  </a>
</div>

        </div>

        {/* Right Section */}
        <div className="order-1 lg:order-2 flex justify-end items-center">
        <img
  className="w-[100%] rounded-[90px] -mt-55 lg:-mt-50"
  src={profileImg}
  alt="Profile Picture"
/>
        </div>
      </div>
    </div>
  );
};

export default Home;
