import "components/Artikel/articles.module.css"
import { useState } from "react"
import { useRouter } from "next/router";

export default function PopularArticles() {
    const router = useRouter();
    const [contents, setContents] = useState([
        {
            id : 1,
            title : "Perbedaan Perjanjian Kerja Waktu Tertentu (PKWT) dan Perjanjian Outsourcing",
            date : "12 Jan 2021",
            image_link : "/image-newarticle.svg",
        },
        {
            id : 2,
            title : "Perbedaan Perjanjian Kerja Waktu Tertentu (PKWT) dan Perjanjian Outsourcing",
            date : "12 Des 2020",
            image_link : "/highlight-2.svg",
        },
        {
            id : 3,
            title : "Perbedaan Perjanjian Kerja Waktu Tertentu (PKWT) dan Perjanjian Outsourcing",
            date : "12 Des 2020",
            image_link : "/image-newarticle.svg",
        },
        {
            id : 4,
            title : "Perbedaan Perjanjian Kerja Waktu Tertentu (PKWT) dan Perjanjian Outsourcing",
            date : "12 Des 2020",
            image_link : "/highlight-2.svg",
        },
    ]);

    const handleNavigateToDetail = (id) => {
        router.push(`/articles/detail/${id}`);
    };

    const renderContents = contents.map((content, index) => (    
        <div className="popular-content" onClick={() => handleNavigateToDetail(content.id)}>
            <img src={content.image_link} alt="Section Image" className="highlight-image-small" />
            <div>
                <p className="font-bold">{content.title}</p>
                <small className="text-mute">{content.date}</small>
            </div>
        </div>
    ));

    return (
        <section>
            <h2>
                Artikel Popular
            </h2>
            <div className="popular-container">
                {renderContents}
            </div>
        </section>
    )
}
