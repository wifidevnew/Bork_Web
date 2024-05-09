import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import text1 from "../assets/aboutsafemooncolour.svg";
import text2 from "../assets/BorkParagraphTurqoise.svg";
import video1 from "../assets/1.mp4";
import video2 from "../assets/2.mp4";
import video3 from "../assets/3.mp4";
import video4 from "../assets/4.mp4";
// import cloud from "../assets/cloud.svg";
import "../style/SectionB.css";

const SectionB: React.FC = () => {
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

  return (
    <div className="xl:mt-20 lg:mt-10 2xl:mt-[40vh] mt-5 flex-col justify-center flex relative">
      <div className="  justify-between ">
        <div
          className={`rounded-xl absolute flex w-[30vw] sm:-top-20 md:right-12 md:top-16 lg:top-22  2xl:right-44 2xl:top-1 -top-10 right-0  2xl:w-[450px] h-auto justify-center rotate-12`}
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
          className={`rounded-xl absolute flex w-[30vw] sm:-top-20 md:left-12 md:top-16 2xl:left-44 2xl:top-1 left-0 -top-10  2xl:w-[450px] h-auto justify-center -rotate-12`}
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
        </div>
        <div
          className={`rounded-xl absolute flex w-[30vw] md:right-12 2xl:right-48 -bottom-48 right-0  2xl:w-[450px] h-auto justify-center rotate-0`}
        >
          <div className="rounded-3xl  bg-[#d0fcfc] justify-center p-2">
            <div className="rounded-3xl  bg-[#e8fcfc]  justify-center p-2">
              <video
                className="w-full rounded-3xl"
                ref={videoRef}
                autoPlay
                controls
              >
                <source src={video3} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div
          className={`rounded-xl absolute flex w-[30vw] md:left-12 2xl:left-48 -bottom-48 left-0  2xl:w-[450px] h-auto justify-center -rotate-12`}
        >
          <div className="rounded-3xl  bg-[#d0fcfc] justify-center p-2">
            <div className="rounded-3xl  bg-[#e8fcfc]  justify-center p-2">
              <video
                className="w-full rounded-3xl"
                ref={videoRef}
                autoPlay
                controls
              >
                <source src={video4} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="rounded-3xl  bg-[#d0fcfc] justify-center flex items-center mt-[10rem] p-16 w-[60%] ">
          <div className="rounded-3xl  bg-[#e8fcfc] py-9 justify-center">
            <div className="flex justify-center items-center -mb-36">
              <img
                src={text1}
                alt="Logo"
                className={`w-[50rem] xl:w-48 h-auto md:w-32`}
              />
            </div>
            <div className="flex justify-center md:mt-[27vh] xl:mt-[18vh]">
              <div className={``}>
                <img
                  src={text2}
                  alt="Logo"
                  className="w-[50rem] 2xl:w-[75rem] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionB;
