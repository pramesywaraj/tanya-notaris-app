/* eslint-disable @next/next/no-img-element */
import Section from "components/Section";

export default function OverviewSection() {
    const content = {
        description:
            "Tanya Notaris berfokus pada pelayanan kenotariatan dan hukum perdata yang cepat, mudah, dan terjangkau, baik untuk kalangan individu, UMKM maupun company melalui platform digital.",
        image_link: "/section1.png",
    };

    const content1 = {
        description:
            "Pelayanan kami yang terintegrasi secara digital akan sangat memudahkan pengguna yang membutuhkan pelayanan hukum dengan cepat. Kami sangat memperhatikan kenyamanan pengguna dari segi waktu, biaya, dan kemudahan akses.",
        image_link: "/section2.png",
    };

    const content2 = {
        description:
            "Tanya Notaris juga menjalankan fungsi penyebaran informasi dan edukasi terkait notaris dan hukum perdata melalui media digital maupun penyelenggaraan event. Kami sangat terbuka terhadap peluang kerjasama dalam penyelenggaraan edukasi terkait legal, seperti legal clinic, legal mentor, maupun legal workshop.",
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
