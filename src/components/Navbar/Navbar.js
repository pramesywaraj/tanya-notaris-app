import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import NavbarLogo from "assets/tanya-notaris-navbar-logo.svg";
import IconUser from "assets/icon-user.svg";
import MenuIcon from "assets/mobile-menu-burger.svg";

import NavbarSideMenu from "components/Navbar/Sidemenu";
import { Button } from "components/Button";

import "components/Navbar/navbar.module.css";
import colors from "constants/colors";

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
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const links = [
        {
            link: "/about",
            name: "Mengapa Kami",
        },
        {
            link: "/services",
            name: "Layanan Kami",
        },
        {
            link: "/faq",
            name: "FAQ",
        },
        {
            link: "/articles",
            name: "Artikel Notaris",
        },
    ];
    const loginBtn = <Button styles={{ padding: "12px 55px", fontSize: "18px" }}>Masuk</Button>;
    const logoutBtn = (
        <>
            <div className="flex flex-row mr-4 justify-between">
                <p className="pr-4">Ahmad</p>
                <Image width="30" height="30" src={IconUser} alt="User Account Icon" />
            </div>
            <Button
                onClick={() => { }}
                styles={{
                    height: "56px",
                    width: "168px",
                    backgroundColor: "transparent",
                    border: `1px solid ${colors.primary}`,
                    color: colors.primary,
                    fontSize: "18px",
                }}
            >
                Keluar
            </Button>
        </>
    );

    const handleSideMenu = () => {
        setIsShowSideMenu(!isShowSideMenu);
    };

    return (
        // <header className="relative select-none bg-white desktop:flex desktop:items-stretch w-full">
        <header className="navbar">
            <button className="navbar-menu" onClick={handleSideMenu}>
                <Image className="relative" src={MenuIcon} alt="burger-menu" objectFit="contain" />
            </button>
            <div className="relative navbar-logo">
                <Image src={NavbarLogo} alt="Tanya Notaris Logo" objectFit="contain" />
            </div>
            <NavbarNav links={links} />
            <NavbarSideMenu handleSideMenu={handleSideMenu} isShowSideMenu={isShowSideMenu} />
            <div className="navbar-login-btn">{!isLoggedIn ? logoutBtn : loginBtn}</div>
            <div className="helper-div" />
        </header>
    );
}
