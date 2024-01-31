import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import SingleProductDetails from "./SingleProductDetails";
import { addToCarts } from "../../../features/cart/CartSlice";

// Mock Redux store
const mockStore = configureStore([]);
const initialState = {
  products: [
    {
      id: 1,
      title: "Sample Product",
      category: "Sample Category",
      price: 50,
      description: "This is a sample product.",
      image: "sample-image-url.jpg",
    },
  ],
};
const store = mockStore(initialState);

describe("SingleProductDetails Component", () => {
  test("Renders product details correctly", () => {
    render(
      <Provider store={store}>
        <Router>
          <SingleProductDetails />
        </Router>
      </Provider>
    );

    // Replace the following selectors with actual testable content
    expect(screen.getByText("Sample Product")).toBeInTheDocument();
    expect(screen.getByText("Category: Sample Category")).toBeInTheDocument();
    expect(screen.getByText("Price: $50")).toBeInTheDocument();
    expect(screen.getByText("This is a sample product.")).toBeInTheDocument();
  });

  test("Handles quantity increase and decrease", () => {
    render(
      <Provider store={store}>
        <Router>
          <SingleProductDetails />
        </Router>
      </Provider>
    );

    // Simulate quantity increase
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByDisplayValue("2")).toBeInTheDocument();

    // Simulate quantity decrease
    fireEvent.click(screen.getByText("-"));
    expect(screen.getByDisplayValue("1")).toBeInTheDocument();
  });

  test("Dispatches addToCarts action on Add To Cart button click", () => {
    render(
      <Provider store={store}>
        <Router>
          <SingleProductDetails />
        </Router>
      </Provider>
    );

    // Simulate Add To Cart button click
    fireEvent.click(screen.getByText("Add To Cart"));

    // Replace with actual assertions based on your application logic
    const actions = store.getActions();
    expect(actions).toEqual([addToCarts(/* expected payload here */)]);
  });

  // Additional test cases can be added as needed
});
