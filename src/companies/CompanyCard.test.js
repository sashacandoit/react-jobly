import React from "react";
import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";
import { MemoryRouter } from "react-router";

it("matches snapshot with logo", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <CompanyCard
        handle="test-handle"
        name="Test Company"
        description="This is a test description for Test Company"
        logo_url="https://placeholderlogo.com/img/placeholder-logo-4.png"
      />
    </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot without logo", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <CompanyCard
        handle="test-handle"
        name="Test Company"
        description="This is a test description for Test Company"
      />
    </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});