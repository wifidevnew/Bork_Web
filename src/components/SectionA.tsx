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
    <div className="container flex mt-20">
      <div className=" items-center ">
        <div className="mt-16">
          <div className="relative ms-[5rem] animate-spin-slow">
            <svg
              width="400"
              height="400"
              viewBox="0 0 300 300"
              xmlns="http://www.w3.org/2000/svg"
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
          <div className="absolute flex top-[28rem] mb-10">
            <img src={logo} alt="Logo" width="550" height="550" className="" />
          </div>
          <div className="relative flex mt-12 ms-14">
            <img src={text} alt="Logo" width="400" height="400" className="" />
          </div>
        </div>
        <div className="flex flex-row gap-20 ms-16 mt-7 items-center">
          <Nav className="items-center gap-12">
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
                  width="120"
                  height="120"
                  className="hover:scale-110 transition-transform duration-300"
                />
              </Nav.Link>
            </div>
          </Nav>
        </div>
      </div>
      <div className="ms-[20rem]">
        <div className="w-[41rem] h-[41rem]">
          <Lottie animationData={dog_anima} loop={true} />
        </div>
        <div className="absolute top-[40rem] right-[14rem]">
          <svg
            width="140"
            height="140"
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
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
