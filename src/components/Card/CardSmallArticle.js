import styles from "components/Card/card.module.css";

export default function CardSmallArticle({ content }) {
    return (
        <div className={styles["card-small-article-container"]}>
            <img
                src={content.image_link}
                alt={content.title}
                className={styles["card-small-article-img"]}
            />
            <h3 className="text-body font-bold">{content.title}</h3>
            <p className="text-xxsmall text-mute">{content.date}</p>
        </div>
    );
}
