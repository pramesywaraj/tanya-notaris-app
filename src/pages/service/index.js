import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import useRequest from "hooks/useRequest";
import usePagination from "hooks/usePagination";
import { useRouter } from "next/router";

import styles from "styles/service.module.css";

import { Search } from "components/Search";
import Pagination from "components/Pagination";
import { FilterBottomSheet } from "components/BottomSheet";
import { CardFilter } from "components/Card";
import { SkeletonLoader } from "components/Loader";
import { SimpleEmptyState } from "components/EmptyState";

import { parseCurrency, imageLoader } from "Utils";
import IconPendirianPT from "assets/icon-pendirian-pt.svg";

const FILTER_TYPE = "FILTER/TYPE";
const FILTER_INDUSTRY = "FILTER/INDUSTRY";

function ServiceCard({ data, containerStyle, isLoading, handleNavigateToDetail }) {
    const { title, short_description, price, icon } = data;

    return (
        <div
            style={{ ...containerStyle }}
            className={styles["service-card-container"]}
            onClick={handleNavigateToDetail}
            role="menuitem"
            onKeyDown={() => {}}
            tabIndex={0}
        >
            {isLoading && <SkeletonLoader circle height={64} width={64} />}
            {!isLoading && (
                <div className={styles["service-card-image-container"]}>
                    <Image
                        loader={imageLoader}
                        src={icon?.url || IconPendirianPT}
                        alt={title}
                        objectFit="contain"
                        layout={icon?.url && "fill"}
                    />
                </div>
            )}

            <div className={styles["service-card-content-container"]}>
                <div className={styles["service-card-content-primary"]}>
                    <p id={styles["title"]}>
                        {isLoading && <SkeletonLoader width={120} height={25} />}
                        {!isLoading && title}
                    </p>
                    <p id={styles["description"]}>
                        {isLoading && <SkeletonLoader height={15} />}
                        {!isLoading && short_description}
                    </p>
                </div>

                <div className={styles["service-card-content-secondary"]}>
                    <p>
                        {isLoading && <SkeletonLoader width={120} height={15} />}
                        {!isLoading && "Mulai dari"}
                    </p>
                    <p id={styles["price"]}>
                        {isLoading && <SkeletonLoader width={150} height={20} />}
                        {!isLoading && parseCurrency(Number(price))}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function ServicePage() {
    const [isShowFilter, setIsShowFilter] = useState(false);

    const [filterCategories, setFilterCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const [filterIndustries, setFilterIndustries] = useState([]);
    const [selectedIndustries, setSelectedIndustries] = useState(null);
    const [queryParams, setQueryParams] = useState("");

    const firstLoad = useRef(true);
    const refCardFilter = useRef(null);

    const router = useRouter();

    const {
        data: typesData,
        error: typesError,
        isLoadingData: isLoadingFetchingTypes,
    } = useRequest("v1/types");
    // const {
    //     data: industriesData,
    //     error: industriesError,
    //     isLoadingData: isLoadingFetchingIndustries,
    // } = useRequest("v1/industries");
    // const { data: serviceData, error: serviceError } = useRequest("v1/products?per_page=5");
    const {
        items: services,
        paginationItems,
        error,
        setPage,
        isLoadingData: isLoadServices,
    } = usePagination("v1/products", queryParams);

    useEffect(() => {
        if (typesData) {
            const { data } = typesData;

            if (router.query?.typeId) {
                const parsedTypeId = parseInt(router.query?.typeId);
                const selectedFilter = data.find((element) => element.id === parsedTypeId);

                handleChangeFilterValue(selectedFilter?.name, FILTER_TYPE);

                refCardFilter?.current(selectedFilter?.name);
            }

            setFilterCategories(data);
        }
    }, [typesData]);

    // useEffect(() => {
    //     if (industriesData) {
    //         const { data } = industriesData;
    //         setFilterIndustries(data);
    //     }
    // }, [industriesData]);

    useEffect(() => {
        if (firstLoad.current) {
            firstLoad.current = false;

            return;
        }

        const tempCategoryQuery = selectedCategory ? `type[]=${selectedCategory}&` : "";
        // const tempIndustryQuery = selectedIndustries ? `industry[]=${selectedIndustries}&` : "";

        // setQueryParams(tempCategoryQuery.concat(tempIndustryQuery));
        setQueryParams(tempCategoryQuery);
    }, [selectedCategory]);

    // Functions

    const handleChangePage = (selectedPage) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setPage(selectedPage);
    };

    const handleToggleFilter = (stat) => {
        setIsShowFilter(stat);
    };

    const handleChangeFilterValue = (value, type) => {
        if (queryParams) {
            // if include search query then empty it first
            if (queryParams.includes("q")) setQueryParams("");
        }

        if (type === FILTER_TYPE) {
            setSelectedCategory(value);
            return;
        }
        if (type === FILTER_INDUSTRY) {
            setSelectedIndustries(value);
            return;
        }
    };

    const handleChangeSearchQuery = (searchText) => {
        setQueryParams(`q=${searchText}&`);
    };

    const handleNavigateToDetail = (id) => {
        router.push(`/service/detail/${id}`);
    };

    const renderContents = () => (
        <div className={styles["service-contents-container"]}>
            <div className={styles["service-filter-container"]}>
                <CardFilter
                    title="Kategori"
                    options={filterCategories}
                    handleChange={(value) => handleChangeFilterValue(value, FILTER_TYPE)}
                    handleSelectAll={() => setSelectedCategory("")}
                    name="type"
                    isLoading={isLoadingFetchingTypes}
                    refCardFilter={refCardFilter}
                />
                {/* Rather than delete this filter, we commented it if at any time needed  */}
                {/* <CardFilter
                    containerStyle={{ marginTop: 32 }}
                    title="Industri"
                    options={filterIndustries}
                    handleChange={(value) => handleChangeFilterValue(value, FILTER_INDUSTRY)}
                    handleSelectAll={() => setSelectedIndustries("")}
                    name="industry"
                    isLoading={isLoadingFetchingIndustries}
                /> */}
            </div>
            <div className={styles["service-list-container"]}>
                {!isLoadServices && services.length === 0 && (
                    <SimpleEmptyState text="Tidak ada layanan untuk ditampilkan." />
                )}

                {!isLoadServices && services
                    ? services.map((service, index) => (
                          <ServiceCard
                              key={`service-${index + 1}`}
                              data={service}
                              containerStyle={{ marginTop: index === 0 ? 0 : 16 }}
                              handleNavigateToDetail={() => handleNavigateToDetail(service.id)}
                          />
                      ))
                    : [1, 2, 3, 4, 5, 6].map((_, index) => (
                          <ServiceCard
                              key={`service-${index + 1}`}
                              data={{}}
                              containerStyle={{ marginTop: index === 0 ? 0 : 16 }}
                              isLoading
                          />
                      ))}
                {paginationItems && paginationItems.length > 0 && (
                    <div className={styles["service-pagination-container"]}>
                        <Pagination data={paginationItems} onPageChange={handleChangePage} />
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <section className={styles["service-section-container"]}>
            <div className={styles["service-title-container"]}>
                <h1>Layanan Kami</h1>
                <Search
                    classNames="w-full mt-4 tablet:w-auto lgTablet:mt-0"
                    onSearch={handleChangeSearchQuery}
                    onReset={() => setQueryParams("")}
                />
            </div>
            {!error ? renderContents() : <p>Terjadi Kesalahan</p>}
            <button
                className={styles["service-filter-button"]}
                onClick={() => handleToggleFilter(true)}
            >
                Filter
            </button>
            <FilterBottomSheet
                isShow={isShowFilter}
                isLoading={isLoadingFetchingTypes}
                handleDisplay={() => handleToggleFilter(false)}
                handleChangeOption={(value, id) => handleChangeFilterValue(value, id)}
                handleSelectAll={handleChangeFilterValue}
                categories={[
                    {
                        id: FILTER_TYPE,
                        title: "Kategori",
                        name: "category",
                        options: [...filterCategories],
                    },
                    // Rather than delete this filter, we commented it if at any time needed
                    // {
                    //     id: FILTER_INDUSTRY,
                    //     title: "Industri",
                    //     name: "industry",
                    //     options: [...filterIndustries],
                    // },
                ]}
            />
        </section>
    );
}
