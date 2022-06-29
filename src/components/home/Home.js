import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../home/home.css";
import "../nav/nav.css";
import screenShot from "../../images/icon/screenShot.png";
import upload from "../../images/icon/upload.png";
import line from "../../images/icon/line.png";
import monkey from "../../images/icon/monkeyItem.png";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "Yout Text " + "Here "};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <section className="homeHeader">
        <Container>
          <Row className="align-items-center">
            <Col
              sm={12}
              lg={6}
              className="d-flex justify-content-center justify-content-lg-end order-2 order-lg-1"
            >
              <div className="textArea">
                <div className="firstText">
                  <p>
                    don’t play with our apes, <span>they are angry !</span>
                  </p>
                </div>
                <div className="secondText">
                  <h1>
                    Welcome to the our nft ape collection Enjoy the scenario!
                  </h1>
                </div>
                <div className="thirtText">
                  <h1>
                    <p>Our Apes collection is specially trained for you.</p>
                    <p>
                      Your Ape may be <span> offended </span> by you!
                    </p>
                    <p>
                      You can send us an <span> e-mail </span> to make peace
                      with our Apes.
                    </p>
                  </h1>
                </div>
                <div className="buttonArea">
                  <button>DISCOVER</button>
                </div>
              </div>
            </Col>
            <Col
              sm={12}
              lg={6}
              className="order-1 order-lg-2 d-flex justify-content-center"
            >
              <div className="monkeyBox">
                <div className="textArea">
                  <div className="hood">
                    <h1>
                      Write <br /> Something
                    </h1>
                  </div>
                  <div className="textInput">
                    <input
                      placeholder="Your Text HERE"
                      type="text"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="applybtn">
                    <button>APPLY</button>
                  </div>
                  <div className="imgArea">
                    <img className="line" src={line} />
                    <img className="screenS" src={screenShot} />
                    <img className="upload" src={upload} />
                  </div>
                </div>
                <div className="MonkeyText">
                  <img src={monkey} />
                  <p id="textWrite">
                    {this.state.value}
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} className="order-3  order-lg-3">
              <div className="bottomText">
                <div className="textAreaS">
                  <div className="hood">
                    <h1>
                      don’t play with our apes,<span> they are angry ! </span>
                    </h1>
                    <h1>
                      don’t play with our apes, <span> they are angry ! </span>
                      don’t play with our apes,
                    </h1>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
