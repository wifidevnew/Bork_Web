import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
// import dog from "../assets/BorkDogsmall.svg";
// import text1 from "../assets/aboutsafemooncolour.svg";
// import text2 from "../assets/BorkParagraphTurqoise.svg";
// import video1 from "../assets/1.mp4";
// import video2 from "../assets/2.mp4";
import video3 from "../assets/3.mp4";
import video4 from "../assets/4.mp4";
// import cld from "../assets/awan4.png";
// import cld1 from "../assets/awan2.png";
// import cloud from "../assets/cloud.svg";
import "../style/SectionB.css";
import bone from "../assets/Bone (2).svg";

const SectionB: React.FC = () => {
  const [showSmallItem, setShowSmallItem] = useState(true);
  const [showLargeItem, setShowLargeItem] = useState(false);
  const { inView } = useInView({
    threshold: 0.1,
  });
  const [cloudAnimationStarted, setCloudAnimationStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (inView && !cloudAnimationStarted) {
      setCloudAnimationStarted(true);
    }
  }, [inView, cloudAnimationStarted]);

  useEffect(() => {
    const handleInteraction = () => {
      if (videoRef.current) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Video telah dimulai
            })
            .catch((error) => {
              console.error("Pemutaran video gagal:", error);
            });
        }
      }
    };

    const restartVideo = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    };

    const handleVideoEnded = () => {
      restartVideo();
    };

    document.addEventListener("click", handleInteraction);
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", handleVideoEnded);
    }

    return () => {
      document.removeEventListener("click", handleInteraction);
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", handleVideoEnded);
      }
    };
  }, []);

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
    <div className="container relative -top-36 lg:top-0">
      {showLargeItem && (
        <div className={`w-full justify-evenly flex z-30 lg:top-20 lg:justify-between items-center mb-10 `}>
          <img src={bone} alt="Logo" className={`w-5 xl:w-16 h-auto sm:w-7 lg:w-10 2xl:w-12 rotate-bone`} />
          <div>
            <h2 className="lg:text-[80px]" style={{ WebkitTextStrokeWidth: "3px", WebkitTextStrokeColor: "black", color: "white" }}>
              WOOF!{" "}
            </h2>
          </div>
          <img src={bone} alt="Logo" className={`w-5 xl:w-16 h-auto sm:w-7 lg:w-10 2xl:w-12 rotate-bone`} />
          <div>
            <h2 className="lg:text-[80px]" style={{ WebkitTextStrokeWidth: "3px", WebkitTextStrokeColor: "black", color: "white" }}>
              WOOF!{" "}
            </h2>
          </div>
          <img src={bone} alt="Logo" className={`w-5 xl:w-16 h-auto sm:w-7 lg:w-10 2xl:w-12 rotate-bone`} />
        </div>
      )}
      {showSmallItem && (
        <div className={`w-full justify-evenly flex z-30 lg:top-20 lg:justify-between items-center mb-10 `}>
          <img src={bone} alt="Logo" className={`w-5 xl:w-16 h-auto sm:w-7 lg:w-10 2xl:w-12 rotate-bone`} />
          <div>
            <h2 className="text-[30px]" style={{ WebkitTextStrokeWidth: "1.5px", WebkitTextStrokeColor: "black", color: "white" }}>
              WOOF!{" "}
            </h2>
          </div>
          <img src={bone} alt="Logo" className={`w-5 xl:w-16 h-auto sm:w-7 lg:w-10 2xl:w-12 rotate-bone`} />
          <div>
            <h2 className="text-[30px]" style={{ WebkitTextStrokeWidth: "1.5px", WebkitTextStrokeColor: "black", color: "white" }}>
              WOOF!{" "}
            </h2>
          </div>
          <img src={bone} alt="Logo" className={`w-5 xl:w-16 h-auto sm:w-7 lg:w-10 2xl:w-12 rotate-bone`} />
        </div>
      )}
      <div className="-mt-[8px] justify-center container lg:space-y-0 space-y-[16px] grid lg:grid-cols-2 gap-3">
        <div className=" justify-center flex">
          <div className="rounded-[35px]  bg-[#e8fcfc] p-4 justify-center">
            {/* <div className=" justify-center items-center flex">
            <img src={text1} alt="Logo" className={`w-[50rem] mb-10 xl:w-48 h-auto md:w-32`} />
          </div>
          <div className=" justify-center ">
            <div className={``}>
              <img src={text2} alt="Logo" className="w-[50rem] 2xl:w-[75rem] h-auto" />
            </div>
          </div> */}
            <h2 className="text-blue-900 text-center lg:text-4xl">
              Welcome to the one and only Gabe the Dog- the internet's most beloved borker! Whether you're a longtime fan or gst discovering the wonders of Gabe's borks, you're in for a treat! From his iconic YouTube videos to his countless
              memes, Gabe's legacy continues to brighten the days of people all around the globe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea est facere culpa sunt? Sit cum aliquid in quas dolor veniam accusamus
              quibusdam
            </h2>
          </div>
        </div>
        <div className=" justify-center flex flex-col items-center gap-3 mx-auto w-full">
          {/* <div
          className={`rounded-xl absolute flex w-[30vw] sm:-top-20 md:right-12 md:top-16 lg:top-22  2xl:right-96 2xl:-top-10 -top-10 right-0  2xl:w-[470px] h-auto justify-center rotate-12`}
        >
          <div className="rounded-3xl  bg-[#d0fcfc] justify-center p-2">
            <div className="rounded-3xl  bg-[#e8fcfc]  justify-center p-2">
              <video
                className=" rounded-3xl"
                ref={videoRef}
                autoPlay
                controls
              >
                <source src={video1} type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
        <div
          className={`rounded-xl absolute flex w-[30vw] sm:-top-20 md:left-12 md:top-16 2xl:left-96 2xl:-top-10 left-0 -top-10  2xl:w-[470px] h-auto justify-center -rotate-6`}
        >
          <div className="rounded-3xl  bg-[#d0fcfc] justify-center p-2">
            <div className="rounded-3xl  bg-[#e8fcfc]  justify-center p-2">
              <video
                className="w-full z-0 rounded-3xl"
                ref={videoRef}
                autoPlay
                controls
              >
                <source src={video2} type="video/mp4" />
              </video>
            </div>
          </div>
        </div> */}
          <div className={`rounded-xl 2xl:w-[600px] h-auto justify-center `}>
            <div className="rounded-2xl mb-[16px] lg:mb-0  border-[2px] border-solid border-green-800  justify-center ">
              <video className="w-full rounded-xl" ref={videoRef} autoPlay controls>
                <source src={video3} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className={`rounded-xl  2xl:w-[600px] h-auto justify-center `}>
            <div className="rounded-2xl border-[2px] border-solid border-green-800 justify-center">
              <video className="w-full rounded-xl" ref={videoRef} autoPlay controls>
                <source src={video4} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute right-0 top-0">
        <img src={cld} alt="" className="w-[20rem]" />
      </div> */}
    </div>
  );
};

export default SectionB;
