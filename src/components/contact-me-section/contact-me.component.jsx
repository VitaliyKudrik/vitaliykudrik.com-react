import "./contact-me.styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

const ContactMe = () => {
  const [windowSize, setWindowSize] = useState({ height: window.innerHeight, width: window.innerWidth });

  useEffect(() => {
    setWindowSize(getWindowWidth());
  }, [windowSize]);

  window.addEventListener("resize", setWindowSize);

  function getWindowWidth() {
    return window.innerWidth;
  }
  let size = windowSize < 1024 ? "-mobile" : "";
  return (
    <section className="section" id="section--2">
      <div className={`section__container-contact${size}`}>
        Contact Me
        <Container>
          <Row>
            <Col>
              <i className="fa fa-envelope"></i>
              <button style={{ marginLeft: "1%", border: "none" }}>vitaliykudrik@yahoo.com</button>
            </Col>
            <Col>
              <i className="fa fa-linkedin-square" style={{ color: "blue" }}></i>
              <a href="https://www.linkedin.com/in/vitaliy-kudrik-202147192/" style={{ textDecoration: "none", color: "black", marginLeft: "1%" }}>
                linkedin.com/in/vitaliy-kudrik-202147192/
              </a>
            </Col>
            <Col>
              <i className="fa fa-github" style={{ color: "navy" }}></i>
              <a href="https://github.com/VitaliyKudrik" style={{ textDecoration: "none", color: "black", marginLeft: "1%" }}>
                github.com/VitaliyKudrik
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ContactMe;
