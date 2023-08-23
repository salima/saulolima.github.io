import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import ContactForm from "./ContactForm";

const StyledSection = styled.section`
  min-height: 70vh;
  padding-top: 110PX;
`;

export default function Contact() {
  return (
    <Element name={"Contact"} id="falaComigo">          
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
