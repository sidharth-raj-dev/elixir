import React from "react";
import styles from "./css/card.module.css";

function Card({styleConfig}) {
    return <div className={styles.card} style={{
        height: styleConfig.height,
        width: styleConfig.width,
        borderRadius: styleConfig.border_radius,
        background: styleConfig.background,
        marginTop: styleConfig.margin_top,
        marginLeft: styleConfig.margin_left,
        marginBottom: styleConfig.margin_bottom,
        marginRight: styleConfig.margin_right
    }}></div>;
}

export default Card;
