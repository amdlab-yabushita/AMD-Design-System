import type { Meta, StoryObj } from "@storybook/react";

import ToggleButton from "./ToggleButton";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof ToggleButton> = {
  title: "Example/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
