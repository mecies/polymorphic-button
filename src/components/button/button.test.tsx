import React, { createRef } from "react";
import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import * as stories from "./button.stories";
import {
  LINK,
  PRIMARY_BUTTON_TEXT,
  SECONDARY_BUTTON_TEXT,
} from "./button.data";
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
  it("renders with a ref handle", () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Button ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("renders correctly in primary variant", () => {
    render(<Primary />);

    expect(screen.getByText(PRIMARY_BUTTON_TEXT)).toBeInTheDocument();
  });

  it("renders correctly in secondary variant", () => {
    render(<Secondary />);

    expect(screen.getByText(SECONDARY_BUTTON_TEXT)).toBeInTheDocument();
  });

  it("renders correctly in small variant", () => {
    render(<Small />);

    expect(screen.getByText(PRIMARY_BUTTON_TEXT)).toBeInTheDocument();
  });

  it("renders with no accessibility violations", async () => {
    const { container } = render(<Secondary />);

    expect(await axe(container)).toHaveNoViolations();
  });

  it("renders as disabled", () => {
    render(<Disabled />);
    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });

  it("renders with icon on the left", () => {
    render(<WithIconLeft />);

    const button = screen.getByRole("button");
    const icon = screen.getByRole("img");

    expect(icon).toBeInTheDocument();

    // ? In this case we want to check the exact node ordering
    // eslint-disable-next-line testing-library/no-node-access
    expect(button.firstChild).toBe(icon);
  });

  it("renders with icon on the right", () => {
    render(<WithIconRight />);

    const button = screen.getByRole("button");
    const icon = screen.getByRole("img");

    expect(icon).toBeInTheDocument();

    // ? In this case we want to check the exact node ordering
    // eslint-disable-next-line testing-library/no-node-access
    expect(button.lastChild).toBe(icon);
  });

  it("renders as link", () => {
    render(<AsLink />);
    const buttonAsLink = screen.getByRole("link", {
      name: PRIMARY_BUTTON_TEXT,
    });

    expect(buttonAsLink).toBeInTheDocument();
    expect(buttonAsLink).toHaveAttribute("href", LINK);
  });
});
