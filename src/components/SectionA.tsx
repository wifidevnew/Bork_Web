import moon from "../assets/MoonRock.svg"
import logo from "../assets/logo.svg"
import text from "../assets/Thegoodestboy.svg"
import telegram from "../assets/Telegram (2).svg"
import twitter from "../assets/TwitterVector (2).svg"
import buy from "../assets/Buy.svg"
import { Nav } from "react-bootstrap"
import dog_anima from "../assets/doganima.json"
import Lottie from "lottie-react"

const SectionA = () => {
  return (
    <div className="container xl:flex mt-20">
      <div className="mb-10 items-center w-full">
        <div className="mt-16 justify-center flex">
          <div className=" animate-spin-slow justify-center flex ">
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
          <div className="absolute  items-center justify-center xl:top-[28rem]  top-[17rem] sm:top-[20rem] 2xl:mb-1">
            <img
              src={logo}
              alt="Logo"
              className="w-[300px] 2xl:w-[500px] h-auto"
            />
          </div>
          <div className="absolute flex justify-center mt-[33vh] 2xl:mt-[45vh] sm:mt-[37vh]">
            <img
              src={text}
              alt="Logo"
              className="w-[30rem] h-auto"
            />
          </div>
          <div className="absolute flex-row xl:gap-12 items-center mt-[32vh] 2xl:mt-[47vh] sm:mt-[37vh]">
            <Nav className="items-center 2xl:gap-11 sm:mt-6">
              <div className="flex">
                <Nav.Link>
                  <img
                    src={telegram}
                    alt="Logo"
                    className="hover:scale-110 transition-transform duration-300 w-10 h-auto"
                  />
                </Nav.Link>
              </div>
              <div className="flex">
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
              <div className="flex">
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
      </div>
      <div className="relative sm:mt-24 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
        <div className="xl:w-[41rem] xl:h-[41rem] ">
          <Lottie animationData={dog_anima} loop={true} />
        </div>
        <div className="absolute top-10 right-0 sm:right-10 xl:top-20 2xl:mt-[43vh] 2xl:right-28">
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
  )
}

export default SectionA
