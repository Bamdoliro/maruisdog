import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from ".";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
} as Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    size: "MEDIUM",
    option: "PRIMARY",
    onClick: () => console.log("clicked!!"),
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    size: "MEDIUM",
    option: "SECONDARY",
    onClick: () => console.log("clicked!!"),
  },
};

export const Quaternary: Story = {
  args: {
    children: "Button",
    size: "MEDIUM",
    option: "QUATERNARY",
    onClick: () => console.log("clicked!!"),
  },
};

export const Tertiary: Story = {
  args: {
    children: "Button",
    size: "MEDIUM",
    option: "TERTIARY",
    onClick: () => console.log("clicked!!"),
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    size: "MEDIUM",
    option: "DISABLED",
    onClick: () => console.log("clicked!!"),
  },
};

export const Delete: Story = {
  args: {
    children: "Button",
    size: "MEDIUM",
    option: "DELETE",
    onClick: () => console.log("clicked!!"),
  },
};

export const Add: Story = {
  args: {
    children: "Button",
    size: "MEDIUM",
    icon: "ADD_ICON",
    onClick: () => console.log("clicked!!"),
  },
};

export const Shortcuts: Story = {
  args: {
    children: "Button",
    size: "MEDIUM",
    icon: "SHORTCUTS_ICON",
    onClick: () => console.log("clicked!!"),
  },
};
