import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

const Cards = () => {
  // Utilise le state pour stocker les articles et les articles du panier
  const [articles, setArticles] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Charge les articles lors du montage du composant
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      const response = await axios.get(" http://localhost:8090/api/article");
      // Met à jour le state avec les données des articles
      console.log(response);
      setArticles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Container className="py-4">
        <Row>
          {articles.map((article, index) => (
            <Col md={4} key={index}>
              <div
                style={{ textDecoration: "none" }}

              >
                <Card
                  className="mb-4"
                  style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", cursor: "pointer" }}
                >
                  <Card.Img
                    variant="top"
                    src={article.image}
                    style={{ width: "100%", height: "300px", objectFit: "cover" }}
                  />
                  <Card.Body style={{ textAlign: "center" }}>
                    <Card.Title>{article.designation}</Card.Title>
                    <Card.Text>{article.resume}</Card.Text>
                    <Card.Text>Prix : {article.prixTTC} €</Card.Text>
                    <Card.Text>{article.format}</Card.Text>

                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Cards;

