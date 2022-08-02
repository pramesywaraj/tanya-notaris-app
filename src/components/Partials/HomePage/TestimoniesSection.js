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
                <div>
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
                </div>
            )}

            {!clientsError && (
                <div className="grid grid-cols-8 gap-6 mt-12">
                    {(!isLoadingClients ? clients?.data : [1, 2, 3, 4]).map((item, index) => {
                        if (!item || !item.image_url) return null;
                        return (
                            <div
                                className={styles["home-testimonies-clients"]}
                                key={`client-${index + 1}`}
                            >
                                <Image
                                    src={item?.image_url || ""}
                                    alt={item?.name || ""}
                                    width={75}
                                    height={75}
                                    loader={imageLoader}
                                />
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default TestimoniesSection;
