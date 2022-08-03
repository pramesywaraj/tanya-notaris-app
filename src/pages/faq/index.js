import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import style from "styles/faq.module.css";

import useRequest from "hooks/useRequest";
import usePagination from "hooks/usePagination";

import { Search } from "components/Search";
import { QuestionItem } from "components/Items";
import { FilterBottomSheet } from "components/BottomSheet";
import { CardFilter } from "components/Card";
import Pagination from "components/Pagination";
import { SimpleEmptyState } from "components/EmptyState";

const FILTER_TYPE = "FILTER/TYPE";

export default function FAQPage() {
    const [isShowFilter, setIsShowFilter] = useState(false);

    const [filterCategories, setFilterCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [queryParams, setQueryParams] = useState("");
    const firstLoad = useRef(true);

    const {
        data: typesData,
        error: typesError,
        isLoadingData: isLoadingFetchingTypes,
    } = useRequest("v1/types");

    const {
        items: questions,
        paginationItems,
        error,
        setPage,
        isLoadingData: isLoadingFetchQuestions,
    } = usePagination("v1/faqs", queryParams);

    useEffect(() => {
        if (typesData) {
            const { data } = typesData;
            setFilterCategories(data);
        }
    }, [typesData]);

    useEffect(() => {
        if (firstLoad.current) {
            firstLoad.current = false;

            return;
        }

        const tempCategoryQuery = selectedCategory ? `type[]=${selectedCategory}&` : "";

        setQueryParams(tempCategoryQuery);
    }, [selectedCategory]);

    const handleToggleFilter = (stat) => {
        setIsShowFilter(stat);
    };

    const handleChangeFilterValue = (value) => {
        // if (queryParams) {
        //     // if include search query then empty it first
        //     if (queryParams.includes("q")) setQueryParams("");
        // }

        setSelectedCategory(value);
        return;
    };

    const handleChangePage = (selectedPage) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setPage(selectedPage);
    };

    const renderContent = () => {
        return (
            <div className={style["faq-container-question"]}>
                {!isLoadingFetchQuestions &&
                    (questions || []).map((question, index) => (
                        <QuestionItem
                            key={`question-${index + 1}`}
                            content={question}
                            containerStyle={{ marginTop: index === 0 ? 0 : 16 }}
                        />
                    ))}

                {isLoadingFetchQuestions &&
                    [1, 2, 3, 4, 5, 6].map((_, index) => (
                        <QuestionItem
                            key={`question-${index + 1}`}
                            content={{}}
                            containerStyle={{ marginTop: index === 0 ? 0 : 16 }}
                            isLoading
                        />
                    ))}

                {paginationItems && questions.length > 0 && paginationItems.length > 0 && (
                    <div className={style["faq-pagination-container"]}>
                        <Pagination data={paginationItems} onPageChange={handleChangePage} />
                    </div>
                )}

                {!isLoadingFetchQuestions && questions.length === 0 && (
                    <SimpleEmptyState text="Tidak ada FAQ untuk ditampilkan." />
                )}
            </div>
        );
    };

    return (
        <section className={style["faq-section-container"]}>
            <Head>
                <title>Tanya Notaris - Frequently Asked Questions</title>
                <meta
                    property="og:title"
                    content="Tanya Notaris - Frequently Asked Questions"
                    key="title"
                />
            </Head>
            <div className="faq-header">
                <h1 className="faq-title">Frequently Asked Question</h1>
                <Search classNames="w-full mt-4 tablet:w-auto lgTablet:mt-0" />
            </div>
            <div className="faq-body">
                <div className="faq-filter">
                    <CardFilter
                        title="Kategori"
                        options={filterCategories}
                        handleChange={(value) => handleChangeFilterValue(value)}
                        handleSelectAll={() => setSelectedCategory("")}
                        name="type"
                        isLoading={isLoadingFetchingTypes}
                    />
                </div>
                {!error ? renderContent() : <p>Terdapat Kesalahan.</p>}
                <button className="filter-button" onClick={() => handleToggleFilter(true)}>
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
                    ]}
                />
            </div>
        </section>
    );
}
