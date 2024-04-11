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
          <div className="flex ms-[15rem]">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                alt="Logo"
                width="150"
                height="150"
                className=" items-center"
              />
            </Navbar.Brand>
          </div>
          <div>
            <Nav className="flex items-center gap-24 text-2xl me-[10rem]">
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
                  width="90"
                  height="90"
                  className="d-inline-block align-center"
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
