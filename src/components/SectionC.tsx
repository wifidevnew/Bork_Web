import moon from "../assets/MoonNight.svg";
import cloud from "../assets/Night cloud.svg";
import dog from "../assets/BorkDogsmall.svg";
import text from "../assets/Borkenomics heading.svg";
import "../style/SectionC.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const SectionC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [cloudAnimationStarted, setCloudAnimationStarted] = useState(false);

  useEffect(() => {
    if (inView && !cloudAnimationStarted) {
      setCloudAnimationStarted(true);
    }
  }, [inView, cloudAnimationStarted]);
  return (
    <div className="xl:mt-[20rem] mt-20 justify-center flex 2xl:mt-[12rem] w-full">
      <div ref={ref}>
        <div className="flex justify-center">
          <div className="absolute  fade-in animate-spin" style={{ animationDuration: "50s" }}>
            <img src={moon} alt="Logo" className="w-32 xl:w-40 sm:w-36 h-auto md:w-36" />
          </div>
          <div className="relative flex mt-10 md:mt-16 ">
            <div className={`${cloudAnimationStarted ? 'animate-cloud' : ''}`}>
              <img
                src={cloud}
                alt="Logo"
                className={` mt-10 w-36 xl:w-52 h-auto md:w-40 animate-leftright `}
                style={{ animationDelay: "6s" }}
              />
            </div>
            <div className={` ${cloudAnimationStarted ? 'animate-clouda' : ''}`}>
              <img
                src={cloud}
                alt="Logo"
                className={`w-60 xl:w-80 h-auto animate-leftright`}
                style={{ animationDelay: "6s" }}
              />
            </div>
          </div>
          <div className={`absolute justify-center mt-10`}>
            <img src={text} alt="Logo" className="w-72 xl:w-96 sm:w-80 h-auto md:w-96" />
          </div>
        </div>
        {/* <div className="fade-in">
          <img src={dog} alt="Logo" className="w-20 xl:w-36 h-auto mt-10 md:mt-20 md:w-28 ms-6 " />
        </div> */}
     
      </div>
    </div>
  );
};

export default SectionC;
