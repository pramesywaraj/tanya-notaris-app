export default function BannerService({ name }) {

    const content = {
        name: name,
    };

    return (
        <div className="about-banner-padding service-banner-container">
            <h2 className="service-banner-title">{name}</h2>
        </div>
    )
}