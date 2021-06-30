import Link from "next/link";
import Image from "next/image";

import NavbarLogo from "assets/tanya-notaris-navbar-logo.svg";
import MenuIcon from "assets/mobile-menu-burger.svg";

import "components/Navbar/navbar.module.css";

function NavbarLinks({ link, name }) {
    return (
        <li>
            <Link href={link}>
                <a>{name}</a>
            </Link>
        </li>
    );
}

export default function Navbar() {
    const links = [
        {
            link: "/login",
            name: "Login",
        },
        {
            link: "/about",
            name: "Tentang Kami",
        },
    ];

    return (
        // <header className="relative select-none bg-white desktop:flex desktop:items-stretch w-full">
        <header className="navbar">
            <button className="navbar-menu">
                <Image className="relative" src={MenuIcon} alt="burger-menu" />
            </button>
            <a className="navbar-logo">
                <Image className="relative" src={NavbarLogo} alt="Tanya Notaris Logo" width="141" height="28" />
            </a>
            <nav className="hidden desktop:block">
                <ul className="flex">
                    {links.map(({ link, name }, i) => (
                        <NavbarLinks key={`item-${i}`} link={link} name={name} />
                    ))}
                </ul>
            </nav>
            <div className="helper-div"></div>
        </header>
    );
}
