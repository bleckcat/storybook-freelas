import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ChipSelector } from "./ChipSelector";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ChipSelector",
  component: ChipSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn(), selected: false },
  argTypes: {
    description: { type: "string" },
    style: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof ChipSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonLabel: Story = {
  args: {
    label: "<Label>",
    selected: false,
    style: { width: "214px" },
  },
};

export const ButtonLabelWithDescription: Story = {
  args: {
    label: "<Label>",
    description: (
      <p>
        Top <b>8%</b> in our industry is in very good shape
      </p>
    ),
    selected: false,
    style: { width: "214px" },
  },
};

export const ButtonDescription: Story = {
  args: {
    description:
      "Lorem ipsum dolor sit amet consectetur. Velit massa quisque tincidunt et sed elit. Vitae enim habitasse interdum sed lectus nam fermentum. Nulla lorem eu arcu et sit arcu pulvinar rutrum mi augue consectetur ipsum sodales purus pellentesque.",
    selected: false,
  },
};
