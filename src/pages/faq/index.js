import "styles/faq.module.css";

import { Search } from "components/Search";
import { useState } from "react"
import { QuestionItem, FilterItem } from "components/Items";
import { FilterBottomSheet } from "components/BottomSheet";


export default function index() {
    const [isShowFilter, setIsShowFilter] = useState(false);

    const handleToggleFilter = (stat) => {
        setIsShowFilter(stat);
    };

    const [contents, setContents] = useState([
        {
            id: 1,
            question: "PT vs CV, manakah yang lebih aman? ",
            answer: "Perseroan Terbatas (PT) memiliki kelebihan di mana harta kekayaan pribadi pemegang saham dipisahkan dari harta perusahaan, sehingga dalam hal terjadi kerugian atau kebangkrutan hanya akan melibatkan harta sebatas yang disetorkan dalam bentuk kepemilikan saham. ",
        },
        {
            id: 2,
            question: "PT vs CV, manakah yang lebih aman? ",
            answer: "Perseroan Terbatas (PT) memiliki kelebihan di mana harta kekayaan pribadi pemegang saham dipisahkan dari harta perusahaan, sehingga dalam hal terjadi kerugian atau kebangkrutan hanya akan melibatkan harta sebatas yang disetorkan dalam bentuk kepemilikan saham. ",
        },
        {
            id: 3,
            question: "PT vs CV, manakah yang lebih aman? ",
            answer: "Perseroan Terbatas (PT) memiliki kelebihan di mana harta kekayaan pribadi pemegang saham dipisahkan dari harta perusahaan, sehingga dalam hal terjadi kerugian atau kebangkrutan hanya akan melibatkan harta sebatas yang disetorkan dalam bentuk kepemilikan saham. ",
        },
        {
            id: 4,
            question: "PT vs CV, manakah yang lebih aman? ",
            answer: "Perseroan Terbatas (PT) memiliki kelebihan di mana harta kekayaan pribadi pemegang saham dipisahkan dari harta perusahaan, sehingga dalam hal terjadi kerugian atau kebangkrutan hanya akan melibatkan harta sebatas yang disetorkan dalam bentuk kepemilikan saham. ",
        },

    ]);

    return (
        <>
            <section className="faq-header">
                <h1 className="faq-title">Frequently Asked Question</h1>
                <Search classNames="w-full tablet:w-auto" />
            </section>
            <section className="faq-body">
                <div className="faq-filter">
                    <div className="filter-container w-full">
                        <div className="filter-header">
                            <h3>Kategori</h3>
                        </div>
                        <div className="filter-content">
                            <FilterItem />
                        </div>
                    </div>
                </div>
                <div className="faq-question">
                    {
                        contents.map((content, index) => (
                            <QuestionItem content={content} />
                        ))
                    }
                </div>
                <button className="filter-button" onClick={() => handleToggleFilter(true)}>
                    Filter
                </button>
                <FilterBottomSheet
                    isShow={isShowFilter}
                    handleDisplay={() => handleToggleFilter(false)}
                />
            </section>
        </>
    )
}
