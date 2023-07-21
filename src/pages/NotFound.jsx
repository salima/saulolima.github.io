import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";

// Components
import { Container } from "react-bootstrap";
import { Spin } from "../components/globalStyledComponents";

const StyledNotFound = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--nav-height));

  span {
    font-size: 5rem;
  }

  p {
    font-size: 2rem;
  }

  .logo-img {
    width: 10rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    img {
      animation: ${Spin} infinite 20s linear;
    }
  }
`;

export default function NotFound() {
  const { name } = useSelector(selectData);

  React.useEffect(
    function () {
      document.title = `Saulo Lima`;
    },
    [name]
  );

  return (
    <>
      <StyledNotFound>
        <Container className="d-flex justify-content-center">
         <span>(^-^*)</span>
        </Container>
        <p className="text-center">Desculpe, página não encontrada...</p>
      </StyledNotFound>
    </>
  );
}
