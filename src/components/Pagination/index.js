import { useState, useEffect } from "react";

import styles from "components/Pagination/pagination.module.css";

export default function Pagination({ data = [], onPageChange }) {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        if (firstLoad) {
            setFirstLoad(false);

            return;
        }
        onPageChange();
    }, [selectedIndex]);

    if (data.length === 0) return null;

    const handleSelectPage = (index) => {
        setSelectedIndex(index);
    };

    return (
        <div className={styles["pagination-container"]}>
            {data.map((item, index) => {
                if (index === 0 || index === data.length - 1) return null;

                const itemClasses =
                    selectedIndex === index
                        ? `${styles["pagination-item"]} ${styles["pagination-active"]}`
                        : `${styles["pagination-item"]}`;

                return (
                    <div
                        onClick={() => handleSelectPage(index)}
                        key={`pag-item-${index + 1}`}
                        className={itemClasses}
                        style={{ marginLeft: index !== 1 ? 12 : 0 }}
                        role="button"
                    >
                        <p>{item.label}</p>
                    </div>
                );
            })}
        </div>
    );
}
