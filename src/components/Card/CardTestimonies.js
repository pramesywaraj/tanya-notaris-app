import styles from "components/Card/card.module.css";
import Image from "next/image";

import DefaultIcon from "assets/icon-default-testimonies.svg";

export default function CardTestimonies({ quotes, src = DefaultIcon, name }) {
    return (
        <div className={styles["home-testimonies-card"]}>
            <div className={styles["card-content-container"]}>
                <p id={styles["quotes"]}>"</p>
                <p id={styles["quotes-text"]}>{quotes}</p>
                <hr />
            </div>
            <div className={styles["card-profile-container"]}>
                {src && (
                    <Image
                        className={styles["card-profile-image-container"]}
                        src={src}
                        alt={`${name} testimonies`}
                        width={52}
                        height={52}
                    />
                )}
                <p id={styles["username"]}>{name || "Sahabat Hukum"}</p>
            </div>
        </div>
    );
}
