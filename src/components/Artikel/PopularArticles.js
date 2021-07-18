import "components/Artikel/articles.module.css"

export default function PopularArticles() {
    const content = {
        title : "Pentingnya Perjanjian Hukum Saat Merintis Startup",
        date : "12 Jan 2021",
        image_link : "/highlight-1.svg",
    }

    const content1 = {
        title : "Pentingnya Perjanjian Hukum Saat Merintis Startup",
        date : "12 Des 2020",
        image_link : "/highlight-2.svg",
    }

    const content2 = {
        description : "Pentingnya Perjanjian Hukum Saat Merintis Startup",
        image_link : "/highlight-3.svg",
    }

    return (
        <section>
            <h2>
                Artikel Popular
            </h2>
            <div className="popular-container">
                <div className="popular-divider">
                    <div className="popular-content">
                        <img src={content1.image_link} alt="Section Image" className="highlight-image-small" />
                        <div>
                            <p className="font-bold">{content1.title}</p>
                            <small className="text-mute">{content1.date}</small>
                        </div>
                    </div>
                    <div className="popular-content">
                        <img src={content1.image_link} alt="Section Image" className="highlight-image-small" />
                        <div>
                            <p className="font-bold">{content1.title}</p>
                            <small className="text-mute">{content1.date}</small>
                        </div>
                    </div>
                </div>
                <div className="popular-divider">
                    <div className="popular-content">
                        <img src={content1.image_link} alt="Section Image" className="highlight-image-small" />
                        <div>
                            <p className="font-bold">{content1.title}</p>
                            <small className="text-mute">{content1.date}</small>
                        </div>
                    </div>
                    <div className="popular-content">
                        <img src={content1.image_link} alt="Section Image" className="highlight-image-small" />
                        <div>
                            <p className="font-bold">{content1.title}</p>
                            <small className="text-mute">{content1.date}</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
