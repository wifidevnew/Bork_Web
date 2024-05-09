import bowl from "../assets/bowlnew.png";
import bone from "../assets/bone.png";

const SectionDa = () => {
  return (
    <div className="w-full justify-center flex 2xl:mt-[10rem] mt-[4rem]">
      <div className="rounded-3xl  bg-[#d0fcfc] p-16 flex items-center gap-4">
        <div className="rounded-3xl  bg-[#e8fcfc] p-10 items-center gap-24">
          <div className="">
            <div className="text-[#1cbc94] grid grid-cols-2 grid-rows-3 gap-2 ">
              <div className="flex flex-col">
                <h1 className="-mb-2 font-extrabold" style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "#182148", color: "transparent" }}>BASE</h1>
                <span className="mt-0">Chain</span>
              </div>
              <div className="flex flex-col">
                <h1 className="-mb-2 font-extrabold" style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "#182148", color: "transparent" }}>Renounced</h1>
                <span>Contract</span>
              </div>
              <div className="flex flex-col">
                <h1 className="-mb-2 font-extrabold" style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "#182148", color: "transparent" }}>1B</h1>
                <span>Suply</span>
              </div>
              <div className="flex flex-col">
                <h1 className="-mb-2 font-extrabold" style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "#182148", color: "transparent" }}>LOCK</h1>
                <span>Liquidity</span>
              </div>
              <div className="flex flex-col">
                <h1 className="-mb-2 font-extrabold" style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "#182148", color: "transparent" }}>0/0</h1>
                <span>Tax</span>
              </div>
              <div className="flex flex-col">
                <h1 className="-mb-2 font-extrabold" style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "#182148", color: "transparent" }}>$SKIC</h1>
                <span>Ticker</span>
              </div>
            </div>
            <div className="text-[#1cbc94]">
              <h1 className="-mb-2 font-extrabold mt-10" style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "#182148", color: "transparent" }}>Contract</h1>
              <span>0xe48C3A357Dc4153bAEf2B86B7fF0d91837477A51</span>
            </div>
          </div>
        </div>
          <div className="absolute flex justify-center w-[50%] -rotate-12 align-middle">
            <img src={bone} alt="" style={{ opacity: "0.2" }}  />
          </div>
          <div className="">
            <img src={bowl} alt="" width={400} />
          </div>
      </div>
    </div>
  );
};

export default SectionDa;
