import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuthContext } from "contexts/AuthContext";

import NavbarLogo from "assets/tanya-notaris-navbar-logo.svg";
import IconUser from "assets/icon-user.svg";
import MenuIcon from "assets/mobile-menu-burger.svg";

import NavbarLinks from "components/Navbar/NavbarLinks";
import NavbarSideMenu from "components/Navbar/Sidemenu";
import { Button } from "components/Button";

import "components/Navbar/navbar.module.css";
import colors from "constants/colors";
import { LOGGED_OUT } from "constants/reduxConst";
import { navigationLinks } from "constants/navigation";

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

export default function Navbar({ isNoLayout }) {
    const { state, dispatch } = useAuthContext();

    const [isShowSideMenu, setIsShowSideMenu] = useState(false);
    const [links, setLinks] = useState(navigationLinks);
    const [navbarBg, setNavbarBg] = useState(false);

    const router = useRouter();

    const handleSideMenu = () => {
        setIsShowSideMenu(!isShowSideMenu);
    };

    const handleNavigateToLogin = (e) => {
        e.preventDefault();

        router.push("/login");
    };

    const handleChangeNavbarBg = () => {
        if (window.scrollY > 32) {
            setNavbarBg(true);
        } else {
            setNavbarBg(false);
        }
    };

    const handleLogout = async () => {
        await dispatch({
            type: LOGGED_OUT,
        });

        handleNavigateToLogin();
    };

    useEffect(() => {
        window.addEventListener("scroll", handleChangeNavbarBg);

        if (isNoLayout) setNavbarBg(true);

        return () => {
            window.removeEventListener("scroll", handleChangeNavbarBg);
        };
    }, []);

    // Render Section

    const loginBtn = (
        <Button onClick={handleNavigateToLogin} styles={{ padding: "12px 55px", fontSize: "18px" }}>
            Masuk
        </Button>
    );
    const logoutBtn = (
        <>
            <div className="flex flex-row mr-4 justify-between">
                <p className="navbar-name-text pr-4 overflow-hidden">
                    {state?.userData?.name.split(" ")[0] || "User"}
                </p>
                <Image width="30" height="30" src={IconUser} alt="User Account Icon" />
            </div>
            <Button
                classNames="test"
                onClick={handleLogout}
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

    return (
        // <header className="relative select-none bg-white desktop:flex desktop:items-stretch w-full">
        <header className={navbarBg ? "navbar active" : "navbar"}>
            <button className="navbar-menu" onClick={handleSideMenu}>
                <Image className="relative" src={MenuIcon} alt="burger-menu" objectFit="contain" />
            </button>
            <div className="relative navbar-logo">
                <Image src={NavbarLogo} alt="Tanya Notaris Logo" objectFit="contain" />
            </div>
            <NavbarNav links={links} />
            <NavbarSideMenu
                handleSideMenu={handleSideMenu}
                isShowSideMenu={isShowSideMenu}
                handleLogout={handleLogout}
            />
            <div className="navbar-login-btn">{state.isLoggedIn ? logoutBtn : loginBtn}</div>
            <div className="helper-div" />
        </header>
    );
}
