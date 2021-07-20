import "components/Artikel/articles.module.css"
import { useState } from "react"

export default function NewArticles() {
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
        <div className="newarticle-content">
            <img src={content.image_link} alt="New Article Image" className="newarticle-image" />
            <h1 className="text-body1">{content.title}</h1>
            <p className="text-xxsmall text-mute">{content.date}</p>
        </div>
    ));

    

    return (
        <section>
            <h2>
                Artikel Terbaru
            </h2>
            <div className="newarticle-container">
                {renderContents}
            </div>

        </section>
    )
}
