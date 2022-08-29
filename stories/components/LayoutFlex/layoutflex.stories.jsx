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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
        <Card styleConfig={args.cardConfig}/>
    </LayoutFlex>);

export const Dynamic = Template.bind({});

// making controls

Dynamic.args = {
    styleConfig: styleConfig,
    cardConfig: cardStyleConfig
};

export const Default = () => (
    <LayoutFlex
        styleConfig={styleConfig}
    >
        <Card styleConfig={cardStyleConfig}/>
    </LayoutFlex>
);