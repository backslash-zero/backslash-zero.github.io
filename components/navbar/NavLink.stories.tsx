import { ComponentStory, ComponentMeta, Meta, StoryFn } from "@storybook/react";

import { NavLink, NavLinkProps } from "./NavLink";
import { ReactNode } from "react";

export default {
  title: "NavBar/NavLink",
  component: NavLink,
} as Meta<typeof NavLink>;

const Template: StoryFn<typeof NavLink> = (args) => <NavLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  to: "/",
  value: "example",
};

export const Empty = Template.bind({});

Empty.args = {
  to: "/404",
  value: "",
};

export const LongText = Template.bind({});

LongText.args = {
  to: "/404",
  value: "Really long text that will be truncated",
};
