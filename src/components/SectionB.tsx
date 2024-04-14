import text1 from "../assets/aboutsafemooncolour.svg"
import text2 from "../assets/BorkParagraphTurqoise.svg"
import cloud from "../assets/cloud.svg"
import "../style/SectionB.css"

const SectionB = () => {
  return (
    <div className="xl:mt-20 justify-center flex">
      <div>
        <div className="flex justify-center items-center relative">
          <div className="absolute fade-in">
            <img src={text1} alt="Logo" className="w-36 xl:w-60 h-auto" />
          </div>
          <div className="relative  xl:left-[25rem] animate-clouda z-10 left-[8rem] sm:left-[14rem] lg:left-[22rem]">
            <img src={cloud} alt="Logo" className="w-28 sm:w-36 xl:w-60 h-auto md:w-44" />
          </div>
        </div>
        <div className="relative">
          <div className="fade-in relative">
            <img
              src={text2}
              alt="Logo"
              width="1000"
              height="1000"
              className=""
            />
          </div>
          <div className="absolute top-[8rem] sm:top-[12rem] xl:top-[20rem] sm:left-[4rem] md:left-[2rem] lg:top-[21rem] md:top-[15rem] xl:-left-[1px]  transform -translate-x-1/2 animate-cloud" style={{ zIndex: '-1' }}>
            <img
              src={cloud}
              alt="Logo"
              className="transform -scale-x-100 z-50 w-28 sm:w-40 xl:w-72 h-auto md:w-44"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionB
