import Image from "next/image";
import useRequest from "hooks/useRequest";

import { imageLoader } from "Utils";

import { Carousel } from "components/Carousel";
import { SkeletonLoader } from "components/Loader";

import styles from "styles/home.module.css";

const HomeInformationSection = ({ handleMoveToScreen }) => {
    const { data: banners, isLoadingData: isLoadingBanners } = useRequest("v1/banners?per_page=3");

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
                    renderedItems={(item, _) => {
                        if (item.is_visible === 0) return null;

                        return (
                            <div
                                role="button"
                                tabIndex={0}
                                onClick={() => handleRedirect(item)}
                                className={styles["home-info-banner-img"]}
                                onKeyPress={() => {}}
                            >
                                {isLoadingBanners && (
                                    <div style={{ flex: 1 }}>
                                        <SkeletonLoader width={"100%"} height={"100%"} />
                                    </div>
                                )}
                                {!isLoadingBanners && (
                                    <Image
                                        className={styles["home-info-banner-img-wrapper"]}
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
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        speed: 500,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        cssEase: "linear",
                        centerPadding: "50px",
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
};

export default HomeInformationSection;
