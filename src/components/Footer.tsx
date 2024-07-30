import { Nav, Navbar } from "react-bootstrap";
import love from "../assets/made with lover.svg";
import tele from "../assets/Telegram (2).svg";
import twit from "../assets/TwitterVector (2).svg";

const FooterGlobal = () => {
  return (
    <div className="flex justify-between items-center py-5">
      <div className="flex justify-center w-full items-center">
        <Navbar.Brand href="#home">
          <img src={love} alt="Logo" className="xl:w-64 w-28 h-auto" />
        </Navbar.Brand>
      </div>
      <div className="absolute flex items-center -right-0 2xl:me-[9rem]">
        <Nav>
          <Nav.Link href="#home">
            <img src={tele} alt="Logo" className="w-10 h-auto" />
          </Nav.Link>
          <Nav.Link href="#features">
            <img src={twit} alt="Logo" className="w-10 h-auto" />
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default FooterGlobal;
