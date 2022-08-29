import React from "react";
import Text from "../../../components/text";

export default {
    title: "components/Text",
    component: Text,
};

const Template = (args) => <Text {...args} />;

export const Dynamic = Template.bind({});

const config = {
    text: "Pleasant"
};

const styleConfig = {
    font_family: "Poppins",
    font_size: 16,
    color: "black",
    font_weight: 500,
    top: "400px",
    left: "332px",
    rotate: "0"
};
Dynamic.args = { styleConfig: config };

export const Default = () => <Text config={config} styleConfig={styleConfig}/>;