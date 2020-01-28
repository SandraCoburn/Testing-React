import React from "react";
import axios from "axios";
import { render, fireEvent, waitForDomChange } from "@testing-library/react";
import StarWarsCharacters from "./StarWarsCharacters";
import { getData as mockGetData } from "../api";
// import { renderHook } from "@testing-library/react-hooks";

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
// import Axios from "axios";

jest.mock("../api");

test("Renders the characters names", async () => {
  mockGetData.mockResolvedValueOnce({ count: 87 });

  const { getByText } = render(<StarWarsCharacters />);

  const previousButton = getByText(/previous/i);
  const nextButton = getByText(/next/i);
  fireEvent.click(previousButton);
  fireEvent.click(nextButton);

  //   expect(mockGetData).toHaveBeenCalledTimes(1);
  //   expect(mockGetData).toHaveBeenCalledWith();
});
test("Testing async with api call", async () => {
  mockGetData.mockResolvedValue({
    results: [
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        id: Date.now()
      }
    ]
  });

  expect(mockGetData).toHaveBeenCalledTimes(0);
  const { getByText } = render(<StarWarsCharacters />);

  await (() => expect(getByText(/Luke/i).toBeInDocument()));
});

// test("Test the next button is not disabled", () => {
//   expect(getByTestId("button")).not.toBeDisabled();
// });

test("test test", () => {});
