import React from "react";
// import styles from "./css/heading.module.css";

function Heading({styleConfig}) {
    return <div style={{ fontFamily: styleConfig.font }}>What are you feeling today</div>;
}

export default Heading;
