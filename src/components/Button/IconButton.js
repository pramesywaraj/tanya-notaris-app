import Image from "next/image";
import "components/Button/button.module.css";

export default function IconButton({ onClick, styles, src, alt }) {
    return (
        <button className="btn btn-iconed" onClick={onClick} style={{ ...styles }}>
            <Image src={src} alt={alt} objectFit="contain" />
        </button>
    );
}
