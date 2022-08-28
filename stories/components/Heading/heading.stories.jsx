import React from "react";
import Heading from "../../../components/heading";

export default {
    title: "Heading",
    component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Dynamic = Template.bind({});

const config = {
    font_family: "Poppins",
    font_size: 22,
    color: "black",
    font_weight: 500
};
Dynamic.args = { styleConfig: config };

export const Default = () => <Heading styleConfig={config}/>;