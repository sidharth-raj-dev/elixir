import React from "react";
import LayoutFree from "./../../components/layout-free";
import LayoutFlex from "../../components/layout-flex";
import Button from "./../../components/button";
import * as config from "./config/config";

function ButtonPanel() {
    return (
        <LayoutFree styleConfig={config.layoutFreeStyleConfig}>
            <LayoutFlex styleConfig={{...config.layoutFlexStyleConfig}} key="red">
                <Button config={config.buttonConfig} styleConfig={config.buttonStyleConfig} key="1"/>
                <Button config={config.buttonConfig} styleConfig={config.buttonStyleConfig} key="2"/>
                <Button config={config.buttonConfig} styleConfig={config.buttonStyleConfig} key="3"/>
                <Button config={config.buttonConfig} styleConfig={config.buttonStyleConfig} key="4"/>
            </LayoutFlex>
            <LayoutFlex styleConfig={{...config.layoutFlexStyleConfig, top: "0px", left: "256px"}} key="yellow">
                
            </LayoutFlex>
            <LayoutFlex styleConfig={{...config.layoutFlexStyleConfig, top: "256px", left: "0px"}} key="purple">
                
            </LayoutFlex>
            <LayoutFlex styleConfig={{...config.layoutFlexStyleConfig, top: "256px", left: "256px"}} key="green">
                
            </LayoutFlex>
        </LayoutFree>            
    );
}

export default ButtonPanel;