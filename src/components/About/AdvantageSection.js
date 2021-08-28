import { useState } from "react";

export default function AdvantageSection() {
    const [contents, setContents] = useState([
        {
            title: "Keahlian",
            description:
                "Semua layanan kami dikerjakan dengan standar tinggi secara in-house oleh para ahli hukum dan notaris",
            image_link: "/iconkeahlian.png",
        },
        {
            title: "Reputasi",
            description:
                "Terpecaya oleh lebih dari 5.000 UMKM, Inkubator, Akselerator dan terpilih menjadi mitra Pemerintah.",
            image_link: "/icon-reputasi.png",
        },
        {
            title: "Peduli",
            description:
                "Kami sungguh peduli dengan keperluan anda, memberikan yang terbaik sudah menjadi DNA kami.",
            image_link: "/icon-peduli.png",
        },
    ]);

    const img = {
        image_link: "/section.svg",
    };

    const renderContents = contents.map((content, index) => (
        <div key={`content-${index + 1}`} className="flex flex-row gap-x-16px">
            <div className="flex items-center justify-center w-icon h-icon bg-secondary rounded-2xl">
                <img src={content.image_link} alt="Section Image" className="" />
            </div>
            <div>
                <h1 className="text-body font-bold text-secondary sm:text-header5">
                    {content.title}
                </h1>
                <p className="text-xsmall font-light sm:text-body">{content.description}</p>
            </div>
        </div>
    ));

    return (
        <section className="pt-40px sm:py-32px lg:py-40px">
            <div className="flex flex-col gap-y-16px md:flex-row gap-x-16px">
                <div className="flex flex-col gap-y-16px md:flex-1 lg:pr-100px lg:gap-y-32px">
                    <h1 className="text-header3 font-bold lg:text-header1">
                        Kenapa Menggunakan Jasa Layanan Kami
                    </h1>
                    <h2 className="text-body font-semibold text-mute lg:text-header5">
                        Mengapa para perusahaan ternama, UMKM dan Startup menyukai kami
                    </h2>

                    {/* Render Content */}
                    {renderContents}
                </div>
                <div className="flex md:flex-1">
                    <img
                        src={img.image_link}
                        alt="Section Image"
                        className="md:w-full object-cover rounded-2xl"
                    />
                </div>
            </div>
        </section>
    );
}
