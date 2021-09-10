import style from "components/Banner/banner.module.css";

export default function BannerAbout({ name }) {
    return (
        <div
            className={`${style["about-banner-padding"]} box-border bg-banner-img h-banner bg-cover sm:h-banner-sm overflow-hidden`}
        >
            <div className="flex bg-transparentPrimary h-banner w-full sm:h-banner-sm overflow-hidden z-10">
                <span className="font-bold text-white text-header3 py-60px px-16px sm:text-header1 sm:py-100px sm:px-60px desktop:px-160px z-20">
                    {name}
                </span>
            </div>
        </div>
    );
}
