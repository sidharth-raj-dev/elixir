import React from "react";
import styles from "./css/heading.module.css";

function Heading({styleConfig}) {
    return (
        <div
            className={styles.heading}
            style={{
                fontFamily: styleConfig.font_family,
                fontSize: styleConfig.font_size,
                color: styleConfig.color,
                fontWeight: styleConfig.font_weight,
                marginTop: styleConfig.margin_top,
                marginLeft: styleConfig.margin_left,
                marginBottom: styleConfig.margin_bottom,
                marginRight: styleConfig.margin_right
            }}>What are you feeling today</div>
    );
}

export default Heading;
