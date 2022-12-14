import React from "react";
import styles from "./css/layout-free.module.css";

function LayoutFree({styleConfig, children}) {
    return (
        <div
            className={styles.layoutfree}
            style={{
                height: styleConfig.height,
                width: styleConfig.width,
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

export default LayoutFree;
