import styled from "styled-components";

import { Element } from "react-scroll";
// Data
import { MyInfos } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import  Sobre from "../images/sobre.jpg";

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 16rem;
    height: 16rem;
  }
`;

export default function AboutMe() {
  return (
    <Element name={"About"} id="sobre">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Sobre</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-left">
              <Container>
                <p>{MyInfos.bio}</p>
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center ">
              <img
                src={Sobre}
                alt="Saulo Lima"
                loading="lazy"
                className="mx-auto rounded"
                style={{ width: "30rem", height: "30rem" }}
              />
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}