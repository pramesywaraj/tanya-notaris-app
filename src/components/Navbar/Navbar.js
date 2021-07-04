import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarLogo from "assets/tanya-notaris-navbar-logo.svg";
import MenuIcon from "assets/mobile-menu-burger.svg";

import NavbarSideMenu from "components/Navbar/Sidemenu";

import "components/Navbar/navbar.module.css";

function NavbarLinks({ style, link, name }) {
    return (
        <li style={style}>
            <Link href={link}>
                <a>{name}</a>
            </Link>
        </li>
    );
}

function NavbarNav({ links }) {
    const linkStyle = { marginLeft: "2rem" };

    return (
        <nav className="navbar-nav">
            <ul>
                {links.map(({ link, name }, i) => (
                    <NavbarLinks
                        key={`item-${i}`}
                        link={link}
                        name={name}
                        style={i !== 0 ? linkStyle : {}}
                    />
                ))}
            </ul>
        </nav>
    );
}

export default function Navbar() {
    const [isShowSideMenu, setIsShowSideMenu] = useState(false);
    const links = [
        {
            link: "/about",
            name: "Mengapa Kami",
        },
        {
            link: "/about",
            name: "Layanan Kami",
        },
        {
            link: "/about",
            name: "FAQ",
        },
        {
            link: "/about",
            name: "Artikel Notaris",
        },
    ];

    const handleSideMenu = () => {
        setIsShowSideMenu(!isShowSideMenu);
    };

    return (
        // <header className="relative select-none bg-white desktop:flex desktop:items-stretch w-full">
        <header className="navbar">
            <button className="navbar-menu" onClick={handleSideMenu}>
                <Image className="relative" src={MenuIcon} alt="burger-menu" />
            </button>
            <a className="navbar-logo">
                <Image
                    className="relative navbar-logo-image"
                    src={NavbarLogo}
                    alt="Tanya Notaris Logo"
                />
            </a>
            <NavbarNav links={links} />
            <NavbarSideMenu handleSideMenu={handleSideMenu} isShowSideMenu={isShowSideMenu} />
            <div className="helper-div" />
        </header>
    );
}
