import Banner from "components/Banner"
import Section1 from "./Section1";

export default function index() {
    const banner = "Mengapa Kami";

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
        image_link : "/section2.png",
    }
    return (
        <div className="">
                <Banner name={banner} />
                <Section1 />
        </div>
    )
}
