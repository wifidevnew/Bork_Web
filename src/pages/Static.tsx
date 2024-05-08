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
    <div className="justify-center bg-[url()]">
      <div className="sticky top-0 z-50 bg-[#0d232d]">
        <NavbarGlobal />
      </div>
      <div>
        <SectionA />
        <SectionB />
        <SectionC />
        <div className="border-10 border-solid border-green-500">
          <SectionDa />
        </div>
        <SectionE />
      </div>
      <div className="bg-[#b7d7fd] z-50">
        <FooterGlobal />
      </div>
    </div>
  );
};

export default Static;
