import { useState } from "react";
import styles from "components/Card/card.module.css";

export default function CardFooterBenefit() {
    const content = {
        title: "Kenapa harus mendirikan PT di Tanya Notaris?",
        image_link: "/footer_layanan.png",
    };

    const [texts, setTexts] = useState([
        {
            text: "Semua layanan kami dikerjangan dengan standar yang tinggi secara in-house oleh para legal dan notaris resmi dan berpengalaman.",
        },
        {
            text: "Terpecaya oleh lebih dari 5.000 UMKM, Inkubator, Akselerator dan terpilih menjadi mitra Pemerintah.",
        },
        { text: "Jangkauan secara Nasional" },
        { text: "Data serta informasi Anda terjamin aman dan terlindungi" },
        { text: "Akses langsung ke para pakar kami" },
    ]);

    return (
        <div className={styles["card-benefit-container"]}>
            <img
                src={content.image_link}
                alt="Footer Detail Layanan"
                className={styles["card-benefit-image"]}
            />
            <div>
                <h2 className={styles["card-benefit-title"]}>{content.title}</h2>
                <ul>
                    {texts.map((text, index) => (
                        <li key={`text-${index + 1}`} className={styles["card-benefit-list"]}>
                            <img src="/icon_checklist.svg" alt="Footer Detail Layanan" />
                            <p className="text-body font-semibold">{text.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
