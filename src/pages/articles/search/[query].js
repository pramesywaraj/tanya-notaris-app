import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import usePagination from "hooks/usePagination";

import style from "styles/articles.module.css";

import { Search } from "components/Search";
import { SearchArticle } from "components/Artikel";
import Pagination from "components/Pagination";

const articlesEndpoint = "v1/articles";

export default function ArticleSearchPage() {
    const router = useRouter();

    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (router.asPath !== router.route) {
            const { query } = router.query;
            setSearchQuery(`q=${query}&`);
        }
    }, [router]);

    const {
        items: articles,
        paginationItems,
        error,
        setPage,
        isLoadingData: isLoadingArticle,
    } = usePagination(articlesEndpoint, searchQuery);

    const handleRedirectArticleSearch = (param) => {
        router.push(`/articles/search/${param}`);
    };

    const handleChangePage = (selectedPage) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setPage(selectedPage);
    };

    return (
        <section className={style["articles-section-container"]}>
            <div className={style["articles-header"]}>
                <h1 className={style["articles-title"]}>Pencarian Artikel</h1>
                <Search
                    classNames="w-full mt-4 tablet:w-auto lgTablet:mt-0"
                    onSearch={handleRedirectArticleSearch}
                />
            </div>
            <div className={style["articles-content-container"]}>
                <SearchArticle data={articles} isLoading={isLoadingArticle} error={error} />
                {paginationItems && paginationItems.length > 0 && (
                    <div className={style["articles-pagination-container"]}>
                        <Pagination data={paginationItems} onPageChange={handleChangePage} />
                    </div>
                )}
            </div>
        </section>
    );
}
