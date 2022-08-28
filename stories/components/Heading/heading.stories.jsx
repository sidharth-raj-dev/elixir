import React from "react";
import Heading from "../../../components/heading";

export default {
    title: "Heading",
    component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Dynamic = Template.bind({});
Dynamic.args = { font: "Poppins" };

export const DefaultCard = () => <Heading font="Poppins"/>;