// import bowl from "../assets/bowlnew.png";
import bone from "../assets/bone.png";
import cld from "../assets/cld1.png";
import gabe from "../assets/gabedog.png";
import logo from "../assets/logo.svg";

const SectionDa = () => {
  return (
    <div className="container relative">
      <div className="w-full -mt-[22px] justify-center lg:flex lg:mt-[8rem] mb-[15rem]">
        <div className="rounded-3xl  bg-[#d0fcfc] lg:p-16 lg:flex items-center gap-4">
          <div className="rounded-3xl  bg-[#e8fcfc] lg:p-10 p-3 items-center gap-24">
            <div className="">
              <div className="text-[#1c3c89] grid grid-cols-2 lg:gap-2 gap-1 ">
                <div className="flex flex-col">
                  <h1 className="-mb-2 " style={{ WebkitTextStrokeWidth: "1.5px", WebkitTextStrokeColor: "#182148", color: "#b4e804" }}>
                    BASE
                  </h1>
                  <span className="mt-0">Chain</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="-mb-2 text-[26px] lg:text-balance" style={{ WebkitTextStrokeWidth: "1.5px", WebkitTextStrokeColor: "#182148", color: "#b4e804" }}>
                    Renounced
                  </h1>
                  <span>Contract</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="-mb-2 " style={{ WebkitTextStrokeWidth: "1.5px", WebkitTextStrokeColor: "#182148", color: "#b4e804" }}>
                    1B
                  </h1>
                  <span>Suply</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="-mb-2 " style={{ WebkitTextStrokeWidth: "1.5px", WebkitTextStrokeColor: "#182148", color: "#b4e804" }}>
                    LOCK
                  </h1>
                  <span>Liquidity</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="-mb-2 " style={{ WebkitTextStrokeWidth: "1.5px", WebkitTextStrokeColor: "#182148", color: "#b4e804" }}>
                    0/0
                  </h1>
                  <span>Tax</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="-mb-2 " style={{ WebkitTextStrokeWidth: "1.5px", WebkitTextStrokeColor: "#182148", color: "#b4e804" }}>
                    $SKIC
                  </h1>
                  <span>Ticker</span>
                </div>
              </div>
              <div className="text-[#1c3c89]">
                <h1 className="-mb-2  mt-10" style={{ WebkitTextStrokeWidth: "1.5px", WebkitTextStrokeColor: "#182148", color: "#b4e804" }}>
                  Contract
                </h1>
                <span>0xe48C3A357Dc4153bAEf2B86B7fF0d91837477A51</span>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-center w-[50%] -rotate-12 align-middle">
            <img src={bone} alt="" style={{ opacity: "0.2" }} />
          </div>
          {/* <div className="">
            <img src={bowl} alt="" width={400} />
          </div> */}
          <div className="flex flex-col justify-center items-center">
            <div className=" items-center justify-center  2xl:mb-1 z-10">
              <img src={gabe} alt="Logo" className="w-[400px] 2xl:w-[35rem] h-auto" />
            </div>
            <div className=" items-center justify-center  2xl:mb-1 z-10">
              <img src={logo} alt="Logo" className="w-[300px] 2xl:w-[400px] h-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 hidden lg:flex">
        <img src={cld} alt="" className="w-[15rem]" />
      </div>
      <div className="absolute right-0 top-2/3 hidden lg:flex">
        <img src={cld} alt="" className="w-[15rem]" />
      </div>
    </div>
  );
};

export default SectionDa;
