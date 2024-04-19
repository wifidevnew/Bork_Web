import { Nav, Navbar } from "react-bootstrap";
import love from "../assets/made with lover.svg";
import tele from "../assets/Telegram (2).svg";
import twit from "../assets/TwitterVector (2).svg";


const FooterGlobal = () => {
  return (
    <div className="flex justify-between items-center">
    <div className="flex justify-center items-center mx-auto ms-[10rem]">
      <Navbar.Brand href="#home">
        <img
          src={love}
          alt="Logo"
          className="xl:w-64 w-28 h-auto"
        />
      </Navbar.Brand>
    </div>
    <div className="flex items-center">
      <Nav>
        <Nav.Link href="#home">
          <img
            src={tele}
            alt="Logo"
            className="w-9 h-auto"
          />
        </Nav.Link>
        <Nav.Link href="#features">
          <img
            src={twit}
            alt="Logo"
            className="w-9 h-auto"
          />
        </Nav.Link>
      </Nav>
    </div>
  </div>
  
  );
};

export default FooterGlobal;
