import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import text1 from "../assets/aboutsafemooncolour.svg";
import text2 from "../assets/BorkParagraphTurqoise.svg";
import video1 from "../assets/1.mp4"
import video2 from "../assets/2.mp4"
import video3 from "../assets/3.mp4"
import video4 from "../assets/4.mp4"
// import cloud from "../assets/cloud.svg";
import "../style/SectionB.css";

const SectionB: React.FC = () => {
  const { ref, inView } = useInView({
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
          playPromise.then(() => {
            // Video telah dimulai
          }).catch(error => {
            console.error('Pemutaran video gagal:', error);
          });
        }
      }
    };

    const restartVideo = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0; // Mengatur waktu kembali ke awal
        videoRef.current.play(); // Memulai kembali video
      }
    };

    const handleVideoEnded = () => {
      restartVideo();
    };

    document.addEventListener('click', handleInteraction);
    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleVideoEnded);
    }

    return () => {
      document.removeEventListener('click', handleInteraction);
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoEnded);
      }
    };
  }, []); 

  return (
    <div className="xl:mt-20 2xl:mt-[7rem] justify-center flex ">
      <div ref={ref}>
        <div className="flex justify-center items-center relative">
          <div className="">
            <img src={text1} alt="Logo" className={`w-20 xl:w-60 h-auto`} />
          </div>
          <div className={`rounded-xl absolute flex w-[30vw] left-[10px] min-[1440px]:w-[18vw]  2xl:w-[350px] h-auto border-4 border-[#24bc94] justify-center -rotate-3 2xl:right-[50vw] min-[1440px]:right-[20rem] 2xl:top-[1rem] `}>
            {/* <img
              src={cloud}
              alt="Logo"
              className={`w-28 sm:w-36 xl:w-60 h-auto md:w-44 animate-updown`}
              style={{ animationDelay: "4s" }}
            /> */}
            <video className="w-full z-0" ref={videoRef} autoPlay controls >
              <source src={video1} type="video/mp4"/>
            </video>
          </div>
          <div className={`rounded-xl absolute flex w-[30vw] right-[10px] min-[1440px]:w-[18vw] 2xl:w-[350px] h-auto border-4 border-[#24bc94] justify-center rotate-12 2xl:left-[49vw] min-[1440px]:left-[60vw] 2xl;top-[1rem]`}>
            {/* <img
              src={cloud}
              alt="Logo"
              className={`w-28 sm:w-36 xl:w-60 h-auto md:w-44 animate-updown`}
              style={{ animationDelay: "4s" }}
            /> */}
            <video className="w-full z-0" ref={videoRef} autoPlay controls >
              <source src={video2} type="video/mp4"/>
            </video>
          </div>
          <div className={`rounded-xl absolute flex w-[30vw] min-[1440px]:w-[18vw] right-[10px] 2xl:w-[350px] h-auto border-4 border-[#24bc94] justify-center -rotate-[30] 2xl:left-[48vw] min-[1440px]:left-[60vw] 2xl:top-[34vh] top-[10rem] min-[1440px]:top-[24rem]`}>
            {/* <img
              src={cloud}
              alt="Logo"
              className={`w-28 sm:w-36 xl:w-60 h-auto md:w-44 animate-updown`}
              style={{ animationDelay: "4s" }}
            /> */}
            <video className="w-full z-0" ref={videoRef} autoPlay controls >
              <source src={video3} type="video/mp4"/>
            </video>
          </div>
          <div className={`rounded-xl absolute flex w-[30vw] min-[1440px]:w-[18vw] left-[10px] 2xl:w-[350px] h-auto border-4 border-[#24bc94] justify-center rotate-6 2xl:right-[50vw] 2xl:top-[35vh] top-[10rem] min-[1440px]:top-[25rem]`}>
            {/* <img
              src={cloud}
              alt="Logo"
              className={`w-28 sm:w-36 xl:w-60 h-auto md:w-44 animate-updown`}
              style={{ animationDelay: "4s" }}
            /> */}
            <video className="w-full z-0" ref={videoRef} autoPlay controls >
              <source src={video4} type="video/mp4"/>
            </video>
          </div>
        </div>
        <div className="relative justify-center">
          <div className={`relative`}>
            <img
              src={text2}
              alt="Logo"
              width="1000"
              height="1000"
              className=""
            />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default SectionB;
