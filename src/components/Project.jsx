const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* stress Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Stress Identification System
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            Developed a stress identification model inindividuals using Machine
 Learning Algorithms like randomforest, decision tree, SVM,and Naive
 Bayes in tamil and telugu language.
            </p>
            <a
              href="https://stress-identification-system.streamlit.app/"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* e commerce Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              E - commerce platform
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            Designed and developed a comprehensive e-commerce platform using
 the MERN stack,incorporating an innovative eco-friendly products
 section displayed with a distinct green label to promote sustainable
 purchasing choices.
            </p>
            <a
              href="https://github.com/Monika-RJ/e-commerce-platform"
              className="text-[#fe5617] text-center font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-col gap-10">
          {/* Ingredients Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
            Ingredients Safety Checker
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            Built an AI-driven Ingredient Safety Checker for analyzing food
 product ingredients. Use OCR and NLP for real-time ingredient extraction, risk evaluation
 and personalized recommendations.
            </p>
            <a
              href="https://food-safety-checker.vercel.app/"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

         
        </div>

        {/* Project 3 and 4 in one row */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          {/* plant Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Plant Disease Prediction
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            Developed a deep learning model for accurate plant disease prediction
 from leaves images and integrated it into a mobile app using Flutter
 and Flask for seamless user interaction.
            </p>
            <a
              href="https://github.com/Monika-RJ/plant-app"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              View Code
            </a>
          </div>

          {/* brain Project */}
          <div className="w-full md:w-1/2 flex flex-col  bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Brain Haemorrhage Detection
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            Developed a deep learning model for detecting the Brain
 haemorrhage disorder using ResNet, InceptionV3, EfficientNet,
 Customized CNN, and DenseNet architectures.
            </p>
            <a
              href="https://github.com/Monika-RJ/Brain_haemorrhage_detection"
              className="text-center text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 5 and 6 in one row */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          {/* Document Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Document Classification system
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            This project is a text classification system using Logistic Regression and TF-IDF Vectorization to categorize 
            text. It features a React frontend and a Flask backend
            for real-time predictions.
            </p>
            <a
              href="https://docclassification.streamlit.app/"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* Turf */}
          <div className="w-full md:w-1/2 flex flex-col  bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Turf Booking System
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            Developed an AI-powered turf booking app with real-time availability
 and secure payments.Integrated weather-check functionality and personalized
 recommendations using Flutter and Node.js.
            </p>
            <a
              href="https://github.com/arsath-02/turf_booking_app"
              className="text-center text-[#fe5617] font-bold text-lg hover:underline"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
