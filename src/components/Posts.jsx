import React from "react";
import { useSelector } from "react-redux";
import {
  selectData,
} from "../pages/allPostsSlice";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
// Data
import { filteredPosts } from "../data";

// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import StyledCard from "./StyledCard";

export default function Posts() {
  const [mainPosts, setMainPosts] = React.useState([]);
  const data = useSelector(selectData);

  React.useEffect(
    function () {
      const tempData = [];
      data.forEach((el, i) => (tempData[i] = Object.create(el)));
      if (data.length !== 0 && filteredPosts.length !== 0) {
        const tempArray = tempData.filter((obj) =>
          filteredPosts.includes(obj.name)
        );
        tempArray.length !== 0
          ? setMainPosts([...tempArray])
          : setMainPosts([...tempData.slice(0, 3)]);
      } else {
        setMainPosts([...tempData.slice(0, 3)]);
      }
    },
    [data]
  );

  return (
    <Element name={"Posts"} id="publicacao">
      <section className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2 className="card-title">PUBLICAÇÕES MAIS RECENTES</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          {data.length === 0 && (
            <h2 className="text-center">
              Nenhuma publicação no momento
            </h2>
          )}
          {mainPosts.length !== 0 && (
            <>
              <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                {mainPosts.map(function ({
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
              {data.length > 3 && (
                <Container className="text-center mt-5">
                  <Link to="/Publicacoes">
                    <Button
                      size="lg"
                      variant="outline-dark"
                    >
                      Todas as publicações
                    </Button>
                  </Link>
                </Container>
              )}
            </>
          )}
        </Container>
      </section>
    </Element>
  );
}
