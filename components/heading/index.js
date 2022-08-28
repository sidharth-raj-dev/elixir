import React from "react";
// import styles from "./css/heading.module.css";

function Heading({styleConfig}) {
    return (
        <div 
            style={{ 
                fontFamily: styleConfig.font_family,
                fontSize: styleConfig.font_size ,
                color: styleConfig.color ,
                fontWeight: styleConfig.font_weight
            }}>What are you feeling today</div>
    );
}

export default Heading;
