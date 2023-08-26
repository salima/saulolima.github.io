
import { Link } from "react-scroll";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";

// Components
import { Col, Container, Row } from "react-bootstrap";
import { Spin } from "./globalStyledComponents";
import SocialLinks from "./SocialLinks";
import Background from './background';
import Foto from "../images/saulo-lima.jpg";
import Assinatura from "../images/assinatura.png";
import Autography from '../fonts/Autography-DOLnW.otf';

const StyledHero = styled.header`
    position: relative;
    display: grid;
    place-items: center;
    margin: 0 auto;
    min-height: calc(100vh - var(--nav-height));
  
    
@font-face {
  font-family: 'Autography';
  src: local('Autography'), url('${Autography}') format('opentype');
}

  .profileImg {
    margin: 0rem 0rem 1rem 0rem;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 1);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 1);
  }

  .me-title{
    font-family: degular-display,sans-serif;
    font-weight: ${({ theme }) => (theme.color)};
    font-size: 19px;
    text-align: justify;
    text-justify: inter-word;
    margin: 1rem 0rem 1rem 0rem;

    .assinatura
     {      
      font-size: 50px;
      font-family: Autography;
    }
  }
  .me{
    font-family: degular-display,sans-serif;
    color: ${({ theme }) => (theme.color)};
    font-size: 19px;
    line-height: 22px;
    text-align: justify;
    text-justify: inter-word;
    margin: 0rem 0rem 4rem 0rem;
  }
  .tag{
    font-family: degular-display,sans-serif;
    color: ${({ theme }) => (theme.color)};
    font-size: 15px;
    line-height: 18px;
    text-align: justify;
    text-justify: inter-word;
    margin: 0rem 0rem 4rem 0rem;
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
            <h2 className="me-title">
            Olá, sou <span className="assinatura">Saulo Lima</span>
            </h2>
            <h6 className="me" >
              Tenho mais de 15 anos de experiência no mercado de tecnologia auxiliando profissionais a desenvolver soluções que superem as expectativas de negócio.
              <br/><br/> Juntos, podemos abrir novos horizontes e trilhar um caminho rumo à excelência.
             </h6>
            <div className="d-flex align-items-center justify-content-center">
              <SocialLinks />
            </div>
          </Col>
          <Col className="d-none d-md-block">  
          <img src={Foto}
            width="350" 
            alt="Foto Saulo Lima" 
            className="profileImg">
            </img>
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
