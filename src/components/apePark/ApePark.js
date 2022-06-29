import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./apePark.css";
import "../nav/nav.css";
import imgOne from "../../images/imgOne.png";
import imgTwo from "../../images/imgTwo.png";
import imgThree from "../../images/imgThree.png";
import m1 from "../../images/m1.png";
import m2 from "../../images/m2.png";
import m3 from "../../images/m3.png";
import m4 from "../../images/m4.png";
import m5 from "../../images/m5.png";
import m6 from "../../images/m6.png";

import s1 from "../../images/icon/instagram.png";
import s2 from "../../images/icon/twitterTwo.png";
import s3 from "../../images/icon/discortTwo.png";
import s4 from "../../images/icon/skype.png";

function ApePark() {
  return (
    <>
      <section className="apePark">
        <Container>
          <Row>
            <Col sm={12} lg={4}>
              <div className="apeHoodText">
                <h1>The Park</h1>
                <h2 className="firstH2">A PLACE TO FIT IN.</h2>
                <h2 className="secondH2">A SPACE TO STAND OUT.</h2>
                <p className="text">
                  Come unrefined, as long as you’re kind. Progress takes
                  patience, our needs are aligned. So bear with the grind,
                  kick-back and unwind - Good vibes and community, it’s one hell
                  of a ride!
                </p>
              </div>
            </Col>
          </Row>
          <Row className="imgChangeArea">
            <Col sm={4}>
              <div className="imgArea">
                <img src={imgOne} />
              </div>
            </Col>
            <Col sm={4}>
              <div className="imgArea">
                <img src={imgTwo} />
              </div>
            </Col>
            <Col sm={4}>
              <div className="imgArea">
                <img src={imgThree} />
              </div>
            </Col>
          </Row>
          <Row className="textArea">
            <div className="hood">
              <h1>A SPACE TO STAND OUT.</h1>
            </div>
            <div className="textAreaTwo">
              <p>
                An extraordinary brand built by ordinary people. <br /> <br />
                In a polar world of winners and losers, heroes and villains,
                artists and builders, the middle ground has been left barren.
                That very ground lays the foundation of The Park, where it is
                okay to be okay. <br /> <br />
                An immaculate collection of 10,000 diverse bears that grant you
                exclusive access to The Park, where together, we build a
                virtuous community that will transcend the internet into the
                real world. <br /> <br />
                Through meaningful member-only merch drops, outdoor campaigns,
                exclusive live events and collaborations with indie businesses
                and world-renowned brands, we create a community-centric,
                globally recognised brand that is a force for good.
              </p>
            </div>
          </Row>
          <Row className="team">
            <Col sm={12}>
              <div className="hood">
                <h1>APE WITH US</h1>
              </div>
            </Col>
          </Row>
          <Row className="teamMember">
            <Col sm={12} md={6} lg={4}>
              <div className="monkeyTeam">
                <div className="imgHoodText">
                  <div className="img">
                    <img src={m1} />
                  </div>
                  <div className="hood">
                    <h1>NATOSHI</h1>
                  </div>
                  <div className="position">
                    <h2>CO - FOUNDER</h2>
                  </div>
                  <div className="text">
                    <p>
                      With tertiary degrees in graphic design, art history and
                      branding, Kais brings his strategic experience in building
                      and leading design projects for many global brands
                      including Unicef, United Nations, Unilever, Greenpeace,
                      Ford, Dell and Olympus.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4} className="mt-3 mt-lg-0">
              <div className="monkeyTeam">
                <div className="imgHoodText">
                  <div className="img">
                    <img src={m2} />
                  </div>
                  <div className="hood">
                    <h1>DCT</h1>
                  </div>
                  <div className="position">
                    <h2>DESIGNER</h2>
                  </div>
                  <div className="text">
                    <p>
                      With tertiary degrees in graphic design, art history and
                      branding,
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4} className="mt-3 mt-lg-0">
              <div className="monkeyTeam">
                <div className="imgHoodText">
                  <div className="img">
                    <img src={m3} />
                  </div>
                  <div className="hood">
                    <h1>YAKUZO</h1>
                  </div>
                  <div className="position">
                    <h2>DEVELOPER</h2>
                  </div>
                  <div className="text">
                    <p>
                      With tertiary degrees in graphic design, art history and
                      branding, Kais brings his strategic experience in building
                      and leading design projects for many global.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4} className="mt-3 mt-lg-0">
              <div className="monkeyTeam">
                <div className="imgHoodText">
                  <div className="img">
                    <img src={m4} />
                  </div>
                  <div className="hood">
                    <h1>NATOSHI</h1>
                  </div>
                  <div className="position">
                    <h2>CO - FOUNDER</h2>
                  </div>
                  <div className="text">
                    <p>
                      With tertiary degrees in graphic design, art history and
                      branding, Kais brings his strategic experience in building
                      and leading design projects for many global brands
                      including Unicef, United Nations, Unilever, Greenpeace,
                      Ford, Dell and Olympus.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4} className="mt-3 mt-lg-0">
              <div className="monkeyTeam">
                <div className="imgHoodText">
                  <div className="img">
                    <img src={m5} />
                  </div>
                  <div className="hood">
                    <h1>NATOSHI</h1>
                  </div>
                  <div className="position">
                    <h2>CO - FOUNDER</h2>
                  </div>
                  <div className="text">
                    <p>
                      With tertiary degrees in graphic design, art history and
                      branding, Kais brings his strategic experience in building
                      and leading design projects for many global brands
                      including Unicef, United Nations, Unilever, Greenpeace,
                      Ford, Dell and Olympus.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4} className="mt-3 mt-lg-0">
              <div className="monkeyTeam">
                <div className="imgHoodText">
                  <div className="img">
                    <img src={m6} />
                  </div>
                  <div className="hood">
                    <h1>NATOSHI</h1>
                  </div>
                  <div className="position">
                    <h2>CO - FOUNDER</h2>
                  </div>
                  <div className="text">
                    <p>
                      With tertiary degrees in graphic design, art history and
                      branding, Kais brings his strategic experience in building
                      and leading design projects for many global brands
                      including Unicef, United Nations, Unilever, Greenpeace,
                      Ford, Dell and Olympus.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="bottomSide">
            <Col sm={12}>
              <div className="hood">
                <h1>BUILD WITH US</h1>
              </div>
            </Col>
            <Col sm={12}>
              <div className="textAreaTeam">
                <p>
                  Our brand is built through community, and together, we are
                  creating one of the world’s leading web three brands. Since
                  day one, our community has been adding building blocks to our
                  identity. It’s how WAGBO was born and how #WeAreOkay spread
                  through Twitter like wildfire. The Okay Bear movement is about
                  to take over, and we want you to bear with us.
                </p>
              </div>
              <div className="socialArea">
                <div className="firstArea">
                  <a href="">
                    <div className="twitterText">
                      <p>TWITTER</p>
                    </div>
                  </a>
                  <a href="">
                    <div className="bluePrint">
                      <p>BLUEPRINT</p>
                    </div>
                  </a>
                </div>
                <div className="secondArea">
                  <a href="">
                    <div className="twitterText">
                      <p>MANIFESTO</p>
                    </div>
                  </a>
                  <a href="">
                    <div className="bluePrint">
                      <p>DISCORT</p>
                    </div>
                  </a>
                </div>
                <div className="thirtArea">
                  <a href="">
                    <img src={s1} />
                  </a>
                  <a href="">
                    <img src={s2} />
                  </a>
                  <a href="">
                    <img src={s3} />
                  </a>
                  <a href="">
                    <img src={s4} />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        
      </section>
    </>
  );
}

export default ApePark;
