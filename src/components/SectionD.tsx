import bowl from "../assets/bowl.png"
import "../style/SectionD.css"
const SectionD = () => {
  return (
    <div className="xl:flex justify-center xl:gap-16 mt-[7rem] w-full items-center">
      <div className="p-5 xl:w-[18%]  mb-10 ms-10rounded overflow-hidden shadow-lg bg-gradient-to-br from-[#023f5c] to-[#121e2e] justify-center fade-in hover:scale-110 transition-transform duration-300 cursor-pointer items-center">
        <div className="px-6 py-2">
          <div className="font-bold text-lg text-center">Token</div>
        </div>
        <div className="flex justify-center items-center mb-3">
          <img src={bowl} alt="Logo" width="80" height="80" className="" />
        </div>
        <p className="flex flex-col justify-center text-center">
          <span>Total Suply</span>
          <span>One Billion</span>
        </p>
        <p className="flex flex-col justify-center text-center">
          <span>Tax</span>
          <span>0/0</span>
        </p>
        <p className="flex flex-col justify-center text-center">
          <span>Router</span>
          <span>Uniswap V3</span>
        </p>
      </div>
      <div className="p-5 xl:w-[22%]  mb-10 rounded overflow-hidden shadow-lg bg-gradient-to-br from-[#023f5c] to-[#121e2e] justify-center fade-in hover:scale-110 transition-transform duration-300 cursor-pointer">
        <div className="px-6 py-2">
          <div className="font-bold text-lg text-center ">Trust</div>
        </div>
        <div className="flex justify-center items-center mb-3">
          <img src={bowl} alt="Logo" width="80" height="80" className="" />
        </div>
        <p className="flex flex-col justify-center  text-center">
          <span>Community driven, because</span>
          <span>your voice matters</span>
        </p>
        <p className="flex flex-col justify-center text-center ">
          <span>No false promises, just pure</span>
          <span>transparency and honestly</span>
        </p>
        <p className="flex flex-col justify-center text-center">
          <span>Devation to the meme</span>
        </p>
      </div>
      <div className="p-5 xl:w-[18%]  rounded overflow-hidden shadow-lg bg-gradient-to-br from-[#023f5c] to-[#121e2e] justify-center fade-in hover:scale-110 transition-transform duration-300 cursor-pointer">
        <div className="px-6 py-2">
          <div className="font-bold text-lg text-center ">Security</div>
        </div>
        <div className="flex justify-center items-center mb-3">
          <img src={bowl} alt="Logo" width="80" height="80" className="" />
        </div>
        <p className="flex flex-col justify-center text-center">
          <span>Contract renounced</span>
        </p>
        <p className="flex flex-col justify-center text-center">
          <span>Liquidity locked</span>
        </p>
        <p className="flex flex-col justify-center text-center">
          <span>No presale or ICO</span>
        </p>
      </div>
    </div>
  )
}

export default SectionD
