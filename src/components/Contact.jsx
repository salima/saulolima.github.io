import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import ContactForm from "./ContactForm";
import { BackgroundContact,BackgroundContactOff } from "../data";

const StyledSection = styled.section`
  min-height: 89vh;
  padding-top: var(--nav-height);
  color: #ffffff;
  
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${({ theme }) => (theme.name === "light" ? BackgroundContact : BackgroundContactOff)}) ;
  background-size: cover;
`;

export default function Contact() {
  return (
    <Element name={"Contact"} id="contato">
      <StyledSection className="d-flex flex-column">
        <Container className="d-flex">
          <Title>
            <h2>Entre em contato</h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <Container>
          <ContactForm />
        </Container>
      </StyledSection>
    </Element>
  );
}
