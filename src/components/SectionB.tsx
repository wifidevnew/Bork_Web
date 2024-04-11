import text1 from "../assets/aboutsafemooncolour.svg";
import text2 from "../assets/BorkParagraphTurqoise.svg";
import cloud from "../assets/cloud.svg";
import "../style/SectionB.css"

const SectionB = () => {
  return (
    <div className="mt-20 justify-center flex">
      <div>
        <div className="flex justify-center items-center">
          <div className="absolute fade-in">
            <img src={text1} alt="Logo" width="300" height="550" className="" />
          </div>
          <div className="relative  left-[25rem] animate-clouda">
            <img src={cloud} alt="Logo" width="300" height="300" className="" />
          </div>
        </div>
        <div className="">
          <div className="fade-in">
            <img
              src={text2}
              alt="Logo"
              width="1000"
              height="1000"
              className=""
            />
          </div>
          <div className="absolute top-[89rem] left-[25rem] transform -translate-x-1/2 animate-cloud">
            <img src={cloud} alt="Logo" width="300" height="300" className="transform -scale-x-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionB;
