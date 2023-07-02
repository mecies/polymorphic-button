import type { Meta, StoryObj } from "@storybook/react";
import { Plus, Forward } from "lucide-react";

import { Button } from "./button";

const ICONS = {
  Plus,
  Forward,
  None: undefined,
};

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    ref: {
      table: {
        disable: true,
      },
    },
    children: {
      control: "text",
      description: "The button's content.",
    },
    onClick: {
      action: "clicked",
      description: "Fired when the button is clicked.",
    },
    icon: {
      options: Object.keys(ICONS),
      mapping: ICONS,
      control: {
        type: "select",
      },
      description: "Controls the button's icon.",
    },
    as: {
      control: "radio",
      options: ["button", "a"],
      description: "Controls the button's underlying element.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Wesprzyj",
    size: "LARGE",
    variant: "PRIMARY",
    fillContainer: false,
    icon: undefined,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    children: "Udostępnij",
    variant: "SECONDARY",
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    size: "SMALL",
  },
};

export const FillContainer: Story = {
  args: {
    ...Primary.args,
    fillContainer: true,
  },
};

export const WithIconRight: Story = {
  args: {
    ...Primary.args,
    icon: ICONS.Plus,
  },
};

export const WithIconLeft: Story = {
  args: {
    ...Primary.args,
    icon: ICONS.Plus,
    iconPosition: "LEFT",
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const Truncated: Story = {
  args: {
    ...Primary.args,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae.",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "290px" }}>
        <Story />
      </div>
    ),
  ],
};

export const AsLink: Story = {
  args: {
    ...Primary.args,
    as: "a",
    href: "https://www.google.com",
    target: "_blank",
  },
};
