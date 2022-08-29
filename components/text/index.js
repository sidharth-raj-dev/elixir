import React from "react";
import styles from "./css/text.module.css";

function Text({config, styleConfig}) {
    return (
        <div
            className={styles.text}
            style={{
                fontFamily: styleConfig.font_family,
                fontSize: styleConfig.font_size,
                color: styleConfig.color,
                fontWeight: styleConfig.font_weight,
                top: styleConfig.top,
                left: styleConfig.left,
                transform: `rotate(${styleConfig.rotate}deg)`
            }}> {config.text} </div>
    );
}

export default Text;
