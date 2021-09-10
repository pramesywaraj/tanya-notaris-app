import Image from "next/image";
import style from "components/Button/button.module.css";

export default function IconButton({ onClick, styles, src, alt, className }) {
    return (
        <button
            className={`${style["btn"]} ${style["btn-iconed"]} ${className || ""}`}
            onClick={onClick}
            style={{ ...styles }}
        >
            <Image src={src} alt={alt} objectFit="contain" />
        </button>
    );
}
