import { useRouter } from "next/router";

import "styles/articles.module.css";

import { IconButton } from "components/Button";

import IconTwitter from "assets/icon-twitter.svg";
import IconFacebook from "assets/icon-facebook.svg";
import IconLinkedin from "assets/icon-linkedin.svg";

function FooterSocialMedia() {

    return (
        <div className="detail-social-container">
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

export default function Detail() {

    const router = useRouter();

    return (
        <>
            <div className="detail-container">
                <h4 className="mb-3">Title Page</h4>
                <p className="text-xxsmall text-right text-mute mb-6">Tanggal</p>
                <img src="/highlight-2.svg" alt="Detail Image" className="mb-10 detail-image" />
                <p className="mb-20">Detail Berita</p>
            </div>
            <FooterSocialMedia />
        </>
    )
}
