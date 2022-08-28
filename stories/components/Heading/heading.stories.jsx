import React from "react";
import Heading from "../../../components/heading";

export default {
    title: "Heading",
    component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Dynamic = Template.bind({});

const config = {
    font: "Poppins"
};
Dynamic.args = { styleConfig: config };

export const DefaultCard = () => <Heading styleConfig={config}/>;