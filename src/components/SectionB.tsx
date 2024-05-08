import React, { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import text1 from "../assets/aboutsafemooncolour.svg"
import text2 from "../assets/BorkParagraphTurqoise.svg"
import video1 from "../assets/1.mp4"
import video2 from "../assets/2.mp4"
import video3 from "../assets/3.mp4"
import video4 from "../assets/4.mp4"
// import cloud from "../assets/cloud.svg";
import "../style/SectionB.css"

const SectionB: React.FC = () => {
  const {inView } = useInView({
    threshold: 0.1,
  })
  const [cloudAnimationStarted, setCloudAnimationStarted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (inView && !cloudAnimationStarted) {
      setCloudAnimationStarted(true)
    }
  }, [inView, cloudAnimationStarted])

  useEffect(() => {
    const handleInteraction = () => {
      if (videoRef.current) {
        const playPromise = videoRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Video telah dimulai
            })
            .catch((error) => {
              console.error("Pemutaran video gagal:", error)
            })
        }
      }
    }

    const restartVideo = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0
        videoRef.current.play()
      }
    }

    const handleVideoEnded = () => {
      restartVideo()
    }

    document.addEventListener("click", handleInteraction)
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", handleVideoEnded)
    }

    return () => {
      document.removeEventListener("click", handleInteraction)
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", handleVideoEnded)
      }
    }
  }, [])

  return (
    <div className="xl:mt-20 lg:mt-10 2xl:mt-[25vh] mt-5 flex-col justify-center flex relative">
        <div className="  justify-between">
          <div
            className={`rounded-xl absolute flex w-[30vw] sm:-top-20 md:right-12 md:top-16 lg:top-22  2xl:right-44 2xl:top-32 -top-10 right-0  2xl:w-[350px] h-auto border-4 border-[#24bc94] justify-center rotate-12`}
          >
            {/* <img
              src={cloud}
              alt="Logo"
              className={`w-28 sm:w-36 xl:w-60 h-auto md:w-44 animate-updown`}
              style={{ animationDelay: "4s" }}
            /> */}
            <video className="w-full z-0" ref={videoRef} autoPlay controls>
              <source src={video1} type="video/mp4" />
            </video>
          </div>
          <div
            className={`rounded-xl absolute flex w-[30vw] sm:-top-20 md:left-12 md:top-16 2xl:left-40 2xl:top-32 left-0 -top-10  2xl:w-[350px] h-auto border-4 border-[#24bc94] justify-center -rotate-12`}
          >
            {/* <img
              src={cloud}
              alt="Logo"
              className={`w-28 sm:w-36 xl:w-60 h-auto md:w-44 animate-updown`}
              style={{ animationDelay: "4s" }}
            /> */}
            <video className="w-full z-0" ref={videoRef} autoPlay controls>
              <source src={video2} type="video/mp4" />
            </video>
          </div>
          <div
            className={`rounded-xl absolute flex w-[30vw] md:right-12 2xl:right-44  -bottom-10 right-0  2xl:w-[350px] h-auto border-4 border-[#24bc94] justify-center rotate-0`}
          >
            {/* <img
              src={cloud}
              alt="Logo"
              className={`w-28 sm:w-36 xl:w-60 h-auto md:w-44 animate-updown`}
              style={{ animationDelay: "4s" }}
            /> */}
            <video className="w-full z-0" ref={videoRef} autoPlay controls>
              <source src={video3} type="video/mp4" />
            </video>
          </div>
          <div
            className={`rounded-xl absolute flex w-[30vw] md:left-12 2xl:left-44 -bottom-10 left-0  2xl:w-[350px] h-auto border-4 border-[#24bc94] justify-center -rotate-12`}
          >
            {/* <img
              src={cloud}
              alt="Logo"
              className={`w-28 sm:w-36 xl:w-60 h-auto md:w-44 animate-updown`}
              style={{ animationDelay: "4s" }}
            /> */}
            <video className="w-full z-0" ref={videoRef} autoPlay controls>
              <source src={video4} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="flex justify-center items-center relative md:top-[25vh] xl:top-[15vh]">
          <div className="relative">
            <img src={text1} alt="Logo" className={`w-20 xl:w-60 h-auto md:w-32`} />
          </div>
        </div>
        <div className="flex justify-center md:mt-[27vh] xl:mt-[18vh]">
          <div className={`relative`}>
            <img
              src={text2}
              alt="Logo"
              className="w-[50rem] 2xl:w-[62rem] h-auto"
            />
          </div>
        </div>
      
    </div>
  )
}

export default SectionB
