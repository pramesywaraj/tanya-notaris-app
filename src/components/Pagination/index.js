/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from "react";

import styles from "components/Pagination/pagination.module.css";

export default function Pagination({ data = [], onPageChange }) {
    if (data.length === 0) return null;

    const handleSelectPage = (index) => {
        onPageChange(index);
    };

    return (
        <div className={styles["pagination-container"]}>
            {data.map((item, index) => {
                const itemClasses = item.active
                    ? `${styles["pagination-item"]} ${styles["pagination-active"]}`
                    : `${styles["pagination-item"]}`;

                return (
                    <div
                        onClick={() => handleSelectPage(Number(item.label))}
                        key={`pag-item-${index + 1}`}
                        className={itemClasses}
                        role="button"
                    >
                        <p>{item.label}</p>
                    </div>
                );
            })}
        </div>
    );
}
