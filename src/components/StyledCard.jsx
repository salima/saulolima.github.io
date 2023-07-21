import React from "react";
import styled from "styled-components";

// Media
import SL from "../images/logo.svg";
// Components
import { Card } from "react-bootstrap";

const StyledCardComponent = styled.div`
  .card {
    background: ${({ theme }) => (theme.name === "light" ? "" : "var(--primary-light)")};
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 3px 10px rgb(0 0 0 / 0.2)"
        : "0 3px 10px rgb(255 255 255 / 0.2)"};

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;     
    }

    .card-text {
      font-size: 0.9rem;
    }
    
    .card-footer {
      border-top: var(--border);
      background: ${({ theme }) => (theme.name === "light" ? "" : "#717171")};
    }
  }
`;

export default function StyledCard({ image, name, description, url }) {
  return (
    <StyledCardComponent>
      <Card>
        <Card.Img
          variant="top"
          src={image ? image : SL}
          alt={name}
          className="mx-auto"
        />
        <Card.Body className="overflow-auto text-left">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Card.Link href={url} 
            target="_blank"
            className="btn btn-outline-dark">
            {"Quero ler"}
          </Card.Link>
        </Card.Footer>
      </Card>
    </StyledCardComponent>
  );
}