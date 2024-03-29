import { useRouter } from "next/router";
import Head from "next/head";
import useRequest from "hooks/useRequest";

import style from "styles/articles.module.css";

import { Search } from "components/Search";
import { PopularArticles, HighlightArticle, NewArticles } from "components/Artikel";

const articlesEndpoint = "v1/articles";

export default function ArticlesPage() {
    const router = useRouter();
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

    const handleRedirectArticleSearch = (param) => {
        router.push(`/articles/search/${param}`);
    };

    const handleCardClick = (article) => {
        if (!article) return false;
        // if (router.asPath === router.route) return false;

        const { slug } = article;
        router.push(`/articles/detail/${slug}`);
    };

    return (
        <section className={style["articles-section-container"]}>
            <Head>
                <title>Tanya Notaris - Artikel Notaris</title>
                <meta property="og:title" content="Tanya Notaris - Artikel Notaris" key="title" />
            </Head>
            <div className={style["articles-header"]}>
                <h1 className={style["articles-title"]}>Artikel Notaris</h1>
                <Search
                    classNames="w-full mt-4 tablet:w-auto lgTablet:mt-0"
                    onSearch={handleRedirectArticleSearch}
                />
            </div>
            <div className={style["articles-content-container"]}>
                <HighlightArticle
                    data={articlesHighlighted?.data || []}
                    isLoading={isLoadingHighlightedArticles}
                    onClick={handleCardClick}
                />
                <NewArticles
                    data={articlesLatest?.data || []}
                    isLoading={isLoadingLatestArticles}
                    onClick={handleCardClick}
                />
                <PopularArticles
                    data={articlesPopular?.data || []}
                    isLoading={isLoadingPopularArticles}
                    onClick={handleCardClick}
                />
            </div>
        </section>
    );
}
