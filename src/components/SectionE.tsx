import wall from "../assets/Fencenight.svg";
import bone from "../assets/Bone (2).svg";
import how from "../assets/How to buy.svg";
import dog from "../assets/BorkDogsmall.svg";
import "../style/SectionD.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const SectionE = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotationAngle = scrollY * 0.5; 
  
     
      const boneElements = document.querySelectorAll('.rotate-bone') as NodeListOf<HTMLElement>;
  
    
      boneElements.forEach(bone => {
        bone.style.transform = `rotate(${rotationAngle}deg)`;
      });
    };
  
    window.addEventListener('scroll', handleScroll);
  
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <div className="justify-center xl:mt-[18rem] mt-[3rem] 2xl:mt-[9rem]">
      <div ref={ref}>
        <div>
        <div className="fade-in flex w-full justify-center absolute sm:bottom-[54vh] lg:bottom-[80vh] 2xl:right-[18rem] right-[7rem] items-center bottom-[15rem] 2xl:bottom-[61rem] ">
          <img src={dog} alt="Logo" className="2xl:w-30 xl:w-36 h-auto  md:w-28 2xl:ms-6 w-10 sm:w-20" />
        </div>
          <div
            className={`flex w-full justify-center items-center sm:bottom-[67vh] lg:bottom-[100vh]  absolute 2xl:bottom-[106vh] bottom-[38vh]`}
          >
             <div>
              <img
                src={how}
                alt="Logo"
                className={`fade-in w-40 xl:w-80 h-auto sm:w-48 lg:w-60`}
              />
            </div>
            {/* <div className="rotate-12 transform origin-center fade-in">
              <img
                src={bone}
                alt="Logo"
                className="fade-in w-5 xl:w-16 h-auto sm:w-10 lg:w-14 2xl:w-12"
              />
            </div> */}
           
            {/* <div className="-rotate-45 transform origin-center">
              <img
                src={bone}
                alt="Logo"
                className="fade-in w-5 xl:w-16 h-auto sm:w-10 lg:w-14 2xl:w-12"
              />
            </div> */}
          </div>
          <div className="w-full absolute flex flex-row items-center justify-center sm:bottom-[30vh] md:bottom-[20vh] lg:bottom-[40vh]  2xl:gap-32 gap-7 2xl:bottom-[40vh] bottom-[14vh] ">
            <div className="rotate-12 transform origin-center fade-in">
              <img
                src={bone}
                alt="Logo"
                className={` cursor-pointer w-3 xl:w-16 h-auto sm:w-7 lg:w-10 2xl:w-12 rotate-bone`}
              />
            </div>
            <div
              className={`2xl:left-[41rem] 2xl:bottom-[40rem] xl:left-[36rem] xl:bottom-[34rem] fade-in xl:border-[50px] sm:left-[12rem] sm:bottom-[10vh] md:left-[14rem] md:bottom-[15rem] lg:bottom-[17rem] lg:left-[16rem] border-[5px] rounded left-[5rem] bottom-[7rem] animate ${
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
                className="w-40 h-20 sm:w-[15rem] sm:h-[8rem] xl:w-[30rem] xl:h-[300px] md:w-[20rem] md:h-[200px] lg:w-[20rem] lg:h-[200px]"
              ></iframe>
            </div>
            <div className="-rotate-45 transform origin-center">
              <img
                src={bone}
                alt="Logo"
                className={`cursor-pointer w-3 xl:w-16 h-auto sm:w-7 lg:w-10 2xl:w-12 rotate-bone`}
              />
            </div>
          </div>
          <div
            className={`w-full absolute flex justify-center sm:bottom-[18vh] md:bottom-[7vh] lg:bottom-[20vh] 2xl:bottom-[20vh] bottom-[7vh]`}
          >
            <img
              src={bone}
              alt="Logo"
              className={`w-3 xl:w-16 h-auto sm:w-7 lg:w-10 2xl:w-12 rotate-bone`}
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
