import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import useRequest from "hooks/useRequest";

import styles from "styles/home.module.css";
import colors from "constants/colors";
import { MAIN_SERVICE_TYPE_ORANGE, MAIN_SERVICE_TYPE_PURPLE } from "constants/home";
import { imageLoader } from "Utils";

import { CardTestimonies, CardArticle, CardMainService } from "components/Card";
import { Carousel, SwipeArrow } from "components/Carousel";
import { Button } from "components/Button";
import { SkeletonLoader } from "components/Loader";

import IconKeahlian from "assets/iconkeahlian.png";
import IconReputasi from "assets/icon-reputasi.png";
import IconPeduli from "assets/icon-peduli.png";
import AboutImage from "assets/asset-about-1.svg";

import IconHappyClients from "assets/icon-home-happy-client.svg";
import IconCases from "assets/icon-home-cases.svg";
import IconWinningCases from "assets/icon-home-winning-cases.svg";
import IconAwards from "assets/icon-home-awards.svg";

import DefaultCompany from "assets/default-company.svg";

function HomeInformationSection({ handleMoveToScreen }) {
    const {
        data: banners,
        error: bannerError,
        isLoadingData: isLoadingBanners,
    } = useRequest("v1/banners?per_page=3");

    const handleRedirect = (item) => {
        const { product_id, redirect_url } = item;

        if (product_id) {
            handleMoveToScreen(`service/detail/${product_id}`);
            return;
        }

        window.open(redirect_url);
    };

    return (
        <section className={`${styles["home-section"]} ${styles["home-info-section"]}`}>
            <div className={styles["home-info-container"]}>
                <Carousel
                    datas={!isLoadingBanners ? banners?.data || [] : [1, 2]}
                    renderedItems={(item, index) => {
                        if (item.is_visible === 0) return null;

                        return (
                            <div
                                role="button"
                                tabIndex={0}
                                onClick={() => handleRedirect(item)}
                                className={styles["home-info-banner-img"]}
                                key={`banner-image-${index + 1}`}
                                onKeyPress={() => { }}
                            >
                                {isLoadingBanners && (
                                    <div style={{ flex: 1 }}>
                                        <SkeletonLoader width={"100%"} height={"100%"} />
                                    </div>
                                )}
                                {!isLoadingBanners && (
                                    <Image
                                        src={item?.image_url || ""}
                                        alt={item?.name || ""}
                                        objectFit="contain"
                                        loader={imageLoader}
                                        layout="fill"
                                    />
                                )}
                            </div>
                        );
                    }}
                    additionalSettings={{
                        initialSlide: 0,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        responsive: [
                            {
                                breakpoint: 1023,
                                settings: {
                                    slidesPerRow: 1,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                },
                            },
                            {
                                breakpoint: 767,
                                settings: {
                                    slidesPerRow: 1,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    swipeToSlide: true,
                                },
                            },
                        ],
                    }}
                />
            </div>
        </section>
    );
}

function MainServiceSection({ handleMoveToScreen }) {
    const [services, setServices] = useState([
        {
            title: "Konsultasi Hukum",
            caption: "Yuk konsultasi di tanya notaris, cepat, mudah, dan terjangkau!",
            button_text: "Konsultasi Sekarang",
            type: MAIN_SERVICE_TYPE_ORANGE,
            redirect_path: "",
        },
        {
            title: "Kontrak dan Perjanjian",
            caption:
                "Mau buat kontrak dan perjanjian professional dengan baik dan benar? Buat disini aja! Hemat biaya dan ga pake ribet!",
            button_text: "Buat Sekarang",
            type: MAIN_SERVICE_TYPE_PURPLE,
            redirect_path: "",
        },
        {
            title: "Pembuatan Akta",
            caption:
                "Buat akta perusahaan, yayasan, atau perkumpulan? Yuk kami pandu langkah untuk pembuatannya, ga pake lama!",
            button_text: "Buat Sekarang",
            type: MAIN_SERVICE_TYPE_ORANGE,
            redirect_path: "",
        },
        {
            title: "Legalisasi Dokumen",
            caption:
                "Legalisasi dokumen penting kamu tanpa harus menyita banyak waktu! Yuk Buat sekarang",
            button_text: "Buat Sekarang",
            type: MAIN_SERVICE_TYPE_PURPLE,
            redirect_path: "",
        },
    ]);

    const onCardClick = (url) => {
        handleMoveToScreen(url);
    };

    return (
        <section className={`${styles["home-section"]}`}>
            <h1>Berikut Layanan Utama Kami</h1>
            <div className={styles["home-offer-container"]}>
                <Carousel
                    datas={services}
                    renderedItems={(item, index) => (
                        <CardMainService
                            data={item}
                            isLastIndex={index + 1 === services.length}
                            onClick={onCardClick}
                        />
                    )}
                    additionalSettings={{
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        nextArrow: <SwipeArrow type="NEXT" />,
                        prevArrow: <SwipeArrow type="PREV" />,
                        responsive: [
                            {
                                breakpoint: 1023,
                                settings: {
                                    slidesPerRow: 1,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                },
                            },
                            {
                                breakpoint: 767,
                                settings: {
                                    slidesPerRow: 1,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    swipeToSlide: true,
                                    arrows: false,
                                },
                            },
                        ],
                    }}
                />
            </div>
        </section>
    );
}

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

function HomeNewArticles({ handleMoveToScreen }) {
    const { data: articles, error, isLoadingData } = useRequest("v1/articles?per_page=4");

    if (!isLoadingData && articles && articles.data.length === 0) return null;
    if (error) return null;

    const handleCardClick = (article) => {
        if (!article) return false;
        // if (router.asPath === router.route) return false;

        const { slug } = article;
        handleMoveToScreen(`/articles/detail/${slug}`);
    };

    return (
        <section className={`${styles["home-section"]}`}>
            <h1>Artikel Notaris</h1>
            <div className={styles["home-articles-container"]}>
                {!isLoadingData &&
                    articles.data.map((article, index) => (
                        <CardArticle
                            key={`article-${index + 1}`}
                            content={article}
                            onClick={() => handleCardClick(article)}
                        />
                    ))}

                {isLoadingData &&
                    [1, 2, 3, 4].map((_, index) => (
                        <CardArticle key={`article-${index + 1}`} content={{}} isLoading />
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
    // const [] = useState([

    // ]);

    const handleMoveToScreen = (path) => {
        router.push(path);
    };

    return (
        <div className={`py-8 ${styles["home-page-top"]} ${styles["home-page-middle"]} overflow-hidden`}>
            <HomeInformationSection handleMoveToScreen={handleMoveToScreen} />
            <MainServiceSection handleMoveToScreen={handleMoveToScreen} />
            <AboutSection />
            <AchievementSection />
            <TestimoniesSection />
            <HomeNewArticles handleMoveToScreen={handleMoveToScreen} />
        </div>
    );
}
