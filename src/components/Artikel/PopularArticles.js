import { useRouter } from "next/router";
import style from "components/Artikel/articles.module.css";

import { CardArticle } from "components/Card";

export default function PopularArticles({ data = [], isLoading, onClick }) {
    const renderContents = () =>
        data.map((content, index) => (
            <CardArticle
                key={`article-${index + 1}`}
                content={content}
                containerClasses={`
                    ${index !== data.length - 1 ? style["bordered"] : ""}
                    ${style["popular-content"]}
                `}
                imageClasses={style["highlight-image-small"]}
                contentContainer={style["article-small-container"]}
                isLoading={isLoading}
                onClick={() => onClick(content)}
            />
        ));

    return (
        <section className={style["articles-section-margin"]}>
            <h2 className={style["article-section-title"]}>Artikel Popular</h2>
            <div className={style["popular-container"]}>{renderContents()}</div>
        </section>
    );
}
