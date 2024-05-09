import bowl from "../assets/bowlnew.png"

const SectionDa = () => {
  return (
    <div className="w-full justify-center flex 2xl:mt-[10rem] mt-[4rem]">
      <div className="rounded-3xl  bg-[#d0fcfc] p-16">
        <div className="rounded-3xl  bg-[#e8fcfc] p-10 flex items-center gap-24">
          <div className="">
            <div className="text-[#182148] grid grid-cols-2 grid-rows-3 gap-10 ">
              <div className="flex flex-col">
                <h1 className="-mb-2 font-extrabold">BASE</h1>
                <span className="mt-0">Chain</span>
              </div>
              <div className="flex flex-col">
                <h1 className="-mb-2 font-extrabold">Renounced</h1>
                <span>Contract</span>
              </div>
              <div className="flex flex-col">
                <h1 className="-mb-2 font-extrabold">1B</h1>
                <span>Suply</span>
              </div>
              <div className="flex flex-col">
                <h1 className="-mb-2 font-extrabold">LOCK</h1>
                <span>Liquidity</span>
              </div>
              <div className="flex flex-col">
                <h1 className="-mb-2 font-extrabold">0/0</h1>
                <span>Tax</span>
              </div>
              <div className="flex flex-col">
                <h1 className="-mb-2 font-extrabold">$SKIC</h1>
                <span>Ticker</span>
              </div>
            </div>
            <div className="text-[#182148]">
              <h1 className="-mb-2 font-extrabold mt-10">Contract</h1>
              <span>0xe48C3A357Dc4153bAEf2B86B7fF0d91837477A51</span>
            </div>
          </div>
          <div className="">
            <img src={bowl} alt="" width={350} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDa;
