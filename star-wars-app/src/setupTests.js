import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import StarWarsCharacters from "./components/StarWarsCharacters";
import { getData } from "./api";

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

test("Renders the characters component", async () => {
  const { getByText } = render(<StarWarsCharacters />);

  const previousButton = getByText(/previous/i);
});

test("test test", () => {});
