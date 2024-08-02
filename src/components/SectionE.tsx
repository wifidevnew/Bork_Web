import wood from "../assets/wood.png";
import grass from "../assets/valley.jpg";
import bone from "../assets/Bone (2).svg";
// import how from "../assets/How to buy.svg";
import dog from "../assets/BorkDogsmall.svg";
import bowl from "../assets/bowlblue.png";
// import text from "../assets/Thegoodestboy.svg";
import "../style/SectionD.css";
// import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

const SectionE = () => {
  const [showSmallItem, setShowSmallItem] = useState(true);
  const [showLargeItem, setShowLargeItem] = useState(false);
  // const { ref, inView } = useInView({
  //   threshold: 0.1,
  // });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotationAngle = scrollY * 0.5;

      const boneElements = document.querySelectorAll(".rotate-bone") as NodeListOf<HTMLElement>;

      boneElements.forEach((bone) => {
        bone.style.transform = `rotate(${rotationAngle}deg)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isLgScreen = window.innerWidth >= 1024;
      setShowSmallItem(!isLgScreen);
      setShowLargeItem(isLgScreen);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="justify-center xl:mt-[18rem] mt-[3rem] 2xl:mt-[30rem] relative">
      <div>
        <div>
          <div className="justify-center flex">
            <div className="absolute  -top-[50px] flex flex-col justify-center items-center text-center">
              {showLargeItem && (
                <Parallax speed={-15}>
                  {/* <img src={how} alt="Logo" className={`fade-in w-40 xl:w-64 h-auto sm:w-48 lg:w-60`} /> */}
                  <h2 className="text-[79px]" style={{ WebkitTextStrokeWidth: "2px", WebkitTextStrokeColor: "#182148", color: "#b4e804" }}>
                    How To Buy
                  </h2>
                  {/* <img src={text} alt="Logo" className="w-[30rem] h-auto xl:w-[40rem]" /> */}
                  <h2 className="text-[79px]" style={{ WebkitTextStrokeWidth: "2px", WebkitTextStrokeColor: "black", color: "#b4e804" }}>
                    The Goodest Boy On The BlockChain{" "}
                  </h2>
                </Parallax>
              )}
              {showSmallItem && (
                <div className="mt-12">
                  <Parallax speed={-5}>
                    {/* <img src={how} alt="Logo" className={`fade-in w-40 xl:w-64 h-auto sm:w-48 lg:w-60`} /> */}
                    <h2 className="" style={{ WebkitTextStrokeWidth: "1.2px", WebkitTextStrokeColor: "#182148", color: "#b4e804" }}>
                      How To Buy
                    </h2>
                    {/* <img src={text} alt="Logo" className="w-[30rem] h-auto xl:w-[40rem]" /> */}
                    <h2 className="" style={{ WebkitTextStrokeWidth: "1.2px", WebkitTextStrokeColor: "#182148", color: "#b4e804" }}>
                      The Goodest Boy On The BlockChain{" "}
                    </h2>
                  </Parallax>
                </div>
              )}
            </div>
            {showLargeItem && (
              <div className="fade-in flex  justify-between relative top-64 bottom-0 items-center z-10">
                <Parallax speed={-10} className="flex gap-[45rem] items-center">
                  <div>
                    <img src={dog} alt="Logo" className="2xl:w-28 xl:w-36 h-auto  md:w-28  w-10 sm:w-20" />
                  </div>
                  {/* <div>
                  <img src={how} alt="Logo" className={`fade-in w-40 xl:w-80 h-auto sm:w-48 lg:w-60`} />
                </div> */}
                  <div>
                    <img src={bowl} alt="Logo" className="2xl:w-28 xl:w-36 h-auto  md:w-28  w-10 sm:w-20" />
                  </div>
                </Parallax>
              </div>
            )}
            {showSmallItem && (
              <div className="fade-in flex  justify-between relative top-40 bottom-0 items-center z-10">
                <Parallax speed={-5} className="flex gap-20 items-center">
                  <div>
                    <img src={dog} alt="Logo" className="2xl:w-28 xl:w-36 h-auto  md:w-28  w-10 sm:w-20" />
                  </div>
                  {/* <div>
                  <img src={how} alt="Logo" className={`fade-in w-40 xl:w-80 h-auto sm:w-48 lg:w-60`} />
                </div> */}
                  <div>
                    <img src={bowl} alt="Logo" className="2xl:w-28 xl:w-36 h-auto  md:w-28  w-10 sm:w-20" />
                  </div>
                </Parallax>
              </div>
            )}
          </div>
          <div className={`flex w-full justify-center items-center sm:bottom-[67vh] lg:bottom-[100vh]  absolute 2xl:bottom-[106vh] bottom-[15rem]`}></div>
          {/* {showLargeItem && (
            <div className={`w-full absolute flex justify-center z-30 top-44 `}>
              <Parallax speed={10}><img src={bone} alt="Logo" className={`w-3 xl:w-16 h-auto sm:w-7 lg:w-10 2xl:w-12 rotate-bone`} /></Parallax>
            </div>
          )} */}

          {showLargeItem && (
            <div className="flex justify-center z-0 -top-80">
              <Parallax speed={-20}>
                <img src={grass} alt="Logo" className="w-screen" />
              </Parallax>
            </div>
          )}
          <div className="relative">
            {showLargeItem && (
              <div className="w-full relative -top-[26rem] flex flex-row items-center justify-center 2xl:gap-32 gap-5 z-50">
                <div className="flex flex-row items-center justify-center gap-20">
                  <div className="rotate-12 transform origin-center fade-in">
                    <img src={bone} alt="Logo" className={` cursor-pointer w-3 xl:w-16 h-auto sm:w-7 lg:w-10 2xl:w-12 rotate-bone`} />
                  </div>
                  <div className="rounded-3xl  bg-[#d0fcfc] justify-center lg:p-3">
                    <div className="rounded-3xl  bg-[#e8fcfc]  justify-center lg:p-3">
                      <div className={``}>
                        <iframe
                          src="https://www.youtube.com/embed/aaOa61tdeL4"
                          title="YouTube video"
                          allowFullScreen
                          className="w-40 h-20 sm:w-[15rem] sm:h-[8rem] xl:w-[40rem] xl:h-[370px] md:w-[20rem] md:h-[200px] lg:w-[20rem] lg:h-[200px] rounded-3xl"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                  <div className="-rotate-45 transform origin-center">
                    <img src={bone} alt="Logo" className={`cursor-pointer w-3 xl:w-16 h-auto sm:w-7 lg:w-10 2xl:w-12 rotate-bone`} />
                  </div>
                </div>
              </div>
            )}
            {showLargeItem && (
              <div className="flex justify-center absolute z-20 bottom-0 left-0">
                {/* <Parallax speed={10} className="-mb-1">
              </Parallax> */}
                <img src={wood} alt="Logo" className="w-screen " />
              </div>
            )}
          </div>
          <div className="relative">
            {showSmallItem && (
              <div className="w-full  flex flex-row items-center justify-center  relative top-56 gap-2 z-30">
                <div className="relative flex flex-row items-center justify-center gap-10">
                  {/* <div className="rotate-12 transform origin-center fade-in">
                  <img src={bone} alt="Logo" className={` cursor-pointer w-3 xl:w-16 h-auto sm:w-7 lg:w-10 2xl:w-12 rotate-bone`} />
                </div> */}
                  <div className="rounded-3xl  bg-[#d0fcfc] justify-center lg:p-3">
                    <div className="rounded-3xl  bg-[#e8fcfc]  justify-center lg:p-3">
                      <div className={``}>
                        <iframe src="https://www.youtube.com/embed/aaOa61tdeL4" title="YouTube video" allowFullScreen className="w-64 h-40 rounded-2xl"></iframe>
                      </div>
                    </div>
                  </div>
                  {/* <div className="-rotate-45 transform origin-center">
                  <img src={bone} alt="Logo" className={`cursor-pointer w-3 xl:w-16 h-auto sm:w-7 lg:w-10 2xl:w-12 rotate-bone`} />
                </div> */}
                </div>
              </div>
            )}
            {showSmallItem && (
              <div className="">
                <div className="flex justify-center absolute z-0  top-20 ">
                  <Parallax speed={-5}>
                    <img src={grass} alt="Logo" className="w-screen" />
                  </Parallax>
                </div>
                <div className="flex justify-center relative z-20">
                  <img src={wood} alt="Logo" className="w-screen h-[20rem]" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionE;
