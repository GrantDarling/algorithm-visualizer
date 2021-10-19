import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Grid } from "./algorithm-visualizer/grid";

describe("renders proper amount of nodes", () => {
  test("(1x3) rows & columns", () => {
    const { container } = render(<Grid rows={1} columns={3} />);
    const nodes = container.querySelectorAll(".node").length;

    expect(nodes).toHaveLength(3);
  });

  test("(9x9) rows & columns", () => {
    const { container } = render(<Grid rows={3} columns={3} />);
    const nodes = container.querySelectorAll(".node").length;

    expect(nodes).toHaveLength(9);
  });

  test("(12x4) rows & columns", () => {
    const { container } = render(<Grid rows={12} columns={4} />);
    const nodes = container.querySelectorAll(".node").length;

    expect(nodes).toHaveLength(48);
  });
});
