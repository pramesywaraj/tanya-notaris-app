import "components/Artikel/articles.module.css"
import { useState } from "react"

export default function PopularArticles() {
    const [contents, setContents] = useState([
        {
            title : "Perbedaan Perjanjian Kerja Waktu Tertentu (PKWT) dan Perjanjian Outsourcing",
            date : "12 Jan 2021",
            image_link : "/image-newarticle.svg",
        },
        {
            title : "Perbedaan Perjanjian Kerja Waktu Tertentu (PKWT) dan Perjanjian Outsourcing",
            date : "12 Des 2020",
            image_link : "/highlight-2.svg",
        },
        {
            title : "Perbedaan Perjanjian Kerja Waktu Tertentu (PKWT) dan Perjanjian Outsourcing",
            date : "12 Des 2020",
            image_link : "/image-newarticle.svg",
        },
        {
            title : "Perbedaan Perjanjian Kerja Waktu Tertentu (PKWT) dan Perjanjian Outsourcing",
            date : "12 Des 2020",
            image_link : "/highlight-2.svg",
        },
    ]);

    const renderContents = contents.map((content, index) => (
        <div className="popular-content">
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
