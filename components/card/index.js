import React from "react";
import styles from "./css/card.module.css";

function Card({styleConfig}) {
    return <div className={styles.card} style={{
        height: styleConfig.height,
        width: styleConfig.width,
        borderRadius: styleConfig.border_radius,
        background: styleConfig.background
    }}></div>;
}

export default Card;
