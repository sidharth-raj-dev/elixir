import React from "react";
import styles from "./css/divider.module.css";

function Divider({styleConfig}) {
    return <div className={styles.divider} style={{
        height: styleConfig.height,
        width: styleConfig.width,
        background: styleConfig.background,
        top: styleConfig.top,
        left: styleConfig.left,
        transform: `rotate(${styleConfig.rotate}deg)`
    }}></div>;
}

export default Divider;
