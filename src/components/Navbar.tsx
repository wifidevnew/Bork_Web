import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.svg";
import buy from "../assets/Buy.svg";
function NavbarGlobal() {
  return (
    <>
      <Navbar
        bg="background-image: url(./public/SpaceBackground.svg);background-repeat: no-repeat; background-size: cover;"
        className="justify-between w-full flex"
      >
        <div className="flex w-[100%] items-center justify-between">
          <div className="flex xl:ms-[15rem]">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                alt="Logo"
                className=" items-center img-fluid w-16 h-auto"
              />
            </Navbar.Brand>
          </div>
          <div>
            <Nav className="flex items-center xl:gap-24 xl:text-2xl xl:me-[10rem]">
              <Nav.Link
                className="text-white hover:scale-110 transition-transform duration-300"
                href="#home"
              >
                Twitter
              </Nav.Link>
              <Nav.Link
                className="text-white hover:scale-110 transition-transform duration-300"
                href="#features"
              >
                Telegram
              </Nav.Link>
              <Nav.Link
                className="text-white hover:scale-110 transition-transform duration-300"
                href="#pricing"
              >
                <img
                  src={buy}
                  alt="Logo"
                  className="d-inline-block align-center w-20 h-auto"
                />
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default NavbarGlobal;
