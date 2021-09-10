import Link from "next/link";

export default function NavbarLinks({ style, link, name }) {
    return (
        <li style={style}>
            <Link href={link}>
                <a>{name}</a>
            </Link>
        </li>
    );
}
