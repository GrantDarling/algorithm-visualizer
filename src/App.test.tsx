import { render } from "@testing-library/react";
import { Grid } from "./Main/Grid/grid";

describe("renders proper amount of nodes", () => {
  test("(1x3) rows & columns equals 3", () => {
    const { container } = render(<Grid columns={3} rows={1} />);
    const nodes = container.querySelectorAll(".node").length;

    expect(nodes).toBe(3);
  });

  test("(9x9) rows & columns equals 9", () => {
    const { container } = render(<Grid columns={3} rows={3} />);
    const nodes = container.querySelectorAll(".node").length;

    expect(nodes).toBe(9);
  });

  test("(12x4) rows & columns equals 48", () => {
    const { container } = render(<Grid columns={4} rows={12} />);
    const nodes = container.querySelectorAll(".node").length;

    expect(nodes).toBe(48);
  });
});

describe("renders proper amount of columns", () => {
  test("(columns equals 3", () => {
    const { container } = render(<Grid columns={3} rows={1} />);
    const columns = container.querySelectorAll(".column").length;

    expect(columns).toBe(3);
  });

  test("columns equals 6", () => {
    const { container } = render(<Grid columns={6} rows={3} />);
    const columns = container.querySelectorAll(".column").length;

    expect(columns).toBe(6);
  });

  test("columns equals 42", () => {
    const { container } = render(<Grid columns={42} rows={12} />);
    const columns = container.querySelectorAll(".column").length;

    expect(columns).toBe(42);
  });
});
