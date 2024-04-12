import wall from "../assets/Fencenight.svg";
import bone from "../assets/Bone (2).svg";
import how from "../assets/How to buy.svg";
import "../style/SectionD.css";

const SectionE = () => {
  return (
    <div className="justify-center mt-[20rem] ">
      <div>
        <div className="flex justify-center items-center gap-52 absolute left-[26rem] bottom-[70rem] ">
          <div className="rotate-12 transform origin-center fade-in">
            <img
              src={bone}
              alt="Logo"
              width="100"
              height="100"
              className="fade-in"
            />
          </div>
          <div>
            <img
              src={how}
              alt="Logo"
              width="400"
              height="400"
              className="fade-in"
            />
          </div>
          <div className="-rotate-45 transform origin-center">
            <img
              src={bone}
              alt="Logo"
              width="100"
              height="100"
              className="fade-in"
            />
          </div>
        </div>
        <div
          className="absolute left-[36rem] bottom-[44rem] fade-in border-[50px] rounded"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 255, 0.5), rgba(128, 128, 128, 0.5))",
            borderImage:
              "linear-gradient(to right, rgba(0, 0, 255, 0.5), rgba(128, 128, 128, 0.5)) 1",
          }}
        >
          <iframe
            width="590"
            height="340"
            src="https://www.youtube.com/embed/aaOa61tdeL4"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
        <div className="absolute left-[55rem] bottom-[20rem] rotate-45 fade-in">
          <img src={bone} alt="Logo" width="100" height="100" className="" />
        </div>
        <div className="flex justify-center">
          <img src={wall} alt="Logo" className="w-screen" />
        </div>
      </div>
    </div>
  );
};

export default SectionE;
