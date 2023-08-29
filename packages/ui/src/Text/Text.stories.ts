import { color } from "@maru/design-token";
import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "../Text";

const meta: Meta<TextProps> = {
  title: "Components/Text",
  component: Text,
} as Meta<TextProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is Text Component example",
    fontType: "H1",
    color: color.gray900,
  },
};

export const Ellipsis: Story = {
  args: {
    children: "This is Text Component example",
    fontType: "H1",
    color: color.gray900,
    width: "500px",
    ellipsis: true,
  },
};
