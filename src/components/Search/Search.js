import "components/Search/search.module.css"
import colors from "constants/colors";

import SearchIcon from "assets/icon-search.svg";
import { IconButton } from "components/Button";

export default function Search({ classNames, onClick, styles }) {
    return (
        <div className={`search-container ${classNames}`} onClick={onClick} style={{ ...styles }}>
            <input placeholder="Cari Artikel" className="search-input" />
            <IconButton 
                src={SearchIcon}
                styles={{
                    backgroundColor: colors.primary, 
                    borderBottomLeftRadius: 0,
                    borderTopLeftRadius: 0,
                }}
            />
        </div>
    )
}
