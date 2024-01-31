import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductCard.css";
const ProductCard = ({ product }) => {
  return (
    <Fragment>
      <Link
        to={`/product/${product.id}`}
        className="text-dark text-decoration-none"
      >
        <Card className="custom-card">
          <Card.Img
            variant="top"
            className="py-3 card-img"
            src={product.image}
          />
          <Card.Body className="text-center">
            <Card.Title className="fs-6">
              {product.title.slice(0, 30)} ...
            </Card.Title>
            <Card.Text className="text-capitalize text-decoration-none fs-6">
              {product.category}
            </Card.Text>
            <h5>${product.price}</h5>
            <div className="py-2 d-flex justify-content-center fs-6">
              
              {`(${product.rating.count})`}
            </div>
          </Card.Body>
        </Card>
      </Link>
    </Fragment>
  );
}

export default ProductCard;
