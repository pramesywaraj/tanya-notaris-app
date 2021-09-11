/* eslint-disable @next/next/no-img-element */
import Section from "components/Section";

export default function OverviewSection() {
    const content = {
        description:
            "Tanya Notaris berfokus untuk melindungi sisi hukum bisnis dari usaha kecil dan menengah (UKM) melalui platform digital",
        image_link: "/section1.png",
    };

    const content1 = {
        description:
            "Kontrak Hukum hadir untuk melayani segala kebutuhan hukum Anda secara cepat, mudah, dan terjangkau. Dengan sistem yang terintegrasi secara digital, Kontrak Hukum dapat menyelesaikan permasalahan hukum Anda dalam hitungan jam secara optimal.",
        image_link: "/section2.png",
    };

    const content2 = {
        description:
            "Kami sangat senang berbagi pengetahuan kami. Karenanya kami selalu terbuka untuk peluang kerjasama dalam mengadakan pelatihan hukum, seperti Legal Workshop, Legal Mentor, dan Legal Clinic.",
        image_link: "/section3.png",
    };
    return (
        <section className="pt-40px sm:py-32px lg:py-100px">
            <div className="flex flex-col items-center gap-x-30px pb-40px sm:pb-80px sm:flex-row">
                <div className="object-cover sm:flex-1">
                    <img src={content.image_link} alt="Section" className="rounded-lg" />
                </div>
                <div className="self-center font-bold pt-16px text-header5 sm:flex-1 sm:pt-0px">
                    <p className={`font-semibold text-body1 md:text-header5 xl:text-header2`}>
                        {content.description}
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-y-30px sm:flex-row sm:gap-x-30px">
                <Section
                    image={content1.image_link}
                    description={content1.description}
                    variant="text-medium"
                    size="width-medium"
                />
                <Section
                    image={content2.image_link}
                    description={content2.description}
                    variant="text-medium"
                    size="width-medium"
                />
            </div>
        </section>
    );
}
