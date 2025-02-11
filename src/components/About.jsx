import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaNode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiNextdotjs,
  SiNetlify,
  SiMongodb,
  SiSocketdotio,
  SiPostman,
  SiGraphql,
  SiRedux,
  SiJsonwebtokens,
  SiRender,
  SiPython,
  SiJupyter,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiHuggingface,
  SiApachehadoop,
  SiApachespark,
  SiTableau,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { IoLogoNpm, IoLogoVercel } from "react-icons/io5";


const About = () => {
  return (
    <div id="about" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          About Me
        </h1>

        {/* About Me Section */}
        <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
  I’m <span className="font-bold text-[#fe5617]">Monika Jothi</span>, a passionate 
  <span className="font-bold text-[#fe5617]"> Full Stack Developer</span> skilled in 
  building scalable <span className="font-bold text-[#fe5617]">MERN stack</span> applications, 
  AI-driven solutions, and data-driven systems. With expertise in 
  <span className="font-bold text-[#fe5617]"> Machine Learning (ML), Deep Learning (DL), and Data Analysis</span>,  
  I have worked on real-world projects that leverage AI for intelligent decision-making.  
  Currently, I'm a pre-final year <span className="font-bold text-[#fe5617]">
  B.Tech Artificial Intelligence & Data Science</span> student,  
  continuously exploring new technologies to build impactful solutions.
</p>


        {/* Skills Section */}
        <div className="space-y-8">
  <h2 className="text-2xl font-bold text-[#fe5617] text-center">
    My Skills
  </h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    {/* Full Stack Skills */}
    <div className="flex flex-col items-center space-y-2">
      <FaHtml5 size={40} className="text-[#e34c26]" />
      <span className="font-bold">HTML5</span>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <FaCss3Alt size={40} className="text-[#264de4]" />
      <span className="font-bold">CSS3</span>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <FaJsSquare size={40} className="text-[#f7df1e]" />
      <span className="font-bold">JavaScript</span>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <SiTailwindcss size={40} className="text-[#38bdf8]" />
      <span className="font-bold">Tailwind CSS</span>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <FaReact size={40} className="text-[#61dbfb]" />
      <span className="font-bold">React.js</span>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <FaNode size={40} className="text-[#68a063]" />
      <span className="font-bold">Node.js</span>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <SiExpress size={40} className="text-[#000]" />
      <span className="font-bold">Express.js</span>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <SiMongodb size={40} className="text-[#47a248]" />
      <span className="font-bold">MongoDB</span>
    </div>
    {/* Data Science Skills */}
    <div className="flex flex-col items-center space-y-2">
      <SiPython size={40} className="text-[#3776ab]" />
      <span className="font-bold">Python</span>
    </div>
    <div className="flex flex-col items-center space-y-2">
  <SiTensorflow size={40} className="text-[#ff6f00]" />
  <span className="font-bold">TensorFlow</span>
</div>
    <div className="flex flex-col items-center space-y-2">
      <FaGitAlt size={40} className="text-[#f05032]" />
      <span className="font-bold">Git</span>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <SiJupyter size={40} className="text-[#f37626]" />
      <span className="font-bold">Jupyter</span>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <SiNumpy size={40} className="text-[#013243]" />
      <span className="font-bold">NumPy</span>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <SiPandas size={40} className="text-[#150c5c]" />
      <span className="font-bold">Pandas</span>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <FaGithub size={40} className="text-black" />
      <span className="font-bold">GitHub</span>
    </div>
    <div className="flex flex-col items-center space-y-2">
      <FaFigma size={40} className="text-[#F24E1E]" />
      <span className="font-bold">Figma</span>
    </div>
  </div>

        </div>
      </div>
    </div>
  );
};

export default About;
