import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as RB from "react-bootstrap";
import logo from "../../images/icon/logo.png";
import instagram from "../../images/icon/instagramOne.png";
import twitter from "../../images/icon/twitterOne.png";
import discordOne from "../../images/icon/discordOne.png";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <RB.Navbar expand="lg">
      <Container fluid="lg">
        <RB.Navbar.Brand href="#">
          <img className="img-fluid" src={logo} />
        </RB.Navbar.Brand>
        <RB.Navbar.Toggle aria-controls="navbarScroll" />
        <RB.Navbar.Collapse id="navbarScroll">
          <RB.Nav
            className="me-auto my-2 my-lg-0 navS"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to="/">
              <div>Home</div>
            </Link>
            <Link className="nav-link" to="/apePark">
              <div>APES</div>
            </Link>
            <Link className="nav-link"  to="#">
              <div>PARK</div>
            </Link>
            <Link className="nav-link" to="/manifesto">
              <div>MANIFESTO</div>
            </Link>
            <Link className="nav-link"  to="#">
              <div>BLUEPRINT</div>
            </Link>
            <Link className="nav-link" to="#">
              <div>SHOP</div>
            </Link>
            <div className="socialarea">
              <RB.Nav.Link>
                <img src={instagram} />
              </RB.Nav.Link>
              <RB.Nav.Link href="#">
                <img src={twitter} />
              </RB.Nav.Link>
              <RB.Nav.Link href="#">
                <img src={discordOne} />
              </RB.Nav.Link>
            </div>
          </RB.Nav>
        </RB.Navbar.Collapse>
      </Container>
    </RB.Navbar>
  );
}

export default Nav;
