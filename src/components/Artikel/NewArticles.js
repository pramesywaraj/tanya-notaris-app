import { useState } from "react";
import "components/Artikel/articles.module.css";

import { CardSmallArticle } from "components/Card";

export default function NewArticles() {
    const [contents, setContents] = useState([
        {
            title: "Perbedaan Perjanjian Kerja Waktu Tertentu (PKWT) dan Perjanjian Outsourcing",
            date: "12 Jan 2021",
            image_link: "/image-newarticle.svg",
        },
        {
            title: "Perbedaan Perjanjian Kerja Waktu Tertentu (PKWT) dan Perjanjian Outsourcing",
            date: "12 Des 2020",
            image_link: "/highlight-2.svg",
        },
        {
            title: "Perbedaan Perjanjian Kerja Waktu Tertentu (PKWT) dan Perjanjian Outsourcing",
            date: "12 Des 2020",
            image_link: "/image-newarticle.svg",
        },
        {
            title: "Perbedaan Perjanjian Kerja Waktu Tertentu (PKWT) dan Perjanjian Outsourcing",
            date: "12 Des 2020",
            image_link: "/highlight-2.svg",
        },
    ]);

    const renderContents = contents.map((content, index) => (
        <CardSmallArticle key={`article-${index + 1}`} content={content} />
    ));

    return (
        <section>
            <h2>Artikel Terbaru</h2>
            <div className="newarticle-container">{renderContents}</div>
        </section>
    );
}
