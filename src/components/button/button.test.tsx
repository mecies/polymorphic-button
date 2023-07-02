import React, { createRef } from "react";
import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import * as stories from "./button.stories";

import Button from "./button";

const {
  Primary,
  Secondary,
  Small,
  Disabled,
  WithIconLeft,
  WithIconRight,
  AsLink,
} = composeStories(stories);

describe("Button", () => {
  it("renders correctly with a ref handle", () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Button ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("renders correctly in primary variant", async () => {
    const { container } = render(<Primary />);

    expect(screen.getByText("Wesprzyj")).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });

  it("renders correctly in secondary variant", async () => {
    const { container } = render(<Secondary />);

    expect(screen.getByText("Udostępnij")).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });

  it("renders correctly in small variant", () => {
    render(<Small />);

    expect(screen.getByText("Wesprzyj")).toBeInTheDocument();
  });

  it("renders correctly disabled", () => {
    render(<Disabled />);

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });

  it("renders correctly with icon on the left", () => {
    render(<WithIconLeft />);

    const button = screen.getByRole("button");
    const icon = screen.getByRole("graphics-symbol");

    expect(icon).toBeInTheDocument();

    // ? In this case we want to check the exact node ordering
    // eslint-disable-next-line testing-library/no-node-access
    expect(button.firstChild).toBe(icon);
  });

  it("renders correctly with icon on the right", () => {
    render(<WithIconRight />);

    const button = screen.getByRole("button");
    const icon = screen.getByRole("graphics-symbol");

    expect(icon).toBeInTheDocument();

    // ? In this case we want to check the exact node ordering
    // eslint-disable-next-line testing-library/no-node-access
    expect(button.lastChild).toBe(icon);
  });

  it("renders correctly as link", () => {
    render(<AsLink />);

    const buttonAsLink = screen.getByRole("link", {
      name: "Wesprzyj",
    });

    expect(buttonAsLink).toBeInTheDocument();
    expect(buttonAsLink).toHaveAttribute("href", "https://www.google.com");
  });
});
