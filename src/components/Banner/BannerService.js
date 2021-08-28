import style from "components/Banner/banner.module.css";

export default function BannerService({ name }) {
    return (
        <div className={`${style["service-banner-padding"]} ${style["service-banner-container"]}`}>
            <h2 className={`${style["service-banner-title"]}`}>{name}</h2>
        </div>
    );
}
