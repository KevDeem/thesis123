import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import doc1 from "../assets/undraw_doctor_kw-5-l.svg"

export default () => (
  <section className="s2" id="section2">
    <Container>
      <Row className="flex-align">
        <Col md="5" lg="3" className="s2__mob-pic">
        <img
            src= {doc1}
            alt="../assets/undraw_doctors_hwty.svg"
          />
        </Col>
        <Col md="7" lg="5" className="s2__des">
          <h1>
            <span className="bold">Talk To Our Doctors Using Sign Language</span>
          </h1>
          <p>
            Patients who need sign laguages would usually get the short end of the stick due to their
             inability to talk to doctors with sign language, as not a lot of people are trained into 
             speaking with sign languages. With our product, those limitations no longer exist, as we 
             developed a solution which would bring both doctors and patients together, which is to cure 
             the patients from their sickness.
          </p>
          <ul className="s2__list">
            <li><i className="">&#707;</i>  Talk to doctors for free</li>
            <li><i className="">&#707;</i>  Use sign languages</li>
            <li><i className="">&#707;</i>  Get scheduled meetings with doctors</li>
            <li><i className="">&#707;</i>  Get your prescriptions</li>
            <li><i className="">&#707;</i>  And more to come</li>
          </ul>
        </Col>
      </Row>
    </Container>
    <style>{`
        .s2 {
            font-size: 16px;
            margin-top: 4em;
            padding: 7em;
        }
        .s2__mob-pic {
            margin-bottom: 4em;
        }
        @media (min-width: 768px) {
            .s2__mob-pic {
            margin-bottom: 0;
            }
        }
        
        .s2__mob-pic img {
            max-width: 100%;
        }
        .s2__des h1 {
            font-size: 2.6em;
            font-weight: 100;
            letter-spacing: 2.5px;
        }
        .s2__des .bold{
            font-weight: 00;
        }
        .s2__des p {
            font-weight: 100;
            font-size: .95em;
            line-height: 1.8;
            text-align: justify;
        }
        .s2__des ul {
            font-weight: 100;
            font-size: .9em;
            letter-spacing: 1.5px;
            list-style: none;
            padding: 0;
        }
         .s2__list > li {
            padding: .5em 0;
        }
        .s2__list i {
            margin-right: 1em;
        }
        @media (min-width: 768px) {
            .flex-align {
                justify-content: center;
                align-items: center;
            }
        }
    
    `}</style>
  </section>
)
