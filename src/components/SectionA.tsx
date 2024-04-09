import moon from "../assets/MoonRock.svg";
import logo from "../assets/logo.svg";

const SectionA = () => {
  return (
    <div className="">
      <div className="container justify-center items-center ">
        <div className="mt-20 justify-center ">
          <div className="relative ms-24 animate-spin-slow">
            <svg
              width="300"
              height="300"
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
          <div className="absolute flex bottom-2 ">
            <img src={logo} alt="Logo" width="500" height="500" className="" />
          </div>
          <div className="relative flex ms-7 text-green-600 top-9">
            <h3>The Goodest Boy On The BlockChain</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionA;
