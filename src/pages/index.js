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
import { HomeInformationSection } from "components/Partials/HomePage";

import IconKeahlian from "assets/iconkeahlian.png";
import IconReputasi from "assets/icon-reputasi.png";
import IconPeduli from "assets/icon-peduli.png";
import AboutImage from "assets/asset-about-1.svg";

import IconHappyClients from "assets/icon-home-happy-client.svg";
import IconCases from "assets/icon-home-cases.svg";
import IconWinningCases from "assets/icon-home-winning-cases.svg";
import IconAwards from "assets/icon-home-awards.svg";

function MainServiceSection({ handleMoveToScreen }) {
    const [services, setServices] = useState([
        {
            title: "Konsultasi Hukum",
            caption: "Yuk konsultasi di tanya notaris, cepat, mudah, dan terjangkau!",
            button_text: "Konsultasi Sekarang",
            type: MAIN_SERVICE_TYPE_ORANGE,
            redirect_path: "/service?typeName=Kontrak",
            directTo: "EXTERNAL",
        },
        {
            title: "Kontrak dan Perjanjian",
            caption:
                "Mau buat kontrak dan perjanjian professional dengan baik dan benar? Buat disini aja! Hemat biaya dan ga pake ribet!",
            button_text: "Buat Sekarang",
            type: MAIN_SERVICE_TYPE_PURPLE,
            redirect_path: "/service?typeName=Kontrak",
            directTo: "INTERNAL",
        },
        {
            title: "Pembuatan Akta",
            caption:
                "Buat akta perusahaan, yayasan, atau perkumpulan? Yuk kami pandu langkah untuk pembuatannya, ga pake lama!",
            button_text: "Buat Sekarang",
            type: MAIN_SERVICE_TYPE_ORANGE,
            redirect_path: "/service?typeName=Akta dan Layanan Notaris (Perseroan Terbatas)",
            directTo: "INTERNAL",
        },
        {
            title: "Legalisasi Dokumen",
            caption:
                "Legalisasi dokumen penting kamu tanpa harus menyita banyak waktu! Yuk Buat sekarang",
            button_text: "Buat Sekarang",
            type: MAIN_SERVICE_TYPE_PURPLE,
            redirect_path: "/service?typeName=Dokumen",
            directTo: "INTERNAL",
        },
    ]);
    const router = useRouter();

    const {
        data: generalData,
        error: generalError,
        isLoadingData: isLoadingFetchingGeneral,
    } = useRequest(`v1/settings/general`);

    const onCardClick = (item) => {
        if (item.directTo === "EXTERNAL") {
            const csPhoneNumber = generalData?.data["general.phone"] || "+62";

            const message = `Halo Tanya Notaris, Saya ingin melakukan Konsultasi Hukum.`;
            const redirectUrl = `https://api.whatsapp.com/send/?phone=${csPhoneNumber}&text=${message}&app_absent=0`;

            router.push({ pathname: "/redirect/[redirectUrl]", query: { redirectUrl } });
            return;
        }

        handleMoveToScreen(item.redirect_path);
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
