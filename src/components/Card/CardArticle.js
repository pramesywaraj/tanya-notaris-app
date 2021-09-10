import Image from "next/image";
import styles from "components/Card/card.module.css";

import { SkeletonLoader } from "components/Loader";

import { imageLoader } from "Utils";

export default function CardArticle({
    containerClasses,
    imageClasses,
    contentContainer,
    content,
    isLoading,
    onClick,
}) {
    if (!content && !isLoading) return null;
    return (
        <div
            role="button"
            tabIndex={0}
            className={`${styles["card-small-article-container"]} ${containerClasses}`}
            onClick={onClick}
            onKeyDown={() => { }}
        >
            <div className={`${styles["card-small-article-img"]} ${imageClasses}`}>
                {isLoading && <SkeletonLoader height={"100%"} />}
                {!isLoading && (
                    <Image
                        placeholder="blur"
                        blurDataURL={content.featured_image_url}
                        loader={imageLoader}
                        src={content.featured_image_url}
                        alt={content.title}
                        layout="fill"
                        objectFit="cover"
                    />
                )}
            </div>
            {!isLoading && (
                <div className={contentContainer || ""}>
                    <h3 className="text-body font-bold">{content?.title}</h3>
                    <p className="text-xxsmall text-mute">{content?.published_at}</p>
                </div>
            )}

            {isLoading && (
                <div className={`${contentContainer || ""} w-full`}>
                    <SkeletonLoader width={"100%"} />
                    <SkeletonLoader width={"50%"} />
                </div>
            )}
        </div>
    );
}

CardArticle.defaultProps = {
    isLoading: false,
};
