import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import text1 from "../assets/aboutsafemooncolour.svg";
import text2 from "../assets/BorkParagraphTurqoise.svg";
import cloud from "../assets/cloud.svg";
import "../style/SectionB.css";

const SectionB: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [cloudAnimationStarted, setCloudAnimationStarted] = useState(false);
  const [cloudVisible, setCloudVisible] = useState(false);

  useEffect(() => {
    if (inView && !cloudAnimationStarted) {
      setTimeout(() => {
        setCloudVisible(true);
        setCloudAnimationStarted(true); 
      }, 1);
    }
  }, [inView, cloudAnimationStarted]);

  return (
    <div className="xl:mt-20 justify-center flex 2xl:mt-[10rem]">
      <div ref={ref}>
        <div className="flex justify-center items-center relative">
          <div className="absolute fade-in">
            <img src={text1} alt="Logo" className={`w-36 xl:w-60 h-auto`} />
          </div>
          <div
            className={`relative flex left-[25rem] ${cloudAnimationStarted ? 'animate-clouda' : ''}`}
          >
            {cloudVisible && (
              <img
                src={cloud}
                alt="Logo"
                className={`w-28 sm:w-36 xl:w-60 h-auto md:w-44 animate-updown`}
                style={{ animationDelay: "6s" }}
              />
            )}
          </div>
        </div>
        <div className="relative">
          <div
            className={`relative fade-in`}
          >
            <img
              src={text2}
              alt="Logo"
              width="1000"
              height="1000"
              className=""
            />
          </div>
          <div
            className={`absolute top-[8rem] sm:top-[12rem] xl:top-[20rem] sm:left-[4rem] md:left-[2rem] lg:top-[21rem] md:top-[15rem] xl:-left-[1px]  transform -translate-x-1/2 ${cloudAnimationStarted ? 'animate-cloud' : ''}`}
            style={{ zIndex: "-1" }}
          >
            {cloudVisible && (
              <img
                src={cloud}
                alt="Logo"
                className="transform -scale-x-100 z-50 w-28 sm:w-40 xl:w-72 h-auto md:w-44 animate-updown"
                style={{ animationDelay: "6s" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionB;
