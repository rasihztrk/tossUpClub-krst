import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../manifesto/manifesto.css";
import imgRight from "../../images/handImg.png";

function Home() {
  return (
    <>
      <section className="manifesto">
        <Container>
          <Row>
            <Col sm={12} lg={4}>
              <div className="textArea">
                <h1>manifesto</h1>
                <p className="firstText">
                  ape with us
                  <span>
                    but they are <b> angry </b> !
                  </span>
                </p>
                <p className="secondText">
                  Come unrefined, as long as you’re kind. Progress takes
                  patience, our needs are aligned. So bear with the grind,
                  <span className="firstSpan"> kick-back </span> and unwind -
                  Good vibes and community, it’s one hell of a ride!
                  <br />
                  <br />
                  Life in the city, it's okay for me: Work for tomorrow, we all
                  agree. There’s time to sip coffee, dance and roam free, Catch
                  up at the Park, or <span className="secondSpan">relax </span>
                  on a tree.
                  <br />
                  <br />
                  Carefree living, our style is be true Bearing no grudge, no
                  judgement, no spew Live for tonight, the twilight anew Bear
                  with me, friend,
                  <span className="secondSpan"> and I’ll bear with you.</span>
                </p>
              </div>
            </Col>
            <Col sm={8} className="d-none d-lg-block"> 
              <div className="imgArea">
                <img src={imgRight} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
