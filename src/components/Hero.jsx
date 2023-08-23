
import { Link } from "react-scroll";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";

// Components
import { Col, Container, Row } from "react-bootstrap";
import { Spin } from "./globalStyledComponents";
import SocialLinks from "./SocialLinks";
import Background from './background';

const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  margin: 0 auto;
  min-height: calc(100vh - var(--nav-height));
  
  .me{
    font-family: degular-display,sans-serif;
    color: ${({ theme }) => (theme.color)};
    font-size: 22px;
    line-height: 34px;    
    text-align: justify;
    text-justify: inter-word;
    margin: 4rem 0rem 4rem 0rem;
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; 
    z-index: -2;
  }

  /* Overlay for contrast */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .down-container {
    height: 10rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    .hero-img {
      animation: ${Spin} infinite 20s linear;
    }
  }

`;

export default function Hero() {
  return (
    <StyledHero>      
      <Background />
      <Container>
        <Row className="align-items-center text-center ">
          <Col>
            <h6 className="me" >
              Você decidiu virar a chave e dar próximo passo na direção do sucesso? Então vou ajudar você a ter resultados incríveis.
              Com mais de 15 anos no mercado de tecnologia ajudando pessoas e times a construirem a <b>soluções</b> que atendam as expectativas do negócio atravez a tecnologia.
             </h6>
            <div className="d-flex align-items-center justify-content-center">
              <SocialLinks />
            </div>
          </Col>
          <Col className="d-none d-md-block">  
          {/* <img src="https://assets.website-files.com/63062614beab2e820ecdb18d/63062614beab2e14c7cdb1a9_foto_8.jpg"          
           width="400" alt="Foto Felippe Percigo" ></img>       */}
          {/* <img
              src={Logo}
              height="100px"
              width="100px"
              alt="Saulo Lima"
            /> */}
          </Col>
        </Row>
        <Row className="align-items-end down-container">
          <Col className="m-4 text-center">
            <Link to={"publicacao"} className="link-icons">
              <Icon icon="fa6-solid:circle-chevron-down" />
            </Link>
          </Col>
        </Row>
      </Container>
    </StyledHero>
  );
}
