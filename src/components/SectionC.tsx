import moon from "../assets/MoonNight.svg";
import cloud from "../assets/Night cloud.svg";
import dog from "../assets/BorkDogsmall.svg";
import text from "../assets/Borkenomics heading.svg";
import "../style/SectionC.css";

const SectionC = () => {
  return (
    <div className="mt-20 justify-center flex">
      <div className="">
        <div className="flex justify-center">
          <div className="absolute mt-16 fade-in">
            <img src={moon} alt="Logo" className="w-32 h-auto" />
          </div>
          <div className="relative flex mt-10">
            <div className="animate-cloud">
              <img
                src={cloud}
                alt="Logo"
                className="transform -scale-x-100 mt-10 w-36 h-auto"
              />
            </div>
            <div className="animate-clouda">
              <img
                src={cloud}
                alt="Logo"
                className="w-60 h-auto"
              />
            </div>
          </div>
          <div className="absolute justify-center mt-10 fade-in">
            <img src={text} alt="Logo" className="w-72 h-auto" />
          </div>
        </div>
        <div className="fade-in">
          <img src={dog} alt="Logo" className="w-20 h-auto mt-10" />
        </div>
     
      </div>
    </div>
  );
};

export default SectionC;
