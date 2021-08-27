/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styles from "components/Items/items.module.css";

import { RadioInput } from "components/Input";

export default function FilterItem({ handleChange, isBordered, label, value, name, checked }) {
    const isBorderedStyle = isBordered ? styles["bordered"] : styles["borderless"];

    return (
        <div
            role="radio"
            className={`${styles["filter-item-container"]} ${isBorderedStyle}`}
            onClick={handleChange}
        >
            <RadioInput
                label={label}
                value={value}
                name={name}
                handleChange={handleChange}
                checked={checked}
            />
        </div>
    );
}
