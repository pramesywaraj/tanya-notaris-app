import useRequest from "hooks/useRequest";

import { CardArticle } from "components/Card";
import { Button } from "components/Button";

import styles from "styles/home.module.css";

const HomeNewArticles = ({ handleMoveToScreen }) => {
    const { data: articles, error, isLoadingData } = useRequest("v1/articles?per_page=4");

    if (!isLoadingData && articles && articles.data.length === 0) return null;
    if (error) return null;

    const handleCardClick = (article) => {
        if (!article) return false;

        const { slug } = article;
        handleMoveToScreen(`/articles/detail/${slug}`);
    };

    return (
        <section className={`${styles["home-section"]}`}>
            <h1>Artikel Notaris</h1>
            <div className={styles["home-articles-container"]}>
                {!isLoadingData &&
                    articles.data.map((article, index) => (
                        <CardArticle
                            key={`article-${index + 1}`}
                            content={article}
                            onClick={() => handleCardClick(article)}
                        />
                    ))}

                {isLoadingData &&
                    [1, 2, 3, 4].map((_, index) => (
                        <CardArticle key={`article-${index + 1}`} content={{}} isLoading />
                    ))}
            </div>
            <div className="w-full flex justify-center">
                <Button
                    onClick={() => handleMoveToScreen("/articles")}
                    classNames="text-small"
                    styles={{ width: "100%", maxWidth: 235, marginTop: 32, borderRadius: 12 }}
                    type="submit"
                >
                    Lihat Semua Artikel
                </Button>
            </div>
        </section>
    );
};

export default HomeNewArticles;
