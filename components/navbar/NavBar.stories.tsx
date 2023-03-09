import { Meta, StoryFn } from "@storybook/react";

import NavBar from "./NavBar";
import { ReactNode } from "react";

export default {
  title: "NavBar",
  component: NavBar,
} as Meta<typeof NavBar>;

const Template: StoryFn<typeof NavBar> = (args) => <NavBar />;

export const Default = Template.bind({});
Default.args = {
  to: "/",
  value: "example",
};
