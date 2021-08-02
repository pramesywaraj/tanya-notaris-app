import "components/Items/items.module.css";
import { useState } from "react";


export default function FilterItem() {
    const [isShow, setIsShow] = useState(false);

    const handleFilter = () => {
        setIsShow(!isShow);
    }

    const activeClass = isShow ? "active" : "";

    const [links, setLinks] = useState([
        {
            name: "Semua Kategori",
        },
        {
            name: "Kategori 1",
        },
    ]);

    return (
        <nav className="filter-nav">
            <ul>
                {links.map(({ name }, i) => (
                    <li
                        key={`item-${i}`}
                        className={`filter-nav-links ${i === links.length - 1 && "borderless"}`}
                        onClick={handleFilter}
                    >
                        <a>{name}</a>
                        <img src="/arrow-right.svg" alt="Arrow Icon" className="filter-arrow" />
                    </li>
                ))}
            </ul>
        </nav>
    )
}
