import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#ca03fc] text-white py-6">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-2">
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} Monika. All rights reserved.
        </p>
        <p className="text-sm md:text-base font-medium">
          Made with ❤️ by{" "}
          <a href="#" className="underline hover:text-[#ffffff]">
            Monika
          </a>
        </p>
        <div className="flex justify-center gap-4 mt-2">
        <a
            href="https://github.com/Monika-RJ"
            className="hover:text-[#ca03fc]"
          >
            <FaGithub size={29} />
          </a>
          <a
            href="https://www.linkedin.com/in/monika-r-j/"
            className="hover:text-[#ca03fc]"
          >
            <FaLinkedin size={29} />
          </a>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
