import React from "react";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Media
import GH from "../images/GH.svg";
// Components
import { Card } from "react-bootstrap";

const StyledCardComponent = styled.div`
  .card {
    background: ${({ theme }) => (theme.name === "light" ? "" : "#797B7B")};
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 3px 10px rgb(0 0 0 / 0.2)"
        : "0 3px 10px rgb(255 255 255 / 0.2)"};

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.color};

      &:hover {
        color: var(--primary);
      }
    }
    .card-text {
      font-size: 0.9rem;
    }
    .card-footer {
      border-top: var(--border);
      background: ${({ theme }) => (theme.name === "light" ? "" : "#404040")};
    }
  }
`;

export default function StyledCard({ image, name, description, url }) {
  return (
    <StyledCardComponent>
      <Card>
        <Card.Img
          variant="top"
          src={image ? image : GH}
          alt={name}
          className="mx-auto"
        />
        <Card.Body className="overflow-auto text-left">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {/* {demo !== "" ? (
            <Card.Link href={demo} target="blanck">
              {"Live Demo "}
              <Icon icon="icon-park-outline:code-computer" />
            </Card.Link>
          ) : null} */}
        </Card.Body>
        <Card.Footer className="text-center">
          <Card.Link href={url} target="blanck">
            {"Quero ler  "}
            <Icon icon="icomoon-free:book" />
          </Card.Link>
        </Card.Footer>
      </Card>
    </StyledCardComponent>
  );
}