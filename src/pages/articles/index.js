import "styles/articles.module.css";

import Highlight from "components/Artikel/Highlight";
import { Search } from "components/Search";
import NewArticles from "components/Artikel/NewArticles";
import { PopularArticles } from "components/Artikel";

export default function index() {

    return (
        <>
            <section className="header-articles">
                <h1 className="header-title">Artikel Notaris</h1>
                <Search classNames="w-full tablet:w-auto"/>
            </section>
            <Highlight />
            <NewArticles />
            <PopularArticles />
        </>
    )
}
