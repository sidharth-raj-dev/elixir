import React from "react";
import Button from "../../../components/button";

export default {
    title: "Button",
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Dynamic = Template.bind({});

const config = {
    text: "Button"
};

const styleConfig = {
    height: "108px",
    width: "108px",
    border_radius: "9px",
    background: "#e0e0e0",
    font_family: "Poppins",
    font_size: 16,
    color: "#aaaaaa",
    font_weight: 700,
    margin_top: "250px",
    margin_left: "250px",
    margin_bottom: "0px",
    margin_right: "0px"
};
Dynamic.args = { config: config, styleConfig: styleConfig };

export const Default = () => <Button config={config} styleConfig={styleConfig}/>;