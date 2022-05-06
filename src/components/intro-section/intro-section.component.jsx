import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "./intro-section.styles.css";

const IntroSection = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 id="content-desktop-big" className="intro-desktop-big">
            Hi, I'm Vitaliy <br />
            <span className="span__one">I am a software engineer. </span>
          </h1>
          <h1 id="content-desktop" className="intro-desktop">
            Hi, I'm Vitaliy <br />
            <span className="span__one">I am a software engineer. </span>
          </h1>
          <h1 id="content-mobile" className="intro">
            Hi, I'm Vitaliy <br />
            <span style={{ fontSize: "2rem" }}>I am a software engineer. </span>
          </h1>
          <h1 id="content-mobile-small" className="intro-mobile-small">
            Hi, I'm Vitaliy <br />
            <span>I am a software engineer. </span>
          </h1>
        </Col>
        <Col>
          <Image id="content-desktop-big" className="intro__img-big" fluid="true" src="media/Front_photo.jpg" roundedCircle />
          <Image id="content-desktop" className="intro-img" fluid="true" src="media/Front_photo.jpg" roundedCircle />
          <Image id="content-mobile" className="intro__img-mobile" fluid="true" src="media/Front_photo.jpg" roundedCircle />
          <Image id="content-mobile-small" className="intro__img-tiny" fluid="true" src="media/Front_photo.jpg" roundedCircle />
        </Col>
      </Row>
    </Container>
  );
};

export default IntroSection;
