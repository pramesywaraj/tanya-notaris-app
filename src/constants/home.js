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
