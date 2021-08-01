import { useState } from "react";

import styles from "components/Carousel/carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function Carousel(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const { additionalSettings = {}, datas = [], containerStyles = {}, renderedItems } = props;
    const settings = {
        className: styles["carousel-inner-slider"],
        dotsClass: `slick-dots ${styles["carousel-dots"]}`,
        dots: true,
        infinite: true,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        afterChange: (i) => {
            setActiveIndex(i);
        },
        customPaging: (i) => {
            return (
                <div
                    className={`${styles["slider-dot"]} ${i === activeIndex ? styles["slider-dot-active"] : ""
                        }`}
                />
            );
        },
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    swipeToSlide: true,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    swipeToSlide: true,
                },
            },
        ],
        ...additionalSettings,
    };

    return (
        <div className={styles["carousel-container"]} style={{ ...containerStyles }}>
            <Slider {...settings}>{datas.map((item, index) => renderedItems(item, index))}</Slider>
        </div>
    );
}
