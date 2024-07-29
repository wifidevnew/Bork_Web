// import moon from "../assets/MoonRock.svg";
import logo from "../assets/logo.svg";
import text from "../assets/Thegoodestboy.svg";
import gabe from "../assets/gabe.png";
import telegram from "../assets/Telegram (2).svg";
import twitter from "../assets/TwitterVector (2).svg";
import buy from "../assets/Buy.svg";
import { Nav } from "react-bootstrap";
import dog_anima from "../assets/doganima.json";
import Lottie from "lottie-react";
import cldlong from "../assets/cloudlong.png";
import cld1 from "../assets/cld1.png";

const SectionA = () => {
  return (
    <div className="relative">
      <div className="container pt-[5.5rem] grid grid-cols-2 gap-14">
        <div className="justify-center flex flex-col items-center relative">
          {/* <div className=" animate-spin-slow justify-center flex ">
            <svg
              viewBox="0 0 300 300"
              xmlns="http://www.w3.org/2000/svg"
              className="w-60 xl:w-96 h-auto"
            >
              <style>
                {`
                  @keyframes rotate {
                    from {
                      transform: rotate(0deg);
                    }
                    to {
                      transform: rotate(360deg);
                    }
                  }
                `}
              </style>
              <g>
                <image href={moon} width="300" height="300" />
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 150 150"
                  to="360 150 150"
                  dur="90s"
                  repeatCount="indefinite"
                />
              </g>
            </svg>
          </div> */}
          <div className="absolute z-0 top-0">
            <img src={cld1} alt="" className="w-[80rem]" />
          </div>

          <div className=" items-center justify-center  2xl:mb-1 z-10">
            <img src={gabe} alt="Logo" className="w-[400px] 2xl:w-[100rem] h-auto" />
          </div>

          <div className=" items-center justify-center  2xl:mb-1 z-10">
            <img src={logo} alt="Logo" className="w-[300px] 2xl:w-[500px] h-auto" />
          </div>
          <div className="flex justify-center z-10">
            <img src={text} alt="Logo" className="w-[30rem] h-auto xl:w-[40rem]" />
          </div>
          <div className="mt-10 z-10">
            <Nav className="items-center gap-10">
              <div className="flex">
                <Nav.Link>
                  <img src={telegram} alt="Logo" className="hover:scale-110 transition-transform duration-300 w-10 h-auto" />
                </Nav.Link>
              </div>
              <div className="flex">
                <Nav.Link>
                  <img src={twitter} alt="Logo" width="40" height="40" className="hover:scale-110 transition-transform duration-300" />
                </Nav.Link>
              </div>
              <div className="flex">
                <Nav.Link>
                  <img src={buy} alt="Logo" className="hover:scale-110 transition-transform duration-300 w-20 xl:w-40 h-auto sm:w-24 md:w-28 2xl:w-38" />
                </Nav.Link>
              </div>
            </Nav>
          </div>
        </div>
        <div className="justify-center flex relative">
          <Lottie animationData={dog_anima} loop={true} />
          <div className="absolute right-0 top-0">
            <img src={cld1} alt="" className="w-[10rem]" />
          </div>

          {/* <div className="absolute top-10 right-0 sm:right-10 xl:top-32 2xl:mt-[38vh] 2xl:right-28 lg:top-[40vh] ">
          <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-20 h-auto">
            <style>
              {`
                  @keyframes rotate {
                    from {
                      transform: rotate(0deg);
                    }
                    to {
                      transform: rotate(360deg);
                    }
                  }
                `}
            </style>
            <g>
              <image href={moon} width="300" height="300" />
              <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="120s" repeatCount="indefinite" />
            </g>
          </svg>
        </div> */}
        </div>
      </div>
      {/* <div className="absolute top-72">
        <img src={cldlong} alt="" />
      </div> */}
    </div>
  );
};

export default SectionA;
