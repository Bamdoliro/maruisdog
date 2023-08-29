import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from ".";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
} as Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    children: "Button",
    size: "LARGE",
    onClick: () => console.log("clicked!!"),
  },
};

export const Medium: Story = {
  args: {
    children: "Button",
    size: "MEDIUM",
    onClick: () => console.log("clicked!!"),
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    size: "SMALL",
    onClick: () => console.log("clicked!!"),
  },
};

export const AddIcon: Story = {
  args: {
    children: "Button",
    size: "MEDIUM",
    icon: "ADD_ICON",
    onClick: () => console.log("clicked!!"),
  },
};

export const ShortcutsIcon: Story = {
  args: {
    children: "Button",
    size: "MEDIUM",
    icon: "SHORTCUTS_ICON",
    onClick: () => console.log("clicked!!"),
  },
};
