import Image from "next/image";
import useRequest from "hooks/useRequest";

import { imageLoader } from "Utils";

import { Carousel } from "components/Carousel";
import { CardTestimonies } from "components/Card";

import styles from "styles/home.module.css";

const TestimoniesSection = () => {
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
};

export default TestimoniesSection;
