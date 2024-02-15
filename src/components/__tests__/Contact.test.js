import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Test cases", () => {
  beforeAll(() => {
    // console.log("Before all");
  });
  beforeEach(() => {
    // console.log("Before all");
  });
  afterAll(() => {
    // console.log("After all");
  });
  afterEach(() => {
    // console.log("After Each");
  });

  test("should load  contact us and check heading", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load button", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});

test("should load  contact us and check heading", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should load button", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
