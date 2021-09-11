/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import CloseIcon from "assets/cross.svg";

import "components/Button/button.module.css";
import { FilterItem } from "components/Items";

function FilterHeader({ handleFilterButton }) {
    return (
        <div className="bottomfilter-header">
            <h3>Kategori</h3>
            <button className="bottomfilter-close" onClick={handleFilterButton}>
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

export default function FilterButton({ handleFilterButton, isShowFilterBottom }) {
    const router = useRouter();
    const activeClass = isShowFilterBottom ? "active" : "";

    return (
        <Fragment>
            <div className={`bottomfilter-backdrop ${activeClass}`} onClick={handleFilterButton} />
            <div className={`bottomfilter-container ${activeClass}`}>
                <FilterHeader handleFilterButton={handleFilterButton} />
                <div className="bottomfilter-content">
                    <FilterItem />
                </div>
            </div>
        </Fragment>
    );
}
