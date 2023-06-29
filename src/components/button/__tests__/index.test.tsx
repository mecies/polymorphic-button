import React from "react";
import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as stories from "../index.stories";
import { PRIMARY_BUTTON_TEXT, SECONDARY_BUTTON_TEXT } from "../mock-data";

const { Primary, Secondary } = composeStories(stories);

describe("Button", () => {
  describe("PRIMARY", () => {
    it("renders correctly", () => {
      render(<Primary />);

      expect(screen.getByText(PRIMARY_BUTTON_TEXT)).toBeInTheDocument();
    });

    it("has no accessibility violations", async () => {
      const { container } = render(<Primary />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("SECONDARY", () => {
    it("renders correctly", () => {
      render(<Secondary />);

      expect(screen.getByText(SECONDARY_BUTTON_TEXT)).toBeInTheDocument();
    });

    it("has no accessibility violations", async () => {
      const { container } = render(<Secondary />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
