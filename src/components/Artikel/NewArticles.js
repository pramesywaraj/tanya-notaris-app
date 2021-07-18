import "components/Artikel/articles.module.css"

export default function NewArticles() {
    const content = {
        title : "Perbedaan Perjanjian Kerja Waktu Tertentu (PKWT) dan Perjanjian Outsourcing",
        date : "12 Jan 2021",
        image_link : "/image-newarticle.svg",
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
        <section>
            <h2>
                Artikel Terbaru
            </h2>
            <div className="newarticle-container">
                <div className="newarticle-divider">
                    <div className="newarticle-content">
                        <img src={content.image_link} alt="New Article Image" className="newarticle-image" />
                        <h1 className="text-body1">{content.title}</h1>
                        <p className="text-xxsmall text-mute">{content.date}</p>
                    </div>

                    <div className="newarticle-content">
                        <img src={content.image_link} alt="New Article Image" className="newarticle-image" />
                        <h1 className="text-body1">{content.title}</h1>
                        <p className="text-xxsmall text-mute">{content.date}</p>
                    </div>
                </div>

                <div className="newarticle-divider">
                    <div className="newarticle-content">
                        <img src={content.image_link} alt="New Article Image" className="newarticle-image" />
                        <h1 className="text-body1">{content.title}</h1>
                        <p className="text-xxsmall text-mute">{content.date}</p>
                    </div>

                    <div className="newarticle-content">
                        <img src={content.image_link} alt="New Article Image" className="newarticle-image" />
                        <h1 className="text-body1">{content.title}</h1>
                        <p className="text-xxsmall text-mute">{content.date}</p>
                    </div>
                </div>
            </div>

        </section>
    )
}
