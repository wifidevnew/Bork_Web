import { Nav, Navbar } from "react-bootstrap";
import love from "../assets/made with lover.svg";
import tele from "../assets/Telegram (2).svg";
import twit from "../assets/TwitterVector (2).svg";


const FooterGlobal = () => {
  return (
    <div className="flex justify-between items-center">
    <div className="flex justify-center items-center mx-auto">
      <Navbar.Brand href="#home">
        <img
          src={love}
          alt="Logo"
          width="200"
          height="200"
        />
      </Navbar.Brand>
    </div>
    <div className="flex items-center">
      <Nav>
        <Nav.Link href="#home">
          <img
            src={tele}
            alt="Logo"
            width="40"
            height="40"
          />
        </Nav.Link>
        <Nav.Link href="#features">
          <img
            src={twit}
            alt="Logo"
            width="40"
            height="40"
          />
        </Nav.Link>
      </Nav>
    </div>
  </div>
  
  );
};

export default FooterGlobal;
