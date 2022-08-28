import React from "react";
import styles from "./css/button.module.css";

function Button({styleConfig}) {
    return <button className={styles.button} style={{
        height: styleConfig.height,
        width: styleConfig.width,
        borderRadius: styleConfig.border_radius,
        background: styleConfig.background,
        marginTop: styleConfig.margin_top,
        marginLeft: styleConfig.margin_left,
        marginBottom: styleConfig.margin_bottom,
        marginRight: styleConfig.margin_right
    }}></button>;
}

export default Button;
