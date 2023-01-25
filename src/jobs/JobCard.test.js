import React from "react";
import { render } from "@testing-library/react";
import JobCard from "./JobCard";
import { MemoryRouter } from "react-router";

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <JobCard
        id="1"
        title="Test Job"
        salary="1000"
        companyName="Test Company"
      />
    </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

