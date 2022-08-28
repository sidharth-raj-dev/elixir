import React from "react";
import styles from "./css/button.module.css";

function Button({config, styleConfig}) {
    return <button className={styles.button} style={{
        height: styleConfig.height,
        width: styleConfig.width,
        borderRadius: styleConfig.border_radius,
        background: styleConfig.background,
        fontFamily: styleConfig.font_family,
        fontSize: styleConfig.font_size,
        color: styleConfig.color,
        fontWeight: styleConfig.font_weight,
        marginTop: styleConfig.margin_top,
        marginLeft: styleConfig.margin_left,
        marginBottom: styleConfig.margin_bottom,
        marginRight: styleConfig.margin_right
    }}> {config.text} </button>;
}

export default Button;
