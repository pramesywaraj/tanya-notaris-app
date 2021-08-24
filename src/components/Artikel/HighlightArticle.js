import style from "components/Artikel/articles.module.css";

import { CardArticle } from "components/Card";

export default function HighlightArticle({ data, isLoading }) {
    const [firstPost, secondPost, thirdPost] = data;

    return (
        <section className={style["highlight-container"]}>
            <div className={style["bordered"]}>
                <CardArticle
                    content={firstPost}
                    contentContainer={style["highlight-first-text"]}
                    imageClasses={style["highlight-image-big"]}
                    isLoading={isLoading}
                />
            </div>
            <div className={style["highlight-second"]}>
                <CardArticle
                    content={secondPost}
                    contentContainer={style["article-small-container"]}
                    imageClasses={style["highlight-image-small"]}
                    containerClasses={`${style["second-content"]} ${style["bordered"]}`}
                    isLoading={isLoading}
                />
                <CardArticle
                    content={thirdPost}
                    contentContainer={style["article-small-container"]}
                    imageClasses={style["highlight-image-small"]}
                    containerClasses={`${style["second-content"]} ${style["bordered"]}`}
                    isLoading={isLoading}
                />
            </div>
        </section>
    );
}
