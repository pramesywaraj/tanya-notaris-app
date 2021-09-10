import style from "components/Banner/banner.module.css";
import { SkeletonLoader } from "components/Loader";

export default function BannerService({ name, isLoading }) {
    return (
        <div className={`${style["service-banner-padding"]} ${style["service-banner-container"]}`}>
            {!isLoading && <h2 className={`${style["service-banner-title"]}`}>{name}</h2>}
            {isLoading && (
                <SkeletonLoader width={200} height={30} color="#db6842" highlightColor="#cc5b35" />
            )}
        </div>
    );
}
