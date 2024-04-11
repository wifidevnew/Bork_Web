import NavbarGlobal from "../components/Navbar";
import SectionA from "../components/SectionA";
import SectionB from "../components/SectionB";
import SectionC from "../components/SectionC";

const Static = () => {
  return (
    <div className="">
      <NavbarGlobal />
      <div>
        <SectionA/>
        <SectionB/>
        <SectionC/>
      </div>
    </div>
  );
};

export default Static;
