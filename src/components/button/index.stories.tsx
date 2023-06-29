import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";
import { PRIMARY_BUTTON_TEXT, SECONDARY_BUTTON_TEXT } from "./mock-data";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: PRIMARY_BUTTON_TEXT,
  },
};

export const Secondary: Story = {
  args: {
    children: SECONDARY_BUTTON_TEXT,
  },
};
