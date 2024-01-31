import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TopNavbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import ProductCard from "../../components/product/card/ProductCard";

const CategoryProducts = () => {
  let { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    let data = products.filter((p) => p.category === categoryName);
    setCategoryProducts(data);
  }, [categoryName, products]);
  return (
    <Fragment>
      <TopNavbar />
      <Container>
        <div className="my-4">
          <h4 className="mb-4">
            Produdcts from -{" "}
            <span className="text-capitalize">{categoryName}</span>
          </h4>
          <Row>
            {categoryProducts &&
              categoryProducts.map((product) => {
                return (
                  <Col
                    xs={12}
                    sm={6}
                    md={2}
                    lg={2}
                    className="mb-4"
                    key={product.id}
                  >
                    <ProductCard product={product} />
                  </Col>
                );
              })}
          </Row>
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default CategoryProducts;
