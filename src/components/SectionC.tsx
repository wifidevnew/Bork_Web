import moon from "../assets/MoonNight.svg";
import cloud from "../assets/Night cloud.svg";
import dog from "../assets/BorkDogsmall.svg";
import text from "../assets/Borkenomics heading.svg";
import "../style/SectionC.css";

const SectionC = () => {
  return (
    <div className="xl:mt-[10rem] mt-20 justify-center flex">
      <div className="">
        <div className="flex justify-center">
          <div className="absolute mt-16 fade-in">
            <img src={moon} alt="Logo" className="w-32 xl:w-40 sm:w-36 h-auto md:w-36" />
          </div>
          <div className="relative flex mt-10 md:mt-16">
            <div className="animate-cloud">
              <img
                src={cloud}
                alt="Logo"
                className="transform -scale-x-100 mt-10 w-36 xl:w-52 h-auto md:w-40"
              />
            </div>
            <div className="animate-clouda">
              <img
                src={cloud}
                alt="Logo"
                className="w-60 xl:w-80 h-auto"
              />
            </div>
          </div>
          <div className="absolute justify-center mt-10 fade-in">
            <img src={text} alt="Logo" className="w-72 xl:w-96 sm:w-80 h-auto md:w-96" />
          </div>
        </div>
        <div className="fade-in">
          <img src={dog} alt="Logo" className="w-20 xl:w-36 h-auto mt-10 md:mt-20 md:w-28 ms-6 " />
        </div>
     
      </div>
    </div>
  );
};

export default SectionC;
