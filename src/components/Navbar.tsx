import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.svg";
import buy from "../assets/Buy.svg";
function NavbarGlobal() {
  return (
    <>
      <Navbar bg="background-image: url(./public/cloud.png);background-repeat: no-repeat; background-size: cover;" className="justify-between w-full flex">
        <div className="flex w-[100%] items-center justify-between">
          <div className="flex xl:ms-[10rem] ms-[7px]">
            <Navbar.Brand href="#home">
              <img src={logo} alt="Logo" className=" items-center img-fluid w-16 xl:w-36 md:w-32 h-auto" />
            </Navbar.Brand>
          </div>
          <div>
            <Nav className="flex items-center justify-center xl:gap-24 md:gap-9 md:text-xl xl:text-2xl xl:me-[7rem] 2xl:me-[9rem]">
              <Nav.Link className="text-white hover:scale-110 transition-transform duration-300" href="#home">
                Twitter
              </Nav.Link>
              <Nav.Link className="text-white hover:scale-110 transition-transform duration-300" href="#features">
                Telegram
              </Nav.Link>
              <Nav.Link className="text-white hover:scale-110 transition-transform duration-300" href="#pricing">
                {/* <h2 className="lg:text-[36px] text-xs " style={{ WebkitTextStrokeWidth: "1.5px", WebkitTextStrokeColor: "#182148", color: "#b4e804" }}>
                  BUY NOW{" "}
                </h2> */}
                <img src={buy} alt="Logo" className="hover:scale-110 transition-transform duration-300 w-20 xl:w-40 h-auto sm:w-24 md:w-28 2xl:w-38" />
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default NavbarGlobal;
