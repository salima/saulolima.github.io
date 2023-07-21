import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import ContactForm from "./ContactForm";
import {Light, Dark } from "../data";

const StyledSection = styled.section`
  min-height: 89vh;
  padding-top: var(--nav-height);
  background: ${({ theme }) =>
   theme.name === "light"
     ? `url(${Light}) center center fixed no-repeat`
     : `url(${Dark}) center center fixed no-repeat`};
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
