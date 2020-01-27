import React from "react";
import { render, fireEvent, wait, getByTestId } from "@testing-library/react";
import StarWarsCharacters from "./StarWarsCharacters";
import { getData as mockGetData } from "../api";

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import Axios from "axios";

jest.mock("../api");

test("Renders the characters component", async () => {
  mockGetData.mockResolvedValueOnce({ count: 87 });

  const { getByText } = render(<StarWarsCharacters />);

  const previousButton = getByText(/previous/i);
  const nextButton = getByText(/next/i);
  fireEvent.click(previousButton);
  fireEvent.click(nextButton);

  //   expect(mockGetData).toHaveBeenCalledTimes(1);
  //   expect(mockGetData).toHaveBeenCalledWith(URL);
});

// test("Test the next button is not disabled", () => {
//   expect(getByTestId("button")).not.toBeDisabled();
// });

// test("Do buttons have style?", () => {
//   const button = getByTestId("button:disabled");
//   expect(button).toHaveStyle("cursor: now-allowed");
// });

test("test test", () => {});
