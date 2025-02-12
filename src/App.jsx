import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import backgroundVideo from "/src/assets/7234993-uhd_3840_2160_30fps.mp4";

const App = () => {
  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="relative z-10 bg-[#FFFFFF] bg-opacity-80">
        <Header />
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
