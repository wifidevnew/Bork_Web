import wall from "../assets/Fencenight.svg";
import bone from "../assets/Bone (2).svg";
import how from "../assets/How to buy.svg";
import "../style/SectionD.css";

const SectionE = () => {
  return (
    <div className="justify-center xl:mt-[20rem] mt-[10rem]">
      <div>
        <div className="flex justify-center items-center xl:gap-52 absolute xl:left-[26rem] xl:bottom-[70rem] left-[5rem] bottom-[20rem] gap-12">
          <div className="rotate-12 transform origin-center fade-in">
            <img
              src={bone}
              alt="Logo"
              className="fade-in w-10 h-auto"
            />
          </div>
          <div>
            <img
              src={how}
              alt="Logo"
              className="fade-in w-52 h-auto"
            />
          </div>
          <div className="-rotate-45 transform origin-center">
            <img
              src={bone}
              alt="Logo"
              className="fade-in w-10 h-auto"
            />
          </div>
        </div>
        <div
          className="absolute xl:left-[36rem] xl:bottom-[44rem] fade-in xl:border-[50px] rounded left-[8rem] bottom-[10rem]"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 255, 0.5), rgba(128, 128, 128, 0.5))",
            borderImage:
              "linear-gradient(to right, rgba(0, 0, 255, 0.5), rgba(128, 128, 128, 0.5)) 1",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/aaOa61tdeL4"
            title="YouTube video"
            allowFullScreen
            className="w-72 h-auto"
          ></iframe>
        </div>
        <div className="absolute xl:left-[55rem] xl:bottom-[20rem] rotate-45 fade-in bottom-[3rem] left-[14rem]">
          <img src={bone} alt="Logo" className="w-10 h-auto" />
        </div>
        <div className="flex justify-center">
          <img src={wall} alt="Logo" className="w-screen" />
        </div>
      </div>
    </div>
  );
};

export default SectionE;
