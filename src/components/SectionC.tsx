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
            <img src={moon} alt="Logo" width="150" height="150" className="" />
          </div>
          <div className="relative flex mt-10">
            <div className="animate-cloud">
              <img
                src={cloud}
                alt="Logo"
                width="250"
                height="200"
                className="transform -scale-x-100 mt-10"
              />
            </div>
            <div className="animate-clouda">
              <img
                src={cloud}
                alt="Logo"
                width="400"
                height="200"
                className=""
              />
            </div>
          </div>
          <div className="absolute justify-center mt-10 fade-in">
            <img src={text} alt="Logo" className="w-80 h-auto" />
          </div>
        </div>
        <div className="fade-in">
          <img src={dog} alt="Logo" width="120" height="120" className="" />
        </div>
     
      </div>
    </div>
  );
};

export default SectionC;
