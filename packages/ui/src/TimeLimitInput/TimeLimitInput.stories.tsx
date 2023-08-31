import { Meta, StoryObj } from "@storybook/react";
import { TimeLimitInput, TimeLimitInputProps } from ".";

const meta: Meta<TimeLimitInputProps> = {
  title: "Components/TimeLimitInput",
  component: TimeLimitInput,
} as Meta<TimeLimitInputProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "This is Input",
    buttonText: "Button",
    onClick: () => console.log("clicked!!"),
    timerTime: 0,
  },
};
