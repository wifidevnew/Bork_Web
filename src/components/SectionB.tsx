import text1 from "../assets/aboutsafemooncolour.svg"
import text2 from "../assets/BorkParagraphTurqoise.svg"
import cloud from "../assets/cloud.svg"
import "../style/SectionB.css"

const SectionB = () => {
  return (
    <div className="mt-20 justify-center flex">
      <div>
        <div className="flex justify-center items-center relative">
          <div className="absolute fade-in">
            <img src={text1} alt="Logo" className="w-36" />
          </div>
          <div className="relative  xl:left-[25rem] animate-clouda z-10 left-[8rem]">
            <img src={cloud} alt="Logo" className="w-28 h-auto" />
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
          <div className="absolute top-[10rem] xl:top-[20rem] xl:-left-[1px]  transform -translate-x-1/2 animate-cloud" style={{ zIndex: '-1' }}>
            <img
              src={cloud}
              alt="Logo"
              className="transform -scale-x-100 z-50 w-36  h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionB
