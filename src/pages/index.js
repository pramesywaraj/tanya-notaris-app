import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "styles/home.module.css";
import colors from "constants/colors";

import {
    AchievementSection,
    HomeInformationSection,
    HomeNewArticles,
    MainServiceSection,
    TestimoniesSection,
} from "components/Partials/HomePage";

import IconKeahlian from "assets/iconkeahlian.png";
import IconReputasi from "assets/icon-reputasi.png";
import IconPeduli from "assets/icon-peduli.png";
import AboutImage from "assets/asset-about-1.svg";

function AboutSection() {
    const [contents] = useState([
        {
            title: "Keahlian",
            description:
                "Tanya Notaris bermitra dengan para notaris resmi dan ahli hukum perdata yang berpengalaman, serta berstandar tinggi dalam menyelesaikan pekerjaannya. ",
            image_link: IconKeahlian,
            bgColor: "linear-gradient(135deg, #F37A51 0%, #D76A45 100%)",
            color: colors.primary,
        },
        {
            title: "Pelayanan",
            description:
                "kami sangat memastikan pengguna jasa Tanya Notaris mendapatkan pelayanan yang nyaman, cepat, dan tepat. Akses pelayanan kami juga dibuat semudah dan se fleksibel mungkin untuk pengguna kami.",
            image_link: IconPeduli,
            bgColor: "linear-gradient(135deg, #7C589F 0%, #603D84 100%)",
            color: colors.secondary,
        },
        {
            title: "Reputasi",
            description:
                "dipercaya oleh 1000+ perusahan, UMKM, inkubator dan akselerator bisnis serta pengguna individu.",
            image_link: IconReputasi,
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
}

export default function Home() {
    const router = useRouter();

    const handleMoveToScreen = (path) => {
        router.push(path);
    };

    return (
        <div className={`py-8 ${styles["home-page-top"]} ${styles["home-page-middle"]}`}>
            <HomeInformationSection handleMoveToScreen={handleMoveToScreen} />
            <MainServiceSection handleMoveToScreen={handleMoveToScreen} />
            <AboutSection />
            <AchievementSection />
            <TestimoniesSection />
            <HomeNewArticles handleMoveToScreen={handleMoveToScreen} />
        </div>
    );
}
