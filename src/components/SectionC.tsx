import moon from "../assets/MoonNight.svg";
import cloud from "../assets/cld1.png";
import cld from "../assets/awan4.png";
import cld1 from "../assets/awan2.png";
import cldlong from "../assets/cloudlong.png";
// import dog from "../assets/BorkDogsmall.svg";
import text from "../assets/Borkenomics heading.svg";
import "../style/SectionC.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
// import { Parallax } from "react-scroll-parallax";

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
    <div className="container relative">
      <div className="mt-40 justify-center flex 2xl:mt-[15rem] w-full">
        <div ref={ref}>
          <div className="flex justify-center">
            <div className="absolute  fade-in animate-spin" style={{ animationDuration: "50s" }}>
              <img src={moon} alt="Logo" className="w-32 xl:w-40 sm:w-36 h-auto md:w-36" />
            </div>
            <div className="relative flex mt-10 md:mt-16 ">
              <div className={`${cloudAnimationStarted ? "animate-cloud" : ""}`}>
                <img src={cloud} alt="Logo" className={` mt-10 w-36 xl:w-52 h-auto md:w-40 animate-leftright `} style={{ animationDelay: "6s" }} />
              </div>
              <div className={` ${cloudAnimationStarted ? "animate-clouda" : ""}`}>
                <img src={cloud} alt="Logo" className={`w-60 xl:w-80 h-auto animate-leftright`} style={{ animationDelay: "6s" }} />
              </div>
            </div>
            <div className={`absolute justify-center `}>
              <img src={text} alt="Logo" className="w-60 xl:w-[470px] sm:w-80 h-auto md:w-96" />
            </div>
          </div>
          {/* <div className="fade-in">
          <img src={dog} alt="Logo" className="w-20 xl:w-36 h-auto mt-10 md:mt-20 md:w-28 ms-6 " />
        </div> */}
        </div>
      </div>
      <div className="justify-between hidden lg:flex">
        <div className="absolute right-0 top-0">
          {/* <Parallax> */}
          <img src={cld} alt="" className="w-52" />
          {/* </Parallax> */}
        </div>
        <div className="absolute left-0 top-0">
          {/* <Parallax> */}
          <img src={cld1} alt="" className="w-52" />
          {/* </Parallax> */}
        </div>
      </div>
      <div className="absolute top-32">
        {/* <Parallax> */}
        <img src={cldlong} alt="" />
        {/* </Parallax> */}
      </div>
    </div>
  );
};

export default SectionC;
