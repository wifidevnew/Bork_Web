import wall from "../assets/Fencenight.svg"
import bone from "../assets/Bone (2).svg"
import how from "../assets/How to buy.svg"
import "../style/SectionD.css"

const SectionE = () => {
  return (
    <div className="justify-center xl:mt-[20rem] mt-[10rem]">
      <div>
        <div className="flex justify-center items-center xl:gap-52 absolute xl:left-[28rem] xl:bottom-[60rem] sm:bottom-[23rem] md:bottom-[29rem] lg:bottom-[37rem] lg:left-[15rem] md:left-[12rem] left-[4rem] sm:left-[9rem] bottom-[17rem] gap-12 lg:gap-24">
          <div className="rotate-12 transform origin-center fade-in">
            <img
              src={bone}
              alt="Logo"
              className="fade-in w-5 xl:w-16 h-auto sm:w-10 lg:w-14"
            />
          </div>
          <div>
            <img
              src={how}
              alt="Logo"
              className="fade-in w-40 xl:w-80 h-auto sm:w-48 lg:w-60"
            />
          </div>
          <div className="-rotate-45 transform origin-center">
            <img
              src={bone}
              alt="Logo"
              className="fade-in w-5 xl:w-16 h-auto sm:w-10 lg:w-14"
            />
          </div>
        </div>
        <div
          className="absolute xl:left-[36rem] xl:bottom-[34rem] fade-in xl:border-[50px] sm:left-[12rem] sm:bottom-[12rem] md:left-[14rem] md:bottom-[15rem] lg:bottom-[17rem] lg:left-[16rem] border-[5px] rounded left-[5rem] bottom-[7rem] "
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
            className="w-64 xl:w-[30rem] xl:h-[300px] md:w-[20rem] md:h-[200px] lg:w-[30rem] lg:h-[300px]"
          ></iframe>
        </div>
        <div className="absolute xl:left-[52rem] xl:bottom-[20rem] rotate-45 fade-in bottom-[4rem] sm:left-[20rem] left-[12rem] md:left-[22rem] md:bottom-[7rem] lg:left-[29rem]">
          <img
            src={bone}
            alt="Logo"
            className="w-5 xl:w-16 h-auto sm:w-10 lg:w-14"
          />
        </div>
        <div className="flex justify-center">
          <img src={wall} alt="Logo" className="w-screen" />
        </div>
      </div>
    </div>
  )
}

export default SectionE
