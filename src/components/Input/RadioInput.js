import { useState } from "react";
import styles from "components/Input/input.module.css";

export default function RadioInput({ handleChange, value, name, label, checked }) {
    return (
        <label className={styles["radio-input-container"]} htmlFor={value}>
            {label}
            <input
                type="radio"
                name={name}
                id={value} // htlmlFor targets this id.
                onChange={handleChange}
                value={value}
                checked={checked}
            />
            <span className={styles["radio-input-checkmark"]} />
        </label>
    );
}
