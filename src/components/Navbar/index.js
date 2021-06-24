import Link from 'next/link';

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
            link: '/login',
            name: 'Login',
        }
    ];

    return (
        <nav className={}>
            <ul>
                {links.map(({ link, name }, i) => <NavbarLinks key={`item-${i}`} link={link} name={name} />)}
            </ul>
        </nav>
    )
}
