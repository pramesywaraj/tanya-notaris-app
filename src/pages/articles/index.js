import { useState } from "react";
import useRequest from "hooks/useRequest";

import style from "styles/articles.module.css";

import { Search } from "components/Search";
import { PopularArticles, HighlightArticle, NewArticles } from "components/Artikel";

const articlesEndpoint = "v1/articles";

export default function ArticlesPage() {
    const {
        data: articlesHighlighted,
        isLoadingData: isLoadingHighlightedArticles,
        error: errorHighlightedArticle,
    } = useRequest(`${articlesEndpoint}/highlighted?per_page=3`);

    const {
        data: articlesPopular,
        isLoadingData: isLoadingPopularArticles,
        error: errorPopularArticle,
    } = useRequest(`${articlesEndpoint}/popular?per_page=4`);

    const {
        data: articlesLatest,
        isLoadingData: isLoadingLatestArticles,
        error: errorLatestArticle,
    } = useRequest(`${articlesEndpoint}?per_page=4`);

    return (
        <section className={style["articles-section-container"]}>
            <div className={style["articles-header"]}>
                <h1 className={style["articles-title"]}>Artikel Notaris</h1>
                <Search classNames="w-full mt-4 tablet:w-auto lgTablet:mt-0" />
            </div>
            <div className={style["articles-content-container"]}>
                <HighlightArticle
                    data={articlesHighlighted?.data || []}
                    isLoading={isLoadingHighlightedArticles}
                />
                <NewArticles
                    data={articlesLatest?.data || []}
                    isLoading={isLoadingLatestArticles}
                />
                <PopularArticles
                    data={articlesPopular?.data || []}
                    isLoading={isLoadingPopularArticles}
                />
            </div>
        </section>
    );
}
