import React from "react";
import LayoutFlex from "../../../components/layout-flex";
import Card from "../../../components/card";

export default {
    title: "components/LayoutFlex",
    component: LayoutFlex,
};

const styleConfig = {
    height: "250px",
    width: "250px",
    flex_direction: "row",
    justify_content: "space-between",
    align_items: "center",
    flex_wrap: "nowrap",
    border: "1px",
    border_color: "#aaaaaa",
    margin_top: "250px",
    margin_left: "250px",
    margin_bottom: "0px",
    margin_right: "0px"
};

const cardStyleConfig = {
    height: "112px",
    width: "112px",
    border_radius: "9px",
    background: "#e0e0e0",
    margin_top: "0px",
    margin_left: "0px",
    margin_bottom: "0px",
    margin_right: "0px"
};

const Template = (args) => (
    <LayoutFlex
        styleConfig={args.styleConfig}
    >
        <Card styleConfig={args.cardStyleConfig}/>
        <Card styleConfig={args.cardStyleConfig}/>
        <Card styleConfig={args.cardStyleConfig}/>
        <Card styleConfig={args.cardStyleConfig}/>
    </LayoutFlex>);

export const MultipleChild = Template.bind({});

// making controls

MultipleChild.args = {
    styleConfig: styleConfig,
    cardStyleConfig: cardStyleConfig
};