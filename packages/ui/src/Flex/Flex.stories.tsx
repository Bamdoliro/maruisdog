import { Meta, StoryObj } from "@storybook/react";
import { Flex, FlexProps } from ".";

const meta: Meta<FlexProps> = {
  title: "Components/Flex",
  component: Flex,
} as Meta<FlexProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "red",
          }}
        />
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "blue",
          }}
        />
      </>
    ),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "0px",
  },
};
