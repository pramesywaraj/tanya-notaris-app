/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import NavbarLogo from "assets/tanya-notaris-navbar-logo.svg";
import CloseIcon from "assets/cross.svg";
import colors from "constants/colors";
import { navigationLinks } from "constants/navigation";

import { Button } from "components/Button";

import "components/Navbar/navbar.module.css";

function SidemenuHeader({ handleSideMenu }) {
    return (
        <div className="sidemenu-header">
            <Image
                className="relative navbar-logo-image"
                src={NavbarLogo}
                alt="Tanya Notaris Logo"
            />

            <button className="navbar-menu" onClick={handleSideMenu}>
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

function SidemenuNav({ handleNavigate }) {
    const [links, setLinks] = useState([
        {
            link: "/",
            name: "Home",
        },
        ...navigationLinks,
    ]);

    return (
        <nav className="sidemenu-nav">
            <ul>
                {links.map(({ link, name }, i) => (
                    <li
                        key={`item-${i}`}
                        className={`sidemenu-nav-links ${i === links.length - 1 && "borderless"}`}
                    >
                        <a onClick={(e) => handleNavigate(e, link)}>{name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default function Sidemenu({ handleSideMenu, isShowSideMenu }) {
    const router = useRouter();
    const activeClass = isShowSideMenu ? "active" : "";

    const handleNavigate = (e, link) => {
        e.preventDefault();

        handleSideMenu();
        router.push(link);
    };

    return (
        <Fragment>
            <div className={`sidemenu-backdrop ${activeClass}`} onClick={handleSideMenu} />
            <div className={`sidemenu-container ${activeClass}`}>
                <SidemenuHeader handleSideMenu={handleSideMenu} />
                <div className="sidemenu-content">
                    <SidemenuNav handleNavigate={handleNavigate} />
                    <div className="sidemenu-btn-group">
                        <Button
                            onClick={(e) => handleNavigate(e, "/login")}
                            styles={{ width: "100%" }}
                        >
                            Masuk
                        </Button>
                        <Button
                            onClick={(e) => handleNavigate(e, "/login")}
                            styles={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: `1px solid ${colors.primary}`,
                                color: colors.primary,
                                marginTop: "14px",
                            }}
                        >
                            Daftar
                        </Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
