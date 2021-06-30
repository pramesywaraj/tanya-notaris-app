import Link from "next/link";
import Image from "next/image";

import NavbarLogo from "assets/tanya-notaris-navbar-logo.svg";
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
                <h4>Menu</h4>
            </button>
            <a className="navbar-logo">
                <Image src={NavbarLogo} alt="Tanya Notaris Logo" />
            </a>
            <nav className="smallPhone:invisible desktop:visible">
                <ul className="flex">
                    {links.map(({ link, name }, i) => (
                        <NavbarLinks key={`item-${i}`} link={link} name={name} />
                    ))}
                </ul>
            </nav>
        </header>
    );
}
