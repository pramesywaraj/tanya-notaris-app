/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "components/bottomsheet/bottomsheet.module.css";

import CloseIcon from "assets/cross.svg";

import { FilterItem } from "components/Items";
import { SkeletonLoader } from "components/Loader";

function FilterHeader({ handleDisplay, handleSelectTab, selectedTab, tabs = [] }) {
    return (
        <div className={styles["bottomsheet-header"]}>
            <div className={styles["bottomsheet-close-container"]}>
                <button className={styles["bottomsheet-close"]} onClick={handleDisplay}>
                    <Image
                        className="relative"
                        src={CloseIcon}
                        alt="burger-menu"
                        width="20"
                        height="20"
                    />
                </button>
            </div>
            {tabs.length > 0 && (
                <div className={styles["bottomsheet-tab-container"]}>
                    {tabs.map((item, index) => {
                        const activeStyle =
                            tabs.length > 1 && selectedTab?.id === item.id ? styles["active"] : "";
                        return (
                            <div
                                key={`tab-${index + 1}`}
                                role="button"
                                className={`${styles["bottomsheet-tab"]} ${activeStyle}`}
                                onClick={() => handleSelectTab(index)}
                            >
                                <p>{item.title}</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

function FilterItemList({
    isLoading,
    isShown,
    renderedOptions,
    name,
    handleSelectAll,
    handleSelection,
}) {
    const [selectedOptions, setSelectedOptions] = useState(`mobile-all-${name}`);

    const skeleton = (
        <>
            <SkeletonLoader height={25} style={{ marginBottom: 24 }} />
            <SkeletonLoader height={25} style={{ marginBottom: 24 }} />
            <SkeletonLoader height={25} />
        </>
    );

    const handleSelectOption = (e) => {
        const value = e.target.value;
        setSelectedOptions(value);

        if (value && value.includes("all")) {
            handleSelectAll();
            return;
        }

        handleSelection(e);
    };

    if (!isShown) return null;

    return (
        <div className={styles["bottomsheet-content"]}>
            {handleSelectAll && (
                <FilterItem
                    isBordered
                    handleChange={handleSelectOption}
                    label="Pilih semua"
                    value={`mobile-all-${name}`}
                    checked={selectedOptions === `mobile-all-${name}`}
                    name={name}
                />
            )}

            {!isLoading &&
                renderedOptions.length > 0 &&
                renderedOptions.map((option, index) => {
                    const optionVal = `mobile-${option.name}`;
                    return (
                        <FilterItem
                            key={`option-${index + 1}`}
                            isBordered={index !== renderedOptions.length - 1}
                            handleChange={handleSelectOption}
                            label={option.name}
                            value={optionVal}
                            checked={selectedOptions === optionVal}
                            name={name}
                        />
                    );
                })}

            {(isLoading || renderedOptions.length === 0) && skeleton}
        </div>
    );
}

export default function FilterBottomSheet({
    handleDisplay,
    handleChangeOption,
    isShow,
    isLoading,
    categories = [],
}) {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const [selectedTab, setSelectedTab] = useState({});

    useEffect(() => {
        if (isLoading) return false;
        if (!categories || categories.length === 0) return false;

        setSelectedTab(categories[0]);
    }, [isLoading]);

    const handleSelectTab = (index) => {
        if (index === selectedTabIndex) return false;

        setSelectedTab(categories[index]);
        setSelectedTabIndex(index);
    };

    const handleSelection = (e) => {
        let value = e.target.value;
        if (!value) return false;
        if (value.includes("mobile-")) value = value.replace(/^mobile-+/i, "");

        handleChangeOption(value, selectedTab.id);
    };

    const activeClass = isShow ? styles["active"] : "";

    return (
        <Fragment>
            <div
                className={`${styles["bottomsheet-backdrop"]} ${activeClass}`}
                onClick={handleDisplay}
            />
            <div className={`${styles["bottomsheet-container"]} ${activeClass}`}>
                <FilterHeader
                    tabs={categories}
                    selectedTab={selectedTab}
                    handleDisplay={handleDisplay}
                    handleSelectTab={handleSelectTab}
                />

                {(categories || []).map((items, index) => {
                    return (
                        <FilterItemList
                            key={`item-${index + 1}`}
                            isLoading={isLoading}
                            name={items?.name || null}
                            renderedOptions={items?.options || []}
                            handleSelectAll={() => handleChangeOption("", items.id)}
                            handleSelection={handleSelection}
                            isShown={index === selectedTabIndex}
                        />
                    );
                })}
            </div>
        </Fragment>
    );
}
