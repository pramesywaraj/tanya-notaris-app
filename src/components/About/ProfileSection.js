/* eslint-disable @next/next/no-img-element */
export default function ProfileSection() {
    const content = {
        title: "Tentang Tanya Notaris",
        description1:
            "Tanya Notaris merupakan platform digital yang bergerak khusus di pelayanan kenotariatan dan hukum perdata. Kami melayani jasa legal untuk individu maupun instansi. Kami berfokus pada kualitas dan kenyamanan pelayanan serta memastikan biaya terjangkau untuk semua kalangan. ",
        description2:
            "Tanya Notaris juga bergerak dalam penyebaran informasi dan edukasi terkait dengan kenotariatan dan hukum perdata. Tanya Notaris siap menjadi garda terdepan agar akses terhadap informasi, edukasi, dan jasa layanan hukum yang mudah dan terjangkau harus dimiliki semua kalangan.",
        image_link: "/section2.svg",
    };

    const content1 = {
        title: "Mengapa Layanan Kami Terpercaya",
        description1:
            "Layanan kami dikerjakan oleh notaris resmi dan ahli hukum perdata yang berpengalaman, sehingga hasil akhir pekerjaan memiliki kualitas yang baik dan professional.",
        description2:
            "Proses pengumpulan data-data unutuk ketentuan dan persyaratan administrasi legal juga dilakukan langsung dengan administrator Tanya Notaris, tidak ada proses input secara online di website, sehingga aman dari kebocoran dan pencurian data.",
        description3:
            "Tanya Notaris sangat mengedepankan transparansi terhadap penggunaan data dan proses pengerjaan. Seluruh informasi untuk kebutuhan administrasi sudah tertera di setiap fitur layanan, sehingga pengguna dapat mengetahui dan mempersiapkannya.",
        image_link: "/section2.svg",
    };

    return (
        <section className="mt-40px mb-100px sm:py-32px lg:py-40px">
            <div className="flex flex-col gap-y-30px pb-40px lg:flex-row-reverse lg:gap-x-60px lg:pb-100px">
                <div className="flex flex-col gap-y-16px lg:gap-y-32px">
                    <h1 className="text-header3 font-bold sm:text-header1">{content.title}</h1>
                    <p className="text-small sm:text-body">{content.description1}</p>
                    <p className="text-small sm:text-body">{content.description2}</p>
                </div>
                <div className="flex lg:w-section-last">
                    <img src={content.image_link} alt="Section" className="w-full max-h-390px" />
                </div>
            </div>
            <div className="flex flex-col gap-y-30px lg:flex-row lg:gap-x-60px">
                <div className="flex flex-col gap-y-16px lg:gap-y-32px">
                    <h1 className="text-header3 font-bold sm:text-header1">{content1.title}</h1>
                    <p className="text-small sm:text-body">{content1.description1}</p>
                    <p className="text-small sm:text-body">{content1.description2}</p>
                    <p className="text-small sm:text-body">{content1.description3}</p>
                </div>
                <div className="flex lg:w-section-last">
                    <img src={content1.image_link} alt="Section" className="w-full max-h-390px" />
                </div>
            </div>
        </section>
    );
}
