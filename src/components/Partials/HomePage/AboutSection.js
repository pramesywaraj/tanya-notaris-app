import Image from "next/image";

import { MAIN_ABOUT_SECTION } from "constants/home";
import AboutImage from "assets/asset-about-1.svg";

import styles from "styles/home.module.css";

const AboutSection = () => {
    const renderContents = MAIN_ABOUT_SECTION.map((content, index) => (
        <div
            className={styles["home-about-items"]}
            key={`item-about-${index}`}
            style={index !== MAIN_ABOUT_SECTION.length - 1 ? { marginBottom: 24 } : {}}
        >
            <div
                className={styles["home-about-items-image"]}
                style={{ background: content.bgColor }}
            >
                <Image src={content.image_link} alt={content.title} objectFit="contain" />
            </div>

            <div className={styles["home-about-items-description"]}>
                <p id={styles["title"]} style={{ color: content.color }}>
                    {content.title}
                </p>
                <p id={styles["description"]}>{content.description}</p>
            </div>
        </div>
    ));

    return (
        <section className={`${styles["home-section"]} ${styles["home-about-section"]}`}>
            <div className={styles["home-about-description-container"]}>
                <div className={styles["home-about-title-container"]}>
                    <h1>Kenapa Menggunakan Jasa Layanan Kami ?</h1>
                    <p>Alasan para perusahaan, UMKM, start-up dan masyarakat percaya dengan kami</p>
                </div>
                <div className={styles["home-about-point-container"]}>{renderContents}</div>
            </div>
            <div className={styles["home-about-image-container"]}>
                <Image
                    className={styles["home-about-image"]}
                    src={AboutImage}
                    alt="Co-worker that do the toss"
                    layout="responsive"
                    objectFit="cover"
                />
            </div>
        </section>
    );
};

export default AboutSection;
