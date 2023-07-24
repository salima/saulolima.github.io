import React from "react";
import styled from "styled-components";

// Media
import SL from "../images/logo.svg";
// Components
import { Card } from "react-bootstrap";

const StyledCardComponent = styled.div`
  .card {
    border-radius: 20px;
    background: ${({ theme }) => (theme.background)};
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 3px 10px rgb(0 0 0 / 0.2)"
        : "0 3px 10px rgb(0 0 0 / 0.2)"};
      &:hover {
        border-radius: 20px;
        background: #ffffff;
        box-shadow: none;
        .card-link {          
          color:${({ theme }) => (theme.background)};
        }
        .img{
          -webkit-mask-image: none;
        }
      }
    
    .card-link {      
      text-decoration: none;
      font-size: 1.5rem;         
      color: #ffffff;    
    }

    .img{
      -webkit-mask-image: linear-gradient(to top, transparent 10%, black 100%);
      background-image: linear-gradient(180deg,transparent,#061726 99%);
    }

    .card-text {      
      font-size: 0.9rem;
    }
    
    .card-footer {
      border-top: var(--border);
      background: ${({ theme }) => (theme.background)};    
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
          className="img mx-auto"
        />
        <Card.Link href={url} target="_blank">
          <Card.Body className="overflow-auto text-left">        
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>          
          </Card.Body>
        </Card.Link>
        {/* <Card.Footer className="text-left">
          <Card.Link href={url} 
            target="_blank">
            {"Quero ler"}
          </Card.Link>
        </Card.Footer> */}
      </Card>
    </StyledCardComponent>
  );
}