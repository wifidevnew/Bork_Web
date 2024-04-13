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
      <div className=" items-center ">
        <div className="mt-16">
          <div className="relative xl:ms-[5rem] animate-spin-slow justify-center ms-[2rem]">
            <svg
             
              viewBox="0 0 300 300"
              xmlns="http://www.w3.org/2000/svg"
              className="w-80 h-auto"
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
          <div className="absolute flex xl:top-[28rem] xl:mb-10 top-[22rem]">
            <img src={logo} alt="Logo" width="550" height="550" className="" />
          </div>
          <div className="relative flex xl:mt-12 xl:ms-14 ms-7 mt-12">
            <img src={text} alt="Logo" width="400" height="400" className="" />
          </div>
        </div>
        <div className="flex flex-row gap-4 xl:ms-16 xl:mt-7 items-center ms-12">
          <Nav className="items-center gap-4">
            <div className=" flex">
              <Nav.Link>
                <img
                  src={telegram}
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
                  className="hover:scale-110 transition-transform duration-300 w-20 h-auto"
                />
              </Nav.Link>
            </div>
          </Nav>
        </div>
      </div>
      <div className="xl:ms-[20rem]">
        <div className="xl:w-[41rem] xl:h-[41rem]">
          <Lottie animationData={dog_anima} loop={true} />
        </div>
        <div className="absolute xl:top-[40rem] xl:right-[14rem] top-[39rem] right-[1rem]">
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
