import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import icon from "../assets/icon.png";
import { motion } from "framer-motion";
const NavigationBar = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="shadow"
      >
        <Navbar
          expand="lg"
          className="bg-body-tertiary"
          bg="dark"
          data-bs-theme="dark"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={icon}
                className="d-inline-block align-top"
                width="50"
                height="50"
              />{" "}
            </Navbar.Brand>
            <Navbar.Brand href="/">CE club</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/">Home</Nav.Link>

                <NavDropdown title="Sections" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#GameDev">GameDev</NavDropdown.Item>

                  <NavDropdown.Item href="#WebDev">
                    WebDev
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#CompEngineering">
                  Computer Engineering
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/">
                    Admin
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.div>
    </>
  );
};

export default NavigationBar;
