import moon from "../assets/MoonRock.svg";
import logo from "../assets/logo.svg";
import text from "../assets/Thegoodestboy.svg";
import telegram from "../assets/Telegram (2).svg";
import twitter from "../assets/TwitterVector (2).svg";
import buy from "../assets/Buy.svg";
import { Nav } from "react-bootstrap";
import dog_anima from "../assets/doganima.json";
import Lottie from "lottie-react";

const SectionA = () => {
  return (
    <div className="container xl:flex mt-20">
      <div className="mb-10 items-center w-full">
        <div className="mt-16">
          <div className="relative 2xl:ms-[1rem] xl:ms-[5rem] animate-spin-slow justify-center ms-[3rem] sm:ms-[7rem] md:ms-[12rem] mt-[4rem] ">
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
          </div>
          <div className="absolute flex left-8  2xl:left-[17rem] xl:top-[28rem] xl:mb-10 top-[17rem] sm:top-[20rem]">
            <img src={logo} alt="Logo" className="w-[300px] 2xl:w-[500px] h-auto" />
          </div>
          <div className="relative flex xl:mt-16 xl:ms-14 mt-8 sm:mt-20 sm:ms-16 md:ms-36 md:mt-14 2xl:mt-[30px] ">
            <img src={text} alt="Logo" className="2xl:w-[1500px] w-[30rem] h-auto" />
          </div>
        </div>
        <div className="absolute flex flex-row xl:gap-12 2xl:left-[16rem] xl:ms-16 xl:mt-2 items-center ms-8 sm:ms-24 md:ms-44 ">
          <Nav className="items-center 2xl:gap-11 2xl:me-[10rem]">
            <div className=" flex">
              <Nav.Link>
                <img
                  src={telegram}
                  alt="Logo"
                  className="hover:scale-110 transition-transform duration-300 w-10 h-auto"
                />
              </Nav.Link>
            </div>
            <div className=" flex">
              <Nav.Link>
                <img
                  src={twitter}
                  alt="Logo"
                  width="40"
                  height="40"
                  className="hover:scale-110 transition-transform duration-300"
                />
              </Nav.Link>
            </div>
            <div className=" flex">
              <Nav.Link>
                <img
                  src={buy}
                  alt="Logo"
                  className="hover:scale-110 transition-transform duration-300 w-20 xl:w-40 h-auto sm:w-24 md:w-28 2xl:w-38"
                />
              </Nav.Link>
            </div>
          </Nav>
        </div>
      </div>
      <div className=" w-full  ">
        <div className="xl:w-[41rem] xl:h-[41rem] 2xl:ms-[20rem] ">
          <Lottie animationData={dog_anima} loop={true} />
        </div>
        <div className="absolute 2xl:right-[21rem] xl:top-[40rem] xl:right-[12rem] top-[32rem] right-[1rem] sm:right-[8rem] sm:top-[42rem] md:top-[44rem] lg:right-[15rem] lg:top-[47rem]">
          <svg
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-auto"
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
                dur="120s"
                repeatCount="indefinite"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SectionA;
