import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import useRequest from "hooks/useRequest";

import styles from "styles/home.module.css";
import colors from "constants/colors";
import { imageLoader } from "Utils";

import { CardTestimonies } from "components/Card";
import { Carousel } from "components/Carousel";
import {
    HomeInformationSection,
    HomeNewArticles,
    MainServiceSection,
} from "components/Partials/HomePage";

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
        <section className={`padding-off ${styles["home-achievements-section"]}`}>
            {contents.map((content, index) => (
                <div
                    className={styles["home-achievements-items"]}
                    key={`item-achievement-${index}`}
                >
                    <div className={styles["home-achievements-items-image-container"]}>
                        <Image
                            className={styles["home-achievements-items-image"]}
                            src={content.icon}
                            alt={content.caption}
                            layout="fill"
                        />
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
    const {
        data: testimonies,
        error: testimoniesError,
        isLoadingData: isLoadingTestimonies,
    } = useRequest("v1/testimonials?per_page=100");
    const {
        data: clients,
        error: clientsError,
        isLoadingData: isLoadingClients,
    } = useRequest("v1/clients?per_page=100");

    if (testimoniesError && clientsError) return null;

    return (
        <section className={`${styles["home-section"]}`}>
            <h1>Dengar Langsung dari Klien Kami</h1>
            {!testimoniesError && (
                <Carousel
                    datas={!isLoadingTestimonies ? testimonies?.data : [1, 2, 3, 4]}
                    renderedItems={(item, index) => (
                        <div
                            key={`item-${index + 1}`}
                            className={styles["home-testimonies-slide-item"]}
                        >
                            <CardTestimonies
                                quotes={item?.message || ""}
                                name={item?.name || ""}
                                src={item?.image_url || ""}
                                isLoading={isLoadingTestimonies}
                            />
                        </div>
                    )}
                />
            )}

            {!clientsError && (
                <Carousel
                    containerStyles={{ margin: "48px 0px !important" }}
                    additionalSettings={{
                        slidesToShow: 7,
                        rows: 2,
                        dots: false,
                        infinite: true,
                        responsive: [
                            {
                                breakpoint: 1023,
                                settings: {
                                    slidesPerRow: 6,
                                    slidesToShow: 1,
                                    arrows: false,
                                    swipeToSlide: true,
                                },
                            },
                            {
                                breakpoint: 767,
                                settings: {
                                    slidesPerRow: 5,
                                    slidesToShow: 1,
                                    rows: 4,
                                    arrows: false,
                                    swipeToSlide: true,
                                },
                            },
                        ],
                    }}
                    datas={!isLoadingClients ? clients?.data : [1, 2, 3, 4]}
                    renderedItems={(item, index) => {
                        if (!item || !item.image_url) return null;
                        return (
                            <div
                                className={styles["home-testimonies-clients"]}
                                key={`client-${index + 1}`}
                            >
                                <Image
                                    className={styles["home-testimonies-clients-img"]}
                                    src={item?.image_url || ""}
                                    alt={item?.name || ""}
                                    width={60}
                                    height={60}
                                    loader={imageLoader}
                                />
                            </div>
                        );
                    }}
                />
            )}
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
