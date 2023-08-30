import { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from ".";

const meta: Meta<InputProps> = {
  title: "Components/Input",
  component: Input,
} as Meta<InputProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "This is Input",
  },
};

export const Number: Story = {
  args: {
    label: "Label",
    placeholder: "This is Input",
    option: "NUMBER",
  },
};

export const Preview: Story = {
  args: {
    label: "Label",
    placeholder: "This is Input",
    option: "PREVIEW",
  },
};

export const Search: Story = {
  args: {
    label: "Label",
    placeholder: "This is Input",
    option: "SEARCH",
  },
};
