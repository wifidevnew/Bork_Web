import FooterGlobal from "../components/Footer";
import NavbarGlobal from "../components/Navbar";
import SectionA from "../components/SectionA";
import SectionB from "../components/SectionB";
import SectionC from "../components/SectionC";
// import SectionD from "../components/SectionD";
import SectionDa from "../components/SectionDa";
import SectionE from "../components/SectionE";

const Static = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="sticky top-0 z-50 bg-transparent backdrop-blur-xl bg-opacity-20">
          <NavbarGlobal />
        </div>
        <div>
          <div className="relative">
            <SectionA />
            <div className="absolute top-72">{/* <CloudLong /> */}</div>
          </div>
          <div className="mt-32">
            <SectionB />
          </div>
          <div className="relative">
            <div className="z-20">
              <SectionC />
            </div>
            <div className="absolute z-0 -top-10">{/* <CloudLong /> */}</div>
          </div>
          <div className="lg:border-10 mt-10 border-solid border-green-500">
            <SectionDa />
          </div>
          <div className="lg:pb-[59rem] pb-40 lg:pt-40">
            <SectionE />
          </div>
        </div>
      </div>
      <div className="bg-transparent backdrop-blur-xl bg-opacity-20 z-50 bottom-0">
        <FooterGlobal />
      </div>
    </div>
  );
};

export default Static;
