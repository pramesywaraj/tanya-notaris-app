import { useRouter } from "next/router";
import style from "components/Artikel/articles.module.css";

import { CardArticle } from "components/Card";

export default function PopularArticles({ data = [], isLoading }) {
    const router = useRouter();

    const handleNavigateToDetail = (id) => {
        router.push(`/articles/detail/${id}`);
    };

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
            />
        ));

    return (
        <section>
            <h2 className={style["article-section-title"]}>Artikel Popular</h2>
            <div className={style["popular-container"]}>{renderContents()}</div>
        </section>
    );
}
