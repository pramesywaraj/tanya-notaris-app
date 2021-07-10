export default function Section3() {
    const content = {
        title : "Tentang Perusahaan",
        description1 : "Kontrak Hukum adalah platform cerdas pertama yang melayani jasa legal untuk UMKM dan perusahaan besar sejak 2016 di Indonesia. Kami bangga menjadi yang pertama dan satu-satunya platform yang melayani legalitas tanpa ada batasan, berkualitas, dan terjangkau. Kontrak Hukum juga merupakan startup di bidang hukum pertama yang mendapatkan pendanaan di Indonesia.",
        description2 : "Kontrak Hukum sebagai startup ternama, berwawasan, dan inovatif yang juga tercermin dalam budaya dan layanan dari tim Kontrak Hukum. Kontrak Hukum percaya bahwa jasa layanan hukum yang mudah dan terjangkau harus dimiliki oleh semua orang.",
        image_link : "/section2.svg"
    }

    const content1 = {
        title : "Apa Kata CEO Kami?",
        description1 : "Kontrak Hukum hadir untuk melayani segala kebutuhan hukum Anda secara cepat, mudah, dan terjangkau. Dengan sistem yang terintegrasi secara digital, Kontrak Hukum dapat menyelesaikan permasalahan hukum Anda dalam hitungan jam secara optimal.",
        description2 : "Rieke juga dikenal sebagai salah satu pembawa berita ternama di Indonesia, salah satu programnya adalah 'Top Executives' dimana dia berhasil mewawancarai berbagai eksekutif nasional maupun internasional, seperti Steve Forbes, Dato Sri Tahir (Mayapada), Purnomo Prawiro (Blue Bird), William Tanuwijaya (Tokopedia), dan lainnya.",
        image_link : "/section2.svg",
    }

    return (
        <section className="pt-40px px-16px sm:py-32px sm:px-60px lg:py-40px lg:px-160px">
            <div className="flex flex-col gap-y-30px pb-40px lg:flex-row-reverse lg:gap-x-60px lg:pb-100px">
                <div className="flex flex-col gap-y-16px lg:gap-y-32px">
                    <h1 className="text-header3 font-bold sm:text-header1"> 
                        {content.title}
                    </h1>
                    <p className="text-small sm:text-body">
                        {content.description1} 
                    </p>
                    <p className="text-small sm:text-body">
                        {content.description2}
                    </p>
                </div>
                <div className="flex lg:w-section-last">
                    <img src={content.image_link} alt="Section Image" className="w-full max-h-390px" />
                </div>
            </div>
            <div className="flex flex-col gap-y-30px lg:flex-row lg:gap-x-60px">
                <div className="flex flex-col gap-y-16px lg:gap-y-32px">
                    <h1 className="text-header3 font-bold sm:text-header1"> 
                        {content1.title}
                    </h1>
                    <p className="text-small sm:text-body">
                        {content1.description1} 
                    </p>
                    <p className="text-small sm:text-body">
                        {content1.description2}
                    </p>
                </div>
                <div className="flex lg:w-section-last">
                    <img src={content1.image_link} alt="Section Image" className="w-full max-h-390px" />
                </div>
            </div>
        </section>
    )
}
