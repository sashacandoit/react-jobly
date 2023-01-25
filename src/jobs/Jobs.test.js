import React from "react";
import { render } from "@testing-library/react";
import Jobs from "./Jobs";


it("renders without crashing", function () {
  render(<Jobs />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Jobs />);
  expect(asFragment()).toMatchSnapshot();
});