import style from "components/Artikel/articles.module.css";

import { CardArticle } from "components/Card";

export default function NewArticles({ data = [], isLoading, onClick }) {
    const renderContents = () =>
        data.map((content, index) => (
            <CardArticle
                key={`article-${index + 1}`}
                content={content}
                contentContainer={style["article-small-container"]}
                isLoading={isLoading}
                onClick={() => onClick(content)}
            />
        ));

    return (
        <section className={style["articles-section-margin"]}>
            <h2 className={style["article-section-title"]}>Artikel Terbaru</h2>
            <div className={style["newarticle-container"]}>{renderContents()}</div>
        </section>
    );
}
