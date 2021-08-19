import { useState, useEffect } from "react";
import style from "styles/faq.module.css";

import useRequest from "hooks/useRequest";

import { Search } from "components/Search";
import { QuestionItem, FilterItem } from "components/Items";
import { FilterBottomSheet } from "components/BottomSheet";
import { CardFilter } from "components/Card";

export default function FAQPage() {
    const [isShowFilter, setIsShowFilter] = useState(false);

    const [filterCategories, setFilterCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(false);

    const [contents, setIsContents] = useState([]); // temporary
    const {
        data: typesData,
        error: typesError,
        isLoadingData: isLoadingFetchingTypes,
    } = useRequest("v1/types");

    useEffect(() => {
        if (typesData) {
            const { data } = typesData;
            setFilterCategories(data);
        }
    }, [typesData]);

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

    return (
        <section className={style["faq-section-container"]}>
            <div className="faq-header">
                <h1 className="faq-title">Frequently Asked Question</h1>
                <Search classNames="w-full tablet:w-auto" />
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
                <div className="faq-question">
                    {contents.map((content, index) => (
                        <QuestionItem content={content} />
                    ))}
                </div>
                <button className="filter-button" onClick={() => handleToggleFilter(true)}>
                    Filter
                </button>
                <FilterBottomSheet
                    isShow={isShowFilter}
                    handleDisplay={() => handleToggleFilter(false)}
                />
            </div>
        </section>
    );
}
