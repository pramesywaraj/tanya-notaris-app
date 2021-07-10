export default function Section2() {
    const content = {
        title: "Keahlian",
        description : "Semua layanan kami dikerjakan dengan standar tinggi secara in-house oleh para ahli hukum dan notaris",
        image_link : "/iconkeahlian.png"
    }

    const content1 = {
        title: "Reputasi",
        description : "Terpecaya oleh lebih dari 5.000 UMKM, Inkubator, Akselerator dan terpilih menjadi mitra Pemerintah.",
        image_link : "/icon-reputasi.png",
    }

    const content2 = {
        title: "Peduli",
        description : "Kami sungguh peduli dengan keperluan anda, memberikan yang terbaik sudah menjadi DNA kami.",
        image_link : "/icon-peduli.png",
    }

    const img = {
        image_link : "/section.svg"
    }
    return (
        <section className="pt-40px px-16px sm:py-32px sm:px-60px lg:py-40px lg:px-160px">
            <div className="flex flex-col gap-y-16px md:flex-row gap-x-16px">
                <div className="flex flex-col gap-y-16px md:flex-1 lg:pr-100px lg:gap-y-32px">
                    <h1 className="text-header3 font-bold lg:text-header1">Kenapa Menggunakan Jasa Layanan Kami</h1>
                    <h2 className="text-body font-semibold text-mute lg:text-header5">Mengapa para perusahaan ternama, UMKM dan Startup menyukai kami</h2>
                    <div className="flex flex-row gap-x-16px">
                        <div className="flex items-center justify-center w-icon h-icon bg-primary rounded-2xl">
                            <img src={content.image_link} alt="Section Image" className=""/>
                        </div>
                        <div>
                            <h1 className="text-body font-bold text-primary sm:text-header5">{content.title}</h1>
                            <p className="text-xsmall font-light sm:text-body">{content.description}</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-16px">
                        <div className="flex items-center justify-center w-icon h-icon bg-secondary rounded-2xl">
                            <img src={content1.image_link} alt="Section Image" className=""/>
                        </div>
                        <div>
                            <h1 className="text-body font-bold text-secondary sm:text-header5">{content1.title}</h1>
                            <p className="text-xsmall font-light sm:text-body">{content1.description}</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-16px">
                        <div className="flex items-center justify-center w-icon h-icon bg-dark rounded-2xl">
                            <img src={content2.image_link} alt="Section Image" className=""/>
                        </div>
                        <div>
                            <h1 className="text-body font-bold text-dark sm:text-header5">{content2.title}</h1>
                            <p className="text-xsmall font-light sm:text-body">{content2.description}</p>
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-1">
                    <img src={img.image_link} alt="Section Image" className="w-full md:w-6/12 object-cover rounded-2xl"/>
                </div>
                <div>

                </div>
            </div>
        </section>
    )
}
