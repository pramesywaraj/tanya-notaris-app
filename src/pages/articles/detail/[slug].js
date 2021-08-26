import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import useRequest from "hooks/useRequest";

import style from "styles/articles.module.css";

import { IconButton } from "components/Button";
import { SkeletonLoader } from "components/Loader";

import { imageLoader } from "Utils";
import IconTwitter from "assets/icon-twitter.svg";
import IconFacebook from "assets/icon-facebook.svg";
import IconLinkedin from "assets/icon-linkedin.svg";

const articlesEndpoint = "v1/articles";

function FooterSocialMedia() {
    return (
        <div className={style["articles-detail-social-container"]}>
            <p className="font-bold mb-4">Bagikan Artikel</p>
            <div className="flex flex-row">
                <IconButton
                    src={IconTwitter}
                    onClick={() => console.log("CHECK")}
                    alt="Twitter"
                    styles={{
                        padding: 0,
                        display: "inline-block",
                        verticalAlign: "middle",
                    }}
                />
                <IconButton
                    src={IconFacebook}
                    onClick={() => console.log("CHECK")}
                    alt="Facebook"
                    styles={{
                        padding: 0,
                        marginLeft: "1rem",
                        display: "inline-block",
                        verticalAlign: "middle",
                    }}
                />
                <IconButton
                    src={IconLinkedin}
                    onClick={() => console.log("CHECK")}
                    alt="Linkedin"
                    styles={{
                        padding: 0,
                        marginLeft: "1rem",
                        display: "inline-block",
                        verticalAlign: "middle",
                    }}
                />
            </div>
        </div>
    );
}

export default function ArticleDetailPage() {
    const router = useRouter();
    const [slug, setSlug] = useState("");

    useEffect(() => {
        if (router.asPath !== router.route) {
            const { slug } = router.query;
            setSlug(slug);
        }
    }, [router]);

    const {
        data: detail,
        error,
        isLoadingData,
    } = useRequest(`${articlesEndpoint}/${slug || router.query.slug}`);

    return (
        <section className={style["articles-detail-section-container"]}>
            <div className={style["articles-detail-container"]}>
                <div className={style["articles-detail-title"]}>
                    {isLoadingData ? <SkeletonLoader height={20} /> : <h2>{detail.data?.title}</h2>}
                    {isLoadingData ? (
                        <SkeletonLoader height={20} />
                    ) : (
                            <p>{detail.data?.published_at}</p>
                        )}
                </div>
                <div className={style["articles-detail-image"]}>
                    {isLoadingData ? (
                        <SkeletonLoader height={"100%"} />
                    ) : (
                            <Image
                                placeholder="blur"
                                blurDataURL={detail.data?.featured_image_url || ""}
                                loader={imageLoader}
                                src={detail.data?.featured_image_url || ""}
                                alt={detail.data?.title || ""}
                                layout="fill"
                                objectFit="cover"
                            />
                        )}
                </div>
                <p className="mb-20">Detail Berita</p>
            </div>
            <FooterSocialMedia />
        </section>
    );
}
