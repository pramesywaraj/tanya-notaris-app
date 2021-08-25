import style from "components/Artikel/articles.module.css";

import { CardArticle } from "components/Card";
import { SimpleEmptyState } from "components/EmptyState";

export default function SearchArticle({ data = [], isLoading }) {
    const handleCardClick = (e) => {
        console.log("CHECK CLICK", e);
    };

    return (
        <div className={style["search-article-list"]}>
            {isLoading &&
                [1, 2, 3, 4, 5].map((_, index) => (
                    <CardArticle
                        key={`article-${index + 1}`}
                        content={{}}
                        containerClasses={`
                            ${style["search-article-container"]}
                            ${index !== 0 ? style["search-article-gap"] : ""}
                        `}
                        imageClasses={style["search-article-image"]}
                        contentContainer={style["search-article-content"]}
                        isLoading
                    />
                ))}

            {!isLoading && data.length === 0 && (
                <SimpleEmptyState text="Artikel tidak ditemukan." />
            )}

            {!isLoading &&
                data.length > 0 &&
                data.map((article, index) => (
                    <CardArticle
                        key={`article-${index + 1}`}
                        content={article}
                        containerClasses={`
                            ${style["search-article-container"]}
                            ${index !== 0 ? style["search-article-gap"] : ""}
                        `}
                        imageClasses={style["search-article-image"]}
                        contentContainer={style["search-article-content"]}
                        isLoading={false}
                        onClick={handleCardClick}
                    />
                ))}
        </div>
    );
}
