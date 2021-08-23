import { CardSocialMedia } from "components/Card";

import { useRouter } from "next/router";

import "styles/articles.module.css";


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
            <CardSocialMedia 
                title = "Bagikan Artikel"
            />
        </>
    )
}
