import { useState } from "react";
import Image from "next/image";

import styles from "styles/home.module.css";
import colors from "constants/colors";

import { CardTestimonies } from "components/Card";

import IconKeahlian from "assets/iconkeahlian.png";
import IconReputasi from "assets/icon-reputasi.png";
import IconPeduli from "assets/icon-peduli.png";
import AboutImage from "assets/asset-about-1.svg";

import IconHappyClients from "assets/icon-home-happy-client.svg";
import IconCases from "assets/icon-home-cases.svg";
import IconWinningCases from "assets/icon-home-winning-cases.svg";
import IconAwards from "assets/icon-home-awards.svg";

function AboutSection() {
    const [contents, setContents] = useState([
        {
            title: "Keahlian",
            description:
                "Semua layanan kami dikerjakan dengan standar tinggi secara in-house oleh para ahli hukum dan notaris.",
            image_link: IconKeahlian,
            bgColor: "linear-gradient(135deg, #F37A51 0%, #D76A45 100%)",
            color: colors.primary,
        },
        {
            title: "Reputasi",
            description:
                "Terpecaya oleh lebih dari 5.000 UMKM, Inkubator, Akselerator dan terpilih menjadi mitra Pemerintah.",
            image_link: IconReputasi,
            bgColor: "linear-gradient(135deg, #7C589F 0%, #603D84 100%)",
            color: colors.secondary,
        },
        {
            title: "Peduli",
            description:
                "Kami sungguh peduli dengan keperluan anda, memberikan yang terbaik sudah menjadi DNA kami.",
            image_link: IconPeduli,
            bgColor: colors.black,
            color: colors.black,
        },
    ]);

    const renderContents = contents.map((content, index) => (
        <div
            className={styles["home-about-items"]}
            key={`item-about-${index}`}
            style={index !== contents.length - 1 ? { marginBottom: 24 } : {}}
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
                    <p>Mengapa para perusahaan ternama, UMKM dan Startup menyukai kami</p>
                </div>
                <div className={styles["home-about-point-container"]}>{renderContents}</div>
            </div>
            <div className={styles["home-about-image-container"]}>
                <Image src={AboutImage} alt="Co-worker that do the toss" layout="responsive" />
            </div>
        </section>
    );
}

function AchievementSection() {
    const [contents, setContents] = useState([
        {
            caption: "Klien Senang",
            numbers: "177+",
            icon: IconHappyClients,
        },
        {
            caption: "Kasus",
            numbers: "217+",
            icon: IconCases,
        },
        {
            caption: "Kasus Menang",
            numbers: "177+",
            icon: IconWinningCases,
        },
        {
            caption: "Penghargaan",
            numbers: "17700+",
            icon: IconAwards,
        },
    ]);

    return (
        <section className={`padding-off ${styles["home-achivements-section"]}`}>
            {contents.map((content, index) => (
                <div
                    className={styles["home-achievements-items"]}
                    key={`item-achievement-${index}`}
                >
                    <div className={styles["home-achievements-items-image"]}>
                        <Image src={content.icon} alt={content.caption} objectFit="contain" />
                    </div>

                    <div className={styles["home-achievements-items-description"]}>
                        <p id={styles["numbers"]}>{content.numbers}</p>
                        <p id={styles["caption"]}>{content.caption}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}

function TestimoniesSection() {
    return (
        <section className={styles["home-section"]}>
            <h1>Dengar Langsung dari Klien Kami</h1>
            <CardTestimonies />
        </section>
    );
}

export default function Home() {
    return (
        <div className="py-8">
            <section className={`${styles["home-section"]} ${styles["home-info-section"]}`}>
                <h1>Disini nanti ada carousel</h1>
            </section>

            <section className={`${styles["home-section"]}`}>
                <h1>Apa Yang Kami Tawarkan</h1>
                <div className={styles["home-offer-container"]}></div>
            </section>

            <section className={`${styles["home-section"]}`}>
                <h1>Apa Yang Kami Tawarkan</h1>
                <div className={styles["home-offer-container"]}></div>
            </section>

            <AboutSection />
            <AchievementSection />
            <TestimoniesSection />
        </div>
    );
}
