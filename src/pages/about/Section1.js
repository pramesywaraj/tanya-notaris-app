import Section from "components/Section"

export default function Section1() {
    const content = {
        description : "Tanya Notaris berfokus untuk melindungi sisi hukum bisnis dari usaha kecil dan menengah (UKM) melalui platform digital",
        image_link : "/section1.png"
    }

    const content1 = {
        description : "Kontrak Hukum hadir untuk melayani segala kebutuhan hukum Anda secara cepat, mudah, dan terjangkau. Dengan sistem yang terintegrasi secara digital, Kontrak Hukum dapat menyelesaikan permasalahan hukum Anda dalam hitungan jam secara optimal.",
        image_link : "/section2.png",
    }

    const content2 = {
        description : "Kami sangat senang berbagi pengetahuan kami. Karenanya kami selalu terbuka untuk peluang kerjasama dalam mengadakan pelatihan hukum, seperti Legal Workshop, Legal Mentor, dan Legal Clinic.",
        image_link : "/section3.png",
    }
    return (
        <section className="pt-40px px-1rem sm:py-2rem sm:px-3.75rem lg:py-6.25rem lg:px-10rem">
                <div className="flex flex-col items-center gap-x-30px pb-40px sm:pb-80px sm:flex-row">
                    <div className="object-cover sm:flex-1">
                        <img src={content.image_link} alt="Section Image" className="rounded-lg" />
                    </div>
                    <div className="self-center font-bold pt-1rem text-section1-mobile sm:flex-1 sm:pt-0px">
                        <p className={`font-semibold text-section-sm md:text-section1-tab xl:text-section1-desktop`}>
                            {content.description}
                        </p>
                    </div>
                </div>
            <div class="flex flex-col gap-y-30px sm:flex-row sm:gap-x-30px">
                <Section image={content1.image_link} description={content1.description} variant="text-medium" size="width-medium"/>
                <Section image={content2.image_link} description={content2.description} variant="text-medium" size="width-medium"/>
            </div>
        </section>
    )
}
