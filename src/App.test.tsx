import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the redesigned professional homepage", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /i build the quality bar for systems too large to fake/i, level: 1 })
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /named work, real constraints/i, level: 2 })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /the reason any of this matters/i, level: 2 })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /reach out if the work is real/i, level: 2 })).toBeInTheDocument();
  expect(screen.getByRole("group", { name: /color theme/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /system/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /email andrew.ellis.engineering@gmail.com/i })).toBeInTheDocument();
});
