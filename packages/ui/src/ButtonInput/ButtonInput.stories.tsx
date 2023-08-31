import { Meta, StoryObj } from "@storybook/react";
import { ButtonInput, ButtonInputProps } from ".";

const meta: Meta<ButtonInputProps> = {
  title: "Components/Button",
  component: ButtonInput,
} as Meta<ButtonInputProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    label: "Label",
    buttonText: "Button",
    placeholder: "This is ButtonInput",
    onClick: () => console.log("clicked!!"),
    width: "320px",
  },
};
