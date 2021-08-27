import { useState } from "react";
import styles from "components/Card/card.module.css";
import { FilterItem } from "components/Items";
import { SkeletonLoader } from "components/Loader";

export default function CardFilter({
    title,
    options = [],
    handleChange,
    handleSelectAll,
    name,
    isLoading,
    containerStyle,
}) {
    const [selectedOptions, setSelectedOptions] = useState(`all-${name}`);

    const handleSelection = (e) => {
        const value = e.target.value;
        if (value === `all-${name}`) {
            if (handleSelectAll && selectedOptions !== `all-${name}`) handleSelectAll();

            setSelectedOptions(`all-${name}`);
            return;
        }

        setSelectedOptions(value);
        handleChange(value);
    };

    if (!isLoading && options.length === 0) return null;

    const skeleton = (
        <>
            <SkeletonLoader height={25} style={{ marginBottom: 24 }} />
            <SkeletonLoader height={25} style={{ marginBottom: 24 }} />
            <SkeletonLoader height={25} />
        </>
    );

    return (
        <div className={styles["card-filter-container"]} style={{ ...containerStyle }}>
            <h3>{title}</h3>
            <div className={styles["card-filter-list"]}>
                {!isLoading && handleSelectAll && (
                    <FilterItem
                        isBordered
                        handleChange={handleSelection}
                        label="Pilih semua"
                        value={`all-${name}`}
                        checked={selectedOptions === `all-${name}`}
                        name={name}
                    />
                )}
                {!isLoading &&
                    options.map((option, index) => (
                        <FilterItem
                            key={`options-${index + 1}`}
                            isBordered={index !== options.length - 1}
                            handleChange={handleSelection}
                            label={option.name}
                            value={option.name}
                            checked={selectedOptions === option.name}
                            name={name}
                        />
                    ))}

                {isLoading && skeleton}
            </div>
        </div>
    );
}
