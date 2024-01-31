import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer"
import TopNavbar from "../components/header/Navbar"
import CartItemCard from "../components/cart/CartItemcard"
import {
  subTotalPrice,
  totalPrice,
  totalTax,
} from "../features/cart/CartSelector";
import { cartState } from "../features/cart/CartSlice";

function applyDiscount(subTotal, cartItems) {
  const discountThreshold1 = 3;
  const discountThreshold2 = 2;
  const discountPercentage1 = 0.5; // 50% discount
  const discountPercentage2 = 0.3; // 30% discount

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  if (totalItems >= discountThreshold1) {
    // Apply 50% discount
    return subTotal * (1 - discountPercentage1);
  } else if (totalItems >= discountThreshold2) {
    // Apply 30% discount
    return subTotal * (1 - discountPercentage2);
  } else {
    // No discount
    return subTotal;
  }
}

function Cart() {
  let state = useSelector((state) => state);
  let { carts } = useSelector(cartState);
  const subTotal = subTotalPrice(state);
  const tax = totalTax(state);
  const totalAmmount = totalPrice(state);

  const discountedTotal = applyDiscount(subTotal, carts);

  console.log(carts, carts.length,discountedTotal,"123")

  return (
    <Fragment>
      <TopNavbar />
      <Container>
        <Row>
          {!carts.length && (
            <div className="w-100 my-5 text-center text-danger">
              <h3>
                You don't have any product in carts.{" "}
                <Link to="/products" className="text-dark text-decoration-none">
                  {" "}
                  Go for shoping{" "}
                </Link>
              </h3>
            </div>
          )}
          {carts.length > 0 &&
            carts.map((c) => {
              return (
                <Col sm="12" lg="12" key={c.id}>
                  <CartItemCard item={c} />
                </Col>
              );
            })}
        </Row>

        {carts.length > 0 && (
          <div className="my-3">
            <Card>
              <Card.Body>
                <div className="d-flex justify-content-around ">
                  <div className="w-100 align-middle">
                    <h5 className="align-middle d-inline">
                      Subtotal: ${subTotal}
                    </h5>
                  </div>
                  <div className="w-100 ">
                    <h5 className="align-middle d-inline">Tax(2%): ${tax}</h5>
                  </div>
                  <div className="w-100 align-middle">
                    <h5 className="align-middle d-inline">
                      Total Price: ${totalAmmount.toFixed(2)}
                    </h5>
                  </div>
                  <div className="w-100 align-middle">
                  {carts.length == 1 &&<h5 className="align-middle d-inline">
                    Discounted Total: ${discountedTotal}
                  </h5>}
                </div>
                  <div className="w-100 text-center">
                    <Button variant="dark" className="align-middle d-inline">
                      Checkout
                    </Button>
                  </div>
                 
                </div>
                <div className="text-center mt-3">
                {carts.length == 1 && (
                  <div className="discount-text">
                    Buy 3 or more items and get a 50% discount!
                  </div>
                )}
                {carts.length === 1 && (
                  <div className="discount-text">
                    Buy 2 items and get a 30% discount!
                  </div>
                )}
                   {carts.length === 1 && (
                  <div className="discount-text">
                    Buy 1 items and get a 10% discount!
                  </div>
                )}
             </div>
              </Card.Body>
            </Card>
          </div>
        )}
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Cart;
