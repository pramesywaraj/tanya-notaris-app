import styles from "components/Card/card.module.css";
import Image from "next/image";

import { imageLoader } from "Utils";
import { SkeletonLoader } from "components/Loader";

import DefaultIcon from "assets/icon-default-testimonies.svg";

export default function CardTestimonies({ quotes, src = DefaultIcon, name, isLoading }) {
    return (
        <div className={styles["home-testimonies-card"]}>
            <div className={styles["card-content-container"]}>
                <p id={styles["quotes"]}>"</p>
                {!isLoading && <p id={styles["quotes-text"]}>{quotes}</p>}
                {isLoading && (
                    <div style={{ width: "100%", height: "100%" }}>
                        <SkeletonLoader count={3} width={"100%"} />
                    </div>
                )}
                <hr />
            </div>
            <div className={styles["card-profile-container"]}>
                {isLoading && <SkeletonLoader width={52} height={52} circle />}
                {!isLoading && src && (
                    <Image
                        className={styles["card-profile-image-container"]}
                        src={src}
                        alt={`${name} testimonies`}
                        width={52}
                        height={52}
                        loader={imageLoader}
                        objectFit="cover"
                    />
                )}
                {!isLoading && <p id={styles["username"]}>{name || "Sahabat Hukum"}</p>}
                {isLoading && <SkeletonLoader height={20} width={150} />}
            </div>
        </div>
    );
}
