import IconHappyClients from "assets/icon-home-happy-client.svg";
import IconCases from "assets/icon-home-cases.svg";
import IconWinningCases from "assets/icon-home-winning-cases.svg";
import IconAwards from "assets/icon-home-awards.svg";

export const MAIN_SERVICE_TYPE_ORANGE = "SERVICE-MAIN/ORANGE";
export const MAIN_SERVICE_TYPE_PURPLE = "SERVICE-MAIN/PURPLE";

export const MAIN_SERVICES = [
    {
        title: "Konsultasi Hukum",
        caption: "Yuk konsultasi di tanya notaris, cepat, mudah, dan terjangkau!",
        button_text: "Konsultasi Sekarang",
        type: MAIN_SERVICE_TYPE_ORANGE,
        redirect_path: "/service?typeName=Kontrak",
        directTo: "EXTERNAL",
    },
    {
        title: "Kontrak dan Perjanjian",
        caption:
            "Mau buat kontrak dan perjanjian professional dengan baik dan benar? Buat disini aja! Hemat biaya dan ga pake ribet!",
        button_text: "Buat Sekarang",
        type: MAIN_SERVICE_TYPE_PURPLE,
        redirect_path: "/service?typeName=Kontrak",
        directTo: "INTERNAL",
    },
    {
        title: "Pembuatan Akta",
        caption:
            "Buat akta perusahaan, yayasan, atau perkumpulan? Yuk kami pandu langkah untuk pembuatannya, ga pake lama!",
        button_text: "Buat Sekarang",
        type: MAIN_SERVICE_TYPE_ORANGE,
        redirect_path: "/service?typeName=Akta dan Layanan Notaris (Perseroan Terbatas)",
        directTo: "INTERNAL",
    },
    {
        title: "Legalisasi Dokumen",
        caption:
            "Legalisasi dokumen penting kamu tanpa harus menyita banyak waktu! Yuk Buat sekarang",
        button_text: "Buat Sekarang",
        type: MAIN_SERVICE_TYPE_PURPLE,
        redirect_path: "/service?typeName=Dokumen",
        directTo: "INTERNAL",
    },
];

export const MAIN_ACHIEVEMENT_SECTION = [
    {
        caption: "Klien Senang",
        numbers: "177+",
        icon: IconHappyClients,
    },
    {
        caption: "Kasus",
        numbers: "217+",
        icon: IconCases,
    },
    {
        caption: "Kasus Menang",
        numbers: "177+",
        icon: IconWinningCases,
    },
    {
        caption: "Penghargaan",
        numbers: "17700+",
        icon: IconAwards,
    },
];
