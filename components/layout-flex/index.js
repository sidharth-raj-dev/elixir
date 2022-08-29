import React from "react";
import styles from "./css/layout-flex.module.css";

function LayoutFlex({styleConfig, children}) {
    return (
        <div
            className={styles.layoutflex}
            style={{
                height: styleConfig.height,
                width: styleConfig.width,
                flexDirection: styleConfig.flex_direction,
                justifyContent: styleConfig.justify_content,
                alignItems: styleConfig.align_items,
                border: `${styleConfig.border} solid ${styleConfig.border_color}`,
                marginTop: styleConfig.margin_top,
                marginLeft: styleConfig.margin_left,
                marginBottom: styleConfig.margin_bottom,
                marginRight: styleConfig.margin_right
            }}
        >
            {children}
        </div>
    );
}

export default LayoutFlex;