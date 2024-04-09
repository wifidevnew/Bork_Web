import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.svg";
import buy from '../assets/Buy.svg'
function NavbarGlobal() {
  return (
    <>
      <Navbar
        bg="background-image: url(./public/SpaceBackground.svg);background-repeat: no-repeat; background-size: cover;"
        className="justify-between w-full flex"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="Logo"
              width="150"
              height="150"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="flex items-center gap-16">
            <Nav.Link className="text-white hover:scale-110 transition-transform duration-300" href="#home">
              Twitter
            </Nav.Link>
            <Nav.Link className="text-white hover:scale-110 transition-transform duration-300" href="#features">
              Telegram
            </Nav.Link>
            <Nav.Link className="text-white hover:scale-110 transition-transform duration-300" href="#pricing">
            <img
              src={buy}
              alt="Logo"
              width="100"
              height="100"
              className="d-inline-block align-top"
            />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarGlobal;
