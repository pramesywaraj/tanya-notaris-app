import { useState } from "react";
import Image from "next/image";
import styles from "styles/service.module.css";

import { Search } from "components/Search";
import Pagination from "components/Pagination";
import { FilterBottomSheet } from "components/BottomSheet";

import { parseCurrency } from "Utils";

import IconPendirianPT from "assets/icon-pendirian-pt.svg";

function ServiceCard({ data, containerStyle }) {
    const { title, description, price, image } = data;

    return (
        <div style={{ ...containerStyle }} className={styles["service-card-container"]}>
            {image && (
                <div className={styles["service-card-image-container"]}>
                    <Image src={image} alt={title} objectFit="contain" />
                </div>
            )}
            <div className={styles["service-card-content-container"]}>
                <div className={styles["service-card-content-primary"]}>
                    <p id={styles["title"]}>{title}</p>
                    <p id={styles["description"]}>{description}</p>
                </div>

                <div className={styles["service-card-content-secondary"]}>
                    <p>Mulai dari</p>
                    <p id={styles["price"]}>{parseCurrency(price)}</p>
                </div>
            </div>
        </div>
    );
}

export default function ServicePage() {
    const [isShowFilter, setIsShowFilter] = useState(false);
    const [services, setServices] = useState([
        {
            id: Math.random(),
            title: "Pendirian PT",
            description: "Kami membantu mengurus anak2 yang terlantar karena orangtua mereka gaes.",
            price: 10000000,
            image: IconPendirianPT,
        },
        {
            id: Math.random(),
            title: "Pendirian PT",
            description: "Kami membantu mengurus anak2 yang terlantar karena orangtua mereka gaes.",
            price: 10000000,
            image: IconPendirianPT,
        },
        {
            id: Math.random(),
            title: "Pendirian PT",
            description: "Kami membantu mengurus anak2 yang terlantar karena orangtua mereka gaes.",
            price: 10000000,
            image: IconPendirianPT,
        },
        {
            id: Math.random(),
            title: "Pendirian PT",
            description: "Kami membantu mengurus anak2 yang terlantar karena orangtua mereka gaes.",
            price: 10000000,
            image: IconPendirianPT,
        },
    ]);

    const [paginations, setPaginations] = useState([
        {
            url: null,
            label: "&laquo; Previous",
            active: false,
        },
        {
            url: "http://tanya-notaris-dev.herokuapp.com/v1/products?page=1",
            label: "1",
            active: true,
        },
        {
            url: "http://tanya-notaris-dev.herokuapp.com/v1/products?page=2",
            label: "2",
            active: false,
        },
        {
            url: "http://tanya-notaris-dev.herokuapp.com/v1/products?page=3",
            label: "3",
            active: false,
        },
        {
            url: "http://tanya-notaris-dev.herokuapp.com/v1/products?page=4",
            label: "4",
            active: false,
        },
        {
            url: "http://tanya-notaris-dev.herokuapp.com/v1/products?page=5",
            label: "5",
            active: false,
        },
        {
            url: "http://tanya-notaris-dev.herokuapp.com/v1/products?page=6",
            label: "6",
            active: false,
        },
        {
            url: "http://tanya-notaris-dev.herokuapp.com/v1/products?page=7",
            label: "7",
            active: false,
        },
        {
            url: "http://tanya-notaris-dev.herokuapp.com/v1/products?page=2",
            label: "Next &raquo;",
            active: false,
        },
    ]);

    const handleChangePage = () => {
        // call api
        console.log("handle change page");
    };

    const handleToggleFilter = (stat) => {
        setIsShowFilter(stat);
    };

    return (
        <section className={styles["service-section-container"]}>
            <div className={styles["service-title-container"]}>
                <h1>Layanan Kami</h1>
                <Search classNames="w-full mt-4 tablet:w-auto" />
            </div>
            <div className={styles["service-list-container"]}>
                {services.length > 0 &&
                    services.map((service, index) => (
                        <ServiceCard
                            key={`service-${index + 1}`}
                            data={service}
                            containerStyle={{ marginTop: index === 0 ? 0 : 16 }}
                        />
                    ))}
            </div>
            <Pagination data={paginations} onPageChange={handleChangePage} />
            <button
                className={styles["service-filter-button"]}
                onClick={() => handleToggleFilter(true)}
            >
                Filter
            </button>
            <FilterBottomSheet
                isShow={isShowFilter}
                handleDisplay={() => handleToggleFilter(false)}
            />
        </section>
    );
}
