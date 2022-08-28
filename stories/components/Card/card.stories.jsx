import React from "react";
import Card from "../../../components/card";

export default {
    title: "Card",
    component: Card,
};

const Template = (args) => <Card {...args} />;

export const Dynamic = Template.bind({});

const config = {
    height: "250px",
    width: "250px",
    border_radius: "50px",
    background: "#e0e0e0",
    margin_top: "250px",
    margin_left: "250px",
    margin_bottom: "0px",
    margin_right: "0px"
};
Dynamic.args = { styleConfig: config };

export const Default = () => <Card styleConfig={config}/>;