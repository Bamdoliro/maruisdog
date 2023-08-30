import { Meta, StoryObj } from "@storybook/react";
import { UnderlineButton, UnderlineButtonProps } from ".";

const meta: Meta<UnderlineButtonProps> = {
  title: "Components/UnderlineButton",
  component: UnderlineButton,
} as Meta<UnderlineButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    onClick: () => console.log("clicked!!"),
    active: false,
  },
};
