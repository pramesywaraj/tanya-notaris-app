import styles from "components/Search/search.module.css"
import colors from "constants/colors";

import SearchIcon from "assets/icon-search.svg";
import { IconButton } from "components/Button";

export default function Search({ classNames }) {
    return (
        <div className={`${classNames}`}>
            <div className={styles}>
                <input placeholder="Cari Artikel"></input>
                <IconButton 
                    src={SearchIcon}
                    styles={{backgroundColor: colors.primary}}
                />
            </div>
        </div>
    )
}
