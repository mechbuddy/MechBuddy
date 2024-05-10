import React from "react";
import styles from "./AutoSlider.module.css";


function AutoSlider({ children, className }) {


    return (
        <div className={`${styles["slider"]} slider ${className}`}>
            <div className={styles["slide-track"]}>
                {children}
            </div>
        </div>
    )

}

export default AutoSlider;