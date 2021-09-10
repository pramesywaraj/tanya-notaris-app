import style from "components/Loader/loader.module.css";

export default function ScreenLoader({ isScreenLoaderShow }) {
    let containerStyle = `${style["screen-loader-container"]}`;

    if (isScreenLoaderShow) containerStyle = [containerStyle, style["loader-on"]].join(" ");

    return (
        <div className={containerStyle}>
            <div className={style["spinner"]} />
        </div>
    );
}
