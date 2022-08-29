import React from "react";
import LayoutFree from "../../../components/layout-free";
import Card from "../../../components/card";

export default {
    title: "components/LayoutFree",
    component: LayoutFree,
};

const styleConfig = {
    height: "500px",
    width: "500px",
    border: "1px",
    border_color: "#aaaaaa",
    margin_top: "250px",
    margin_left: "250px",
    margin_bottom: "0px",
    margin_right: "0px"
};

const cardStyleConfig = {
    height: "250px",
    width: "250px",
    border_radius: "9px",
    background: "#e0e0e0",
    margin_top: "20px",
    margin_left: "20px",
    margin_bottom: "0px",
    margin_right: "0px"
};

const Template = (args) => (
    <LayoutFree
        styleConfig={args.styleConfig}
    >
        <Card styleConfig={args.cardConfig}/>
    </LayoutFree>);

export const Dynamic = Template.bind({});

// making controls

Dynamic.args = {
    styleConfig: styleConfig,
    cardConfig: cardStyleConfig
};

// support for range-sliders, color-picker etc.

// Dynamic.argTypes = {
//     "styleConfig.height" : { control: "range"}
// };

export const Default = () => (
    <LayoutFree
        styleConfig={styleConfig}
    >
        <Card styleConfig={cardStyleConfig}/>
    </LayoutFree>
);