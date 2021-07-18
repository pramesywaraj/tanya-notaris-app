import "components/Artikel/articles.module.css"

export default function Highlight() {
    const content = {
        title : "Perbedaan Perjanjian Kerja Waktu Tertentu (PKWT) dan Perjanjian Outsourcing",
        date : "12 Jan 2021",
        image_link : "/highlight-1.svg",
    }

    const content1 = {
        title : "Perbedaan Perjanjian Kerja Waktu Tertentu (PKWT) dan Perjanjian Outsourcing",
        date : "12 Des 2020",
        image_link : "/highlight-2.svg",
    }

    const content2 = {
        description : "Kami sangat senang berbagi pengetahuan kami. Karenanya kami selalu terbuka untuk peluang kerjasama dalam mengadakan pelatihan hukum, seperti Legal Workshop, Legal Mentor, dan Legal Clinic.",
        image_link : "/highlight-3.svg",
    }

    return (
        <section className="highlight-container">
            <div className="highlight-first">
                <img src={content.image_link} alt="Section Image" className="highlight-image-big" />
                <h5 className="font-bold">{content.title}</h5>
                <small className="text-mute">{content.date}</small>
            </div>
            <div className="highlight-second">
                <div className="second-content">
                    <img src={content1.image_link} alt="Section Image" className="highlight-image-small" />
                    <div>
                        <p className="font-bold">{content1.title}</p>
                        <small className="text-mute">{content1.date}</small>
                    </div>
                </div>
                <div className="second-content">
                    <img src={content1.image_link} alt="Section Image" className="highlight-image-small" />
                    <div>
                        <p className="font-bold">{content1.title}</p>
                        <small className="text-mute">{content1.date}</small>
                    </div>
                </div>
            </div>
        </section>
    )
}
