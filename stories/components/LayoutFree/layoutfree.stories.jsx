import React from "react";
import LayoutFree from "../../../components/layout-free";
import Card from "../../../components/card";

export default {
    title: "components/LayoutFree",
    component: LayoutFree,
};

// const Template = (args) => <LayoutFree {...args} />;

// export const Dynamic = Template.bind({});

const config = {
    height: "500px",
    width: "500px",
    margin_top: "250px",
    margin_left: "250px",
    margin_bottom: "0px",
    margin_right: "0px"
};

const cardConfig = {
    height: "250px",
    width: "250px",
    border_radius: "50px",
    background: "#e0e0e0",
    margin_top: "0px",
    margin_left: "0px",
    margin_bottom: "0px",
    margin_right: "0px"
};

// Dynamic.args = { styleConfig: config };

export const Default = () => (
    <LayoutFree 
        styleConfig={config}
    >
        <Card styleConfig={cardConfig}/>
    </LayoutFree>
);