import NavbarGlobal from "../components/Navbar";
import SectionA from "../components/SectionA";
import SectionB from "../components/SectionB";

const Static = () => {
  return (
    <div className="">
      <NavbarGlobal />
      <div>
        <SectionA/>
        <SectionB/>
      </div>
    </div>
  );
};

export default Static;
