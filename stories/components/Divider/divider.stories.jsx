import React from "react";
import Divider from "../../../components/divider";

export default {
    title: "components/Divider",
    component: Divider,
};

const Template = (args) => <Divider {...args} />;

export const Dynamic = Template.bind({});

const config = {
    height: "5px",
    width: "317px",
    background: "#aaaaaa",
    top: "400px",
    left: "332px",
    rotate: "0"
};
Dynamic.args = { styleConfig: config };

export const Default = () => <Divider styleConfig={config}/>;