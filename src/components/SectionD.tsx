import bowl from "../assets/bowl.png";
import "../style/SectionD.css";
const SectionD = () => {
  return (
    <div className="w-full justify-center flex 2xl:mt-[7rem] mt-[4rem]">
      <div className="mt-[1rem] 2xl:px-10 mb-10  2xl:flex  2xl:gap-36 mx-auto rounded-3xl border-5 border-solid border-white bg-gradient-to-r from-slate-800 to-transparent hover:scale-110 transition-transform duration-300">
        <div className="space-y-2">
          <div className="px-6 py-8">
            <div className="font-bold 2xl:text-3xl  text-center text-[#24bc94]">Token</div>
          </div>
          <div className="flex justify-center items-center mb-3">
            <img src={bowl} alt="Logo" width="80" height="80" className="" />
          </div>
          <p className="flex flex-col justify-center text-center space-y-2 2xl:text-lg ">
            <span>Total Suply</span>
            <span>One Billion</span>
          </p>
          <p className="flex flex-col justify-center text-center space-y-2 2xl:text-lg">
            <span>Tax</span>
            <span>0/0</span>
          </p>
          <p className="flex flex-col justify-center text-center 2xl:text-lg">
            {/* <span>Router</span> */}
            <span>Uniswap V3</span>
          </p>
        </div>
        <div className="space-y-2 pb-7">
          <div className="px-6 py-8">
            <div className="font-bold 2xl:text-3xl  text-center text-[#24bc94] ">Trust</div>
          </div>
          <div className="flex justify-center items-center mb-3">
            <img src={bowl} alt="Logo" width="80" height="80" className="" />
          </div>
          <p className="flex flex-col justify-center  text-center space-y-2 2xl:text-lg">
            <span>Community driven, because</span>
            <span>your voice matters</span>
          </p>
          <p className="flex flex-col justify-center text-center  space-y-2 2xl:text-lg">
            <span>No false promises, just pure</span>
            <span>transparency and honesty</span>
          </p>
          <p className="flex flex-col justify-center text-center 2xl:text-lg">
            <span>Devotion to the meme</span>
          </p>
        </div>
        <div className="space-y-2 mb-8">
          <div className="px-6 py-8">
            <div className="font-bold 2xl:text-3xl text-center text-[#24bc94]">Security</div>
          </div>
          <div className="flex justify-center items-center mb-3">
            <img src={bowl} alt="Logo" width="80" height="80" className="" />
          </div>
          <p className="flex flex-col justify-center text-center 2xl:text-lg">
            <span>Contract renounced</span>
          </p>
          <p className="flex flex-col justify-center text-center 2xl:text-lg">
            <span>Liquidity locked</span>
          </p>
          <p className="flex flex-col justify-center text-center 2xl:text-lg">
            <span>No presale or ICO</span>
          </p>
        </div>
      </div>
    </div>
    // <div className="xl:flex xl:mt-[10rem] sm:mt-[7rem] gap-28  items-center mt-20 xl:h-[400px] 2xl:w-[70%] 2xl:ms-[28rem] space-y-7 2xl:mt-[3rem] ">
    //   <div
    //     className="xl:w-[18%] w-[65%] 2xl:mt-7  xl:space-y-6 rounded overflow-hidden shadow-lg bg-gradient-to-br from-[#023f5c] to-[#121e2e] justify-center fade-in hover:scale-110 transition-transform duration-300 cursor-pointer items-center"
    //     style={{ height: "100%" }}>
    //     <div className="px-6 py-6">
    //       <div className="font-bold text-3xl text-center">Token</div>
    //     </div>
    //     <div className="flex justify-center items-center mb-3">
    //       <img src={bowl} alt="Logo" width="80" height="80" className="" />
    //     </div>
    //     <p className="flex flex-col justify-center text-center">
    //       <span>Total Suply</span>
    //       <span>One Billion</span>
    //     </p>
    //     <p className="flex flex-col justify-center text-center">
    //       <span>Tax</span>
    //       <span>0/0</span>
    //     </p>
    //     <p className="flex flex-col justify-center text-center">
    //       {/* <span>Router</span> */}
    //       <span>Uniswap V3</span>
    //     </p>
    //   </div>
    //   <div
    //     className="xl:w-[22%] w-[65%]   sm:h-[50%] sm:w-[40%] rounded xl:space-y-6 overflow-hidden shadow-lg bg-gradient-to-br from-[#023f5c] to-[#121e2e] justify-center fade-in hover:scale-110 transition-transform duration-300 cursor-pointer"
    //     style={{ height: "100%" }}
    //   >
    //     <div className="px-6 py-6">
    //       <div className="font-bold text-3xl text-center ">Trust</div>
    //     </div>
    //     <div className="flex justify-center items-center mb-3">
    //       <img src={bowl} alt="Logo" width="80" height="80" className="" />
    //     </div>
    //     <p className="flex flex-col justify-center  text-center">
    //       <span>Community driven, because</span>
    //       <span>your voice matters</span>
    //     </p>
    //     <p className="flex flex-col justify-center text-center ">
    //       <span>No false promises, just pure</span>
    //       <span>transparency and honesty</span>
    //     </p>
    //     <p className="flex flex-col justify-center text-center">
    //       <span>Devotion to the meme</span>
    //     </p>
    //   </div>
    //   <div
    //     className="xl:w-[18%] w-[65%]   sm:h-[50%] sm:w-[40%] rounded xl:space-y-6 overflow-hidden shadow-lg bg-gradient-to-br from-[#023f5c] to-[#121e2e] justify-center fade-in hover:scale-110 transition-transform duration-300 cursor-pointer"
    //     style={{ height: "100%" }}
    //   >
    //     <div className="px-6 py-6">
    //       <div className="font-bold text-3xl text-center ">Security</div>
    //     </div>
    //     <div className="flex justify-center items-center mb-3">
    //       <img src={bowl} alt="Logo" width="80" height="80" className="" />
    //     </div>
    //     <p className="flex flex-col justify-center text-center">
    //       <span>Contract renounced</span>
    //     </p>
    //     <p className="flex flex-col justify-center text-center">
    //       <span>Liquidity locked</span>
    //     </p>
    //     <p className="flex flex-col justify-center text-center">
    //       <span>No presale or ICO</span>
    //     </p>
    //   </div>
    // </div>
  );
};

export default SectionD;
