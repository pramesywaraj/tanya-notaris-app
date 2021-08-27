/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useState } from "react";
import Image from "next/image";

import CloseIcon from "assets/cross.svg";

import styles from "components/bottomsheet/bottomsheet.module.css";
import { FilterItem } from "components/Items";

function FilterHeader({ handleDisplay }) {
    return (
        <div className={styles["bottomsheet-header"]}>
            <h3>Kategori</h3>
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
    );
}

export default function FilterBottomSheet({ handleDisplay, isShow }) {
    const activeClass = isShow ? styles["active"] : "";

    return (
        <Fragment>
            <div
                className={`${styles["bottomsheet-backdrop"]} ${activeClass}`}
                onClick={handleDisplay}
            />
            <div className={`${styles["bottomsheet-container"]} ${activeClass}`}>
                <FilterHeader handleDisplay={handleDisplay} />
                <div className={styles["bottomsheet-content"]}>
                    <FilterItem />
                </div>
            </div>
        </Fragment>
    );
}
