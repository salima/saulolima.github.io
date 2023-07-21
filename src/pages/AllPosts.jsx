import React from "react";
import { useSelector } from "react-redux";
import { selectData as homeData } from "../pages/homeSlice";
import { selectData } from "./allPostsSlice";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Components
import {
  Col,
  Container,
  FormControl,
  InputGroup,
  Pagination,
  Row,
} from "react-bootstrap";
import {
  BackToTop,
  Title
} from "../components/globalStyledComponents";
import StyledCard from "../components/StyledCard";
import Footer from "../components/Footer";

const StyledSection = styled.section`
  min-height: calc(100vh - var(--min-footer-height) - var(--nav-height));

  .input-group {
    max-width: 90vw;
  }

  .row {
    min-height: var(--card-height);
  }
  
  @media screen and (min-width: 800px) {
    .input-group {
      width: 75%;
    }
  }
`;

export default function AllPosts() {
  const [searchInput, setSearchInput] = React.useState("");
  const [filteredResults, setFilteredResults] = React.useState([]);
  const [pageItems, setPageItems] = React.useState([]);
  const [activePage, setActivePage] = React.useState(1);
  const data = useSelector(selectData);
  const { name } = useSelector(homeData);
  
  React.useEffect(
    function () {
      document.title = `${name} | Todas as publicações`;
    },
    [name]
  );  

  React.useEffect(
    function () {
      if (searchInput !== "") {
        const filteredData = data.filter((item) => {
          return item.name?.toLowerCase().includes(searchInput?.toLowerCase());
        });
        const tempPageItems = [];
        for (
          let number = 1;
          number <= Math.ceil(filteredData.length / 6);
          number++
        ) {
          tempPageItems.push(
            <Pagination.Item
              key={number}
              active={number === activePage}
              onClick={() => setActivePage(number)}
            >
              {number}
            </Pagination.Item>
          );
          setPageItems([...tempPageItems]);
        }
        if (activePage === 1) {
          setFilteredResults(filteredData.slice(0, 6));
        } else {
          setFilteredResults(
            filteredData.slice((activePage - 1) * 6, (activePage - 1) * 6 + 6)
          );
        }
      } else {
        const tempPageItems = [];
        for (let number = 1; number <= Math.ceil(data.length / 6); number++) {
          tempPageItems.push(
            <Pagination.Item
              key={number}
              active={number === activePage}
              onClick={() => setActivePage(number)}
            >
              {number}
            </Pagination.Item>
          );
          setPageItems([...tempPageItems]);
        }
        if (activePage === 1) {
          setFilteredResults(data.slice(0, 6));
        } else {
          setFilteredResults(
            data.slice((activePage - 1) * 6, (activePage - 1) * 6 + 6)
          );
        }
      }
    },
    [searchInput, data, pageItems.length, activePage]
  );

  React.useEffect(
    function () {
      // Anytime the search input changes set the active page back to 1
      setActivePage(1);
    },
    [searchInput]
  );
    return (
    <>
      <main>
        <StyledSection className="d-flex flex-column justify-content-center">
          <Container className="d-flex">
            <Title>
              <h2>
                Todas publicações
              </h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Container>
            <InputGroup className="mx-auto mb-3">
              <InputGroup.Text id="search">
                <Icon icon="ic:round-search" />
              </InputGroup.Text>
              <FormControl
                placeholder="Descrição da publicação"
                aria-label="Buscar publicações"
                aria-describedby="buscar"
                onChange={(e) => setSearchInput(e.currentTarget.value)}
              />
            </InputGroup>
            <Row
              xs={1}
              md={2}
              lg={3}
              className="g-4 justify-content-left row"
            >
              {searchInput.length > 0
                ? filteredResults.map(function ({
                    id,
                    image,
                    name,
                    description,
                    url,
                  }) {
                    return (
                      <Col key={id}>
                        <StyledCard
                          image={image}
                          name={name}
                          description={description}
                          url={url}
                        />
                      </Col>
                    );
                  })
                : filteredResults.map(function ({
                    id,
                    image,
                    name,
                    description,
                    url,
                  }) {
                    return (
                      <Col key={id}>
                        <StyledCard
                          image={image}
                          name={name}
                          description={description}
                          url={url}
                        />
                      </Col>
                    );
                  })}
            </Row>
            <Container className="d-flex justify-content-center mt-4">
              {pageItems.length <= 2 ? (
                <Pagination className="mb-5">
                  {pageItems}
                </Pagination>
              ) : (
                <Pagination className="mb-5">
                   {activePage > 1 ? (
                    <Pagination.Prev
                      onClick={() =>
                        activePage === 1
                          ? setActivePage(pageItems.length)
                          : setActivePage(activePage - 1)
                      }
                    />
                  ) : ("")}
                  {activePage > 1 ? ( pageItems[0] ) : ("")}

                  {activePage > 1  ? ( <Pagination.Ellipsis /> ) : ("")}
                  
                  <Pagination.Item active={true}>
                    {activePage}
                  </Pagination.Item>

                  {activePage < pageItems.length -1  ? ( <Pagination.Ellipsis /> ) : ("")}

                  {activePage < pageItems.length ? ( pageItems[pageItems.length - 1] ) : ("")}   

                  {activePage < pageItems.length? (                    
                    <Pagination.Next
                    onClick={() =>
                      activePage === pageItems.length
                        ? setActivePage(1)
                        : setActivePage(activePage + 1)
                    }
                  />
                  ) : ("")}
                </Pagination>
              )}
            </Container>
          </Container>
        </StyledSection>
      </main>
      <BackToTop home={"Home"} />
      <Footer />
    </>
  );  
}