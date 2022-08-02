import { useState } from "react";
import { useRouter } from "next/router";
import useRequest from "hooks/useRequest";

import { Carousel, SwipeArrow } from "components/Carousel";
import { CardMainService } from "components/Card";

import { MAIN_SERVICES } from "constants/home";

import styles from "styles/home.module.css";

const MainServiceSection = ({ handleMoveToScreen }) => {
    const [services] = useState(MAIN_SERVICES);
    const router = useRouter();

    const { data: generalData } = useRequest(`v1/settings/general`);

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
};

export default MainServiceSection;
