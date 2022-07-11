import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default () => (
  <section className="s3" id="section3">
    <Container>
      <div className="s3__titles">
        <h1> BISINDO Languages</h1>
        <h4>These are the languages that are compatible with our Website. We try to use languages that would be beneficial during a check-up with a Doctor regarding Covid 19 Symptoms.</h4>
      </div>
      <Row className="s3__box-wrapper">
        <Col md="6" lg="3" className="s3__box-item">
          <img
            src={require("../assets/photo-1519720842496-c64a0d0627f9.jfif")}
            alt=""
          />
          <h3>batuk</h3>
          <p>
          </p>
        </Col>
        <Col md="6" lg="3" className="s3__box-item">
          <img
            src={require("../assets/picture.jpg")}
            alt="../assets/picture.jpg"
          />
          <h3>pilek</h3>
        </Col>
        <Col md="6" lg="3" className="s3__box-item">
          <img
            src={require("../assets/picture.jpg")}
            alt=""
          />
          <h3>jelek</h3>
        </Col>
        <Col md="6" lg="3" className="s3__box-item">
          <img
            src={require("../assets/picture.jpg")}
            alt=""
          />
          <h3>Lorem Ipsum</h3>
        </Col>
        <Col md="6" lg="3" className="s3__box-item">
          <img
            src={require("../assets/picture.jpg")}
            alt=""
          />
          <h3>Lorem Ipsum</h3>
        </Col>
        <Col md="6" lg="3" className="s3__box-item">
          <img
            src={require("../assets/picture.jpg")}
            alt=""
          />
          <h3>Lorem Ipsum</h3>
        </Col>
        <Col md="6" lg="3" className="s3__box-item">
          <img
            src={require("../assets/picture.jpg")}
            alt=""
          />
          <h3>Lorem Ipsum</h3>
        </Col>
        <Col md="6" lg="3" className="s3__box-item">
          <img
            src={require("../assets/picture.jpg")}
            alt=""
          />
          <h3>Lorem Ipsum</h3>
        </Col>
        <Col md="6" lg="3" className="d-none d-lg-block">
        </Col>
        <Col md="6" lg="3" className="s3__box-item">
          <img
            src={require("../assets/photo-1519720842496-c64a0d0627f9.jfif")}            alt=""
          />
          <h3>kucing</h3>
        </Col>
        <Col md="6" lg="3" className="s3__box-item">
          <img
            src={require("../assets/photo-1519720842496-c64a0d0627f9.jfif")}            alt=""
          />
          <h3>kucing</h3>
        </Col>
      </Row>
    </Container>
    <style>{`
    .s3 {
        font-size: 16px;
        margin-top: 10em;
    }
    .s3__titles {
        margin-bottom: 2em;
    }
    .s3__titles h1 {
        font-size: 2.6em;
        font-weight: 100;
        text-align: center;
    }
    .s3__titles h4 {
        font-size: .9em;
        font-weight: 100;
        text-align: center;
        margin-top: 1.8em;
        color: hsl(0, 2%, 48%);
    }
    .s3__box-wrapper {

    }
    .s3__box-wrapper {
        text-align: center;
        align: middle;
    }
    .s3__box-item {
        padding: 2em;
        align: middle;
        transition: all .5s;
    }
    .s3__box-item:hover {
        box-shadow: #ece9e9 1px 1px 15px;
    }
    .s3__box-item img {
        width: 200px;
    }
    .s3__box-item h3 {
        font-size: .9em;
        line-height: 2;
        font-weight: 700;
        letter-spacing: 1.5px;
        margin: 1.6em 0;
        text-transform: uppercase;
    }
    .s3__box-item p {
        font-weight: 100;
        font-size: .95em;
        line-height: 2;
        color: dimgray;
    }
    
    `}</style>
  </section>
)
