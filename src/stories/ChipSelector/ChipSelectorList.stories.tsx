import type { Meta, StoryObj } from "@storybook/react";
import ChipSelectorList from "./ChipSelectorList";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ChipSelector/ChipSelectorList",
  component: ChipSelectorList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    items: [
      {
        label: "<Label>",
        selected: false,
      },
      {
        label: "<Label>",
        selected: false,
        disabled: true,
      },
      {
        label: "<Label>",
        selected: true,
      },
      {
        label: "<Label>",
        description: (
          <p>
            Top <b>8%</b> in our industry is in very good shape
          </p>
        ),
        selected: false,
      },
      {
        label: "<Label>",
        description: (
          <p>
            Top <b>8%</b> in our industry is in very good shape
          </p>
        ),
        selected: false,
        disabled: true,
      },
      {
        label: "<Label>",
        description: (
          <p>
            Top <b>8%</b> in our industry is in very good shape
          </p>
        ),
        selected: true,
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur. Velit massa quisque tincidunt et sed elit. Vitae enim habitasse interdum sed lectus nam fermentum. Nulla lorem eu arcu et sit arcu pulvinar rutrum mi augue consectetur ipsum sodales purus pellentesque.",
        selected: false,
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur. Velit massa quisque tincidunt et sed elit. Vitae enim habitasse interdum sed lectus nam fermentum. Nulla lorem eu arcu et sit arcu pulvinar rutrum mi augue consectetur ipsum sodales purus pellentesque.",
        selected: false,
        disabled: true,
      },
      {
        description:
          "Lorem ipsum dolor sit amet consectetur. Velit massa quisque tincidunt et sed elit. Vitae enim habitasse interdum sed lectus nam fermentum. Nulla lorem eu arcu et sit arcu pulvinar rutrum mi augue consectetur ipsum sodales purus pellentesque.",
        selected: true,
      },
    ],
  },
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof ChipSelectorList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
