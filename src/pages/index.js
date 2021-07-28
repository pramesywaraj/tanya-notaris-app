import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "styles/home.module.css";
import colors from "constants/colors";

import { CardTestimonies, CardSmallArticle } from "components/Card";
import { Carousel } from "components/Carousel";
import { Button } from "components/Button";

import IconKeahlian from "assets/iconkeahlian.png";
import IconReputasi from "assets/icon-reputasi.png";
import IconPeduli from "assets/icon-peduli.png";
import AboutImage from "assets/asset-about-1.svg";

import IconHappyClients from "assets/icon-home-happy-client.svg";
import IconCases from "assets/icon-home-cases.svg";
import IconWinningCases from "assets/icon-home-winning-cases.svg";
import IconAwards from "assets/icon-home-awards.svg";

import DefaultCompany from "assets/default-company.svg";

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
    const [testimonies, setTestimonies] = useState([
        {
            quotes: "I am grateful to be connected with Kontrak Hukum in our early journey as a startup. KontrakHukum are well experienced team that is ready to support our legal needs",
            name: "1",
        },
        {
            quotes: "Aku adalah anak yang ingin cuan",
            name: "2",
        },
        {
            quotes: "Aku adalah anak yang ingin cuan",
            name: "3",
        },
        {
            quotes: "Aku adalah anak yang ingin cuan",
            name: "4",
        },
        {
            quotes: "Aku adalah anak yang ingin cuan",
            name: "5",
        },
        {
            quotes: "Aku adalah anak yang ingin cuan",
            name: "6",
        },
    ]);

    const [company, setCompany] = useState([
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
        {
            src: DefaultCompany,
        },
    ]);

    return (
        <section className={`${styles["home-section"]} my-20`}>
            <h1>Dengar Langsung dari Klien Kami</h1>
            <Carousel
                datas={testimonies}
                renderedItems={(item, index) => (
                    <div
                        key={`item-${index + 1}`}
                        className={styles["home-testimonies-slide-item"]}
                    >
                        <CardTestimonies quotes={item.quotes} name={item.name} />
                    </div>
                )}
            />

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
                datas={company}
                renderedItems={(item, index) => (
                    <div className={styles["home-testimonies-clients"]} key={`client-${index + 1}`}>
                        <Image
                            className={styles["home-testimonies-clients-img"]}
                            src={item.src}
                            alt={`clients-${index}`}
                            width={50}
                            height={50}
                        />
                    </div>
                )}
            />
        </section>
    );
}

function HomeNewArticles({ handleMoveToScreen }) {
    const [articles, setArticles] = useState([
        {
            title: "Perbedaan Perjanjian Kerja Waktu Tertentu (PKWT) dan Perjanjian Outsourcing",
            date: "12 Jan 2021",
            image_link: "/image-newarticle.svg",
        },
        {
            title: "Perbedaan Perjanjian Kerja Waktu Tertentu (PKWT) dan Perjanjian Outsourcing",
            date: "12 Des 2020",
            image_link: "/highlight-2.svg",
        },
        {
            title: "Perbedaan Perjanjian Kerja Waktu Tertentu (PKWT) dan Perjanjian Outsourcing",
            date: "12 Des 2020",
            image_link: "/image-newarticle.svg",
        },
        {
            title: "Perbedaan Perjanjian Kerja Waktu Tertentu (PKWT) dan Perjanjian Outsourcing",
            date: "12 Des 2020",
            image_link: "/highlight-2.svg",
        },
    ]);

    return (
        <section className={`${styles["home-section"]}`}>
            <h1>Artikel Notaris</h1>
            <div className={styles["home-articles-container"]}>
                {articles.map((article, index) => (
                    <CardSmallArticle key={`article-${index + 1}`} content={article} />
                ))}
            </div>
            <div className="w-full flex justify-center">
                <Button
                    onClick={() => handleMoveToScreen("/articles")}
                    classNames="text-small"
                    styles={{ width: "100%", maxWidth: 235, marginTop: 32, borderRadius: 12 }}
                    type="submit"
                >
                    Lihat Semua Artikel
                </Button>
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
            <HomeNewArticles handleMoveToScreen={handleMoveToScreen} />
        </div>
    );
}
