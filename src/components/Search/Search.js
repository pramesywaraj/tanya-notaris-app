import { useState } from "react";
import "components/Search/search.module.css";
import colors from "constants/colors";

import SearchIcon from "assets/icon-search.svg";
import { IconButton } from "components/Button";

export default function Search({ classNames, onSearch, onReset, styles }) {
    const [searchText, setSearchText] = useState("");

    const handleChangeText = (e) => {
        setSearchText(e.target.value);

        if (!e.target.value) onReset();
    };

    return (
        <div className={`search-container ${classNames}`} style={{ ...styles }}>
            <input
                placeholder="Cari Artikel"
                className="search-input"
                value={searchText}
                onChange={handleChangeText}
            />
            <IconButton
                src={SearchIcon}
                styles={{
                    backgroundColor: colors.primary,
                    borderBottomLeftRadius: 0,
                    borderTopLeftRadius: 0,
                    display: "flex",
                }}
                onClick={() => onSearch(searchText)}
            />
        </div>
    );
}
