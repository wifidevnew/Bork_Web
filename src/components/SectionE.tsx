import wall from "../assets/Fencenight.svg";
import bone from "../assets/Bone (2).svg";
import how from "../assets/How to buy.svg";
import "../style/SectionD.css";
import { useInView } from "react-intersection-observer";

const SectionE = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div className="justify-center xl:mt-[18rem] mt-[6rem]">
      <div ref={ref}>
        <div>
          <div
            className={`flex w-full justify-center items-center  absolute 2xl:bottom-[106vh]`}
          >
            {/* <div className="rotate-12 transform origin-center fade-in">
              <img
                src={bone}
                alt="Logo"
                className="fade-in w-5 xl:w-16 h-auto sm:w-10 lg:w-14 2xl:w-12"
              />
            </div> */}
            <div>
              <img
                src={how}
                alt="Logo"
                className={`fade-in w-40 xl:w-80 h-auto sm:w-48 lg:w-60 ${inView ? 'fade-in' : ''}`}
              />
            </div>
            {/* <div className="-rotate-45 transform origin-center">
              <img
                src={bone}
                alt="Logo"
                className="fade-in w-5 xl:w-16 h-auto sm:w-10 lg:w-14 2xl:w-12"
              />
            </div> */}
          </div>
          <div className="w-full absolute flex flex-row items-center justify-center gap-32 2xl:bottom-[40vh]">
            <div className="rotate-12 transform origin-center fade-in">
              <img
                src={bone}
                alt="Logo"
                className={` cursor-pointer w-5 xl:w-16 h-auto sm:w-10 lg:w-14 2xl:w-12 ${inView ? 'rotate-bone' : ''}`}
              />
            </div>
            <div
              className={` 2xl:left-[41rem] 2xl:bottom-[40rem] xl:left-[36rem] xl:bottom-[34rem] fade-in xl:border-[50px] sm:left-[12rem] sm:bottom-[12rem] md:left-[14rem] md:bottom-[15rem] lg:bottom-[17rem] lg:left-[16rem] border-[5px] rounded left-[5rem] bottom-[7rem] animate ${
                inView ? "fade-in" : ""
              }`}
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
                className="w-48 h-28 xl:w-[30rem] xl:h-[300px] md:w-[20rem] md:h-[200px] lg:w-[30rem] lg:h-[300px]"
              ></iframe>
            </div>
            <div className="-rotate-45 transform origin-center">
              <img
                src={bone}
                alt="Logo"
                className={`cursor-pointer w-5 xl:w-16 h-auto sm:w-10 lg:w-14 2xl:w-12 ${inView ? 'rotate-bone' : ''}`}
              />
            </div>
          </div>
          <div
            className={`w-full absolute flex justify-center bottom-[20vh]`}
          >
            <img
              src={bone}
              alt="Logo"
              className={`w-5 xl:w-16 h-auto sm:w-10 lg:w-14 2xl:w-12  rotate-bone cursor-pointer`}
            />
          </div>
          <div className="flex justify-center">
            <img src={wall} alt="Logo" className="w-screen" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionE;
