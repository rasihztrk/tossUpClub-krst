import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../footer/footer.css";
import dct from "../../images/icon/dct.png";
import lineTwo from "../../images/icon/lineTwo.png";
import logo from "../../images/icon/logo.png";
import bluePrint from "../../images/icon/bluePrint.png";

function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row className="align-items-center">
            <Col sm={12} md={6}>
              <div className="dctLogoText">
                <div className="imgArea">
                  <img className="img-fluid" src={dct} />
                  <img className="img-fluid" src={lineTwo} />
                  <img className="img-fluid" src={logo} />
                </div>
                <div className="textArea">
                  <p>
                    © 2022, Ape Club Nft Collection We're all going to stand for
                    something. <span>DCT</span> Design <span> ©, </span> all
                    right reserved.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <a href="">
                <div className="d-flex w-100 justify-content-end">
                  <img className="img-fluid" src={bluePrint} />
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
