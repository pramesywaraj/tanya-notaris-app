/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

export default function AdvantageSection() {
    const [contents, setContents] = useState([
        {
            title: "Baru Merintis Usaha",
            description: "Belum mengetahui tahap dan ketentuan legalitas usaha",
            description1:
                "Membuka usaha Bersama partner dan memerlukan panduan atau kepastian legalitas",
            description2: "Usaha anda baru masuk ke dalam kategori start-up",
            image_link: "/iconkeahlian.png",
        },
        {
            title: "Sedang di Tahap Scale-up",
            description: "Ingin mencari investor atau pendanaan dan memerlukan bantuan legal",
            description1:
                "Sudah mulai merekrut karyawan dalam jumlah banyak dan memerlukan bantuan legal terkait kontrak",
            description2: "Mulai melakukan Kerjasama usaha skala besar dengan klien",
            image_link: "/icon-reputasi.png",
        },
        {
            title: "Membutuhkan efisiensi ",
            description: "Perlu untuk menggunakan layanan legal tetapi tidak rutin",
            description1: "Perlu membuat perjanjian dan kontrak dalam skala besar",
            description2: "Membutuhkan tim legal outsorced",
            image_link: "/icon-peduli.png",
        },
    ]);

    const img = {
        image_link: "/section.svg",
    };

    const renderContents = contents.map((content, index) => (
        <div key={`content-${index + 1}`} className="flex flex-row gap-x-16px">
            <div className="flex items-center justify-center w-icon h-icon bg-secondary rounded-2xl">
                <img src={content.image_link} alt="Section" className="" />
            </div>
            <div className="flex-1">
                <h1 className="text-body pb-2 font-bold text-secondary sm:text-header5">
                    {content.title}
                </h1>
                <p className="text-xsmall pb-2 font-light sm:text-body">{content.description}</p>
                <p className="text-xsmall pb-2 font-light sm:text-body">{content.description1}</p>
                <p className="text-xsmall pb-2 font-light sm:text-body">{content.description2}</p>
            </div>
        </div>
    ));

    return (
        <section className="pt-40px sm:py-32px lg:py-40px">
            <div className="flex flex-col gap-y-16px md:flex-row gap-x-16px">
                <div className="flex flex-col gap-y-16px md:flex-1 lg:pr-100px lg:gap-y-32px">
                    <h1 className="text-header3 font-bold lg:text-header1">
                        Kapan Anda Perlu Menggunakan Layanan Kami?
                    </h1>
                    <h2 className="text-body font-semibold text-mute lg:text-header5"></h2>

                    {/* Render Content */}
                    {renderContents}
                </div>
                <div className="flex md:flex-1">
                    <img
                        src={img.image_link}
                        alt="Section"
                        className="md:w-full object-cover rounded-2xl"
                    />
                </div>
            </div>
        </section>
    );
}
