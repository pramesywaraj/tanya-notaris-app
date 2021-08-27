import { useState , useEffect } from "react";

import { BannerService } from "components/Banner"
import { CardDetailServices, CardFooterBenefit, CardPlan, CardSocialMedia } from "components/Card";
import useRequest from "hooks/useRequest";
import { useRouter } from "next/router";

import styles from "styles/service.module.css";


export default function Detail() {
    const banner = "Pendirian PT";

    const router = useRouter()

    const [serviceId, setServiceId] = useState("")
    const [isPopular, setPopular] = useState(false);

    const {
        data: detailData,
        error: detailError,
        isLoadingData: isLoadingFetchingDetail,
    } = useRequest(`v1/products/${serviceId}`);

    useEffect(() => {
        if (!router.query.id) {
            return false;
        }
        setServiceId(router.query.id)
       
    }, [router.query.id])


    const renderContents = () => (
        <>
            <div className={styles["information-content"]}>
                {detailData?.description && detailData?.description !== "-" &&
                    <DescriptionCard
                        data={detailData.description}
                    />
                }

                    <CardDetailServices 
                        titleCard = "Detail Layanan"
                        data = '<p>Kontrak Hukum dapat membantu Anda untuk mendirikan badan usaha secara mudah dan cepat berikut perizinan umum yang diperlukan, yaitu Nomor Induk Berusaha (NIB), Izin Lokasi dan Izin Usaha.</p>'
                    />

                    <CardDetailServices 
                        titleCard = "Disclaimer"
                        data = '<p>Pada beberapa bidang usaha, Izin OSS akan tertera belum efektif/belum memenuhi komitmen. Kami hanya melakukan pengurusan sampai tingkat pendaftaran dan penerbitan di Lembaga OSS saja. Tidak termasuk pengefektifan/pemenuhan komitmen perizinan.<br/><br/>Layanan ini akan mencakup penerbitan Akta, SK Kemenkumham (*2 hari dari dokumen lengkap akan di keluarkan akta dan SK digital), NIB, Izin Lokasi dan Izin Usaha melalui proses Online Single Submission (OSS).<br/><br/>*SLA sesuai tertera dengan kondisi semua dokumen kami terima lengkap, tidak ada kendala teknis, dan prosedur tepat waktu dilaksanakan oleh klien.</p>'
                        containerStyle = {{padding: "1rem", background: "rgb(235, 235, 235)"}}
                        titleStyle = {{ fontSize: "14px" }}
                    />

                    <CardDetailServices 
                        titleCard = "Persyaratan"
                        data = '<p>Kontrak Hukum dapat membantu Anda untuk mendirikan badan usaha secara mudah dan cepat berikut perizinan umum yang diperlukan, yaitu Nomor Induk Berusaha (NIB), Izin Lokasi dan Izin Usaha.</p>'
                    />

                    <CardDetailServices 
                        titleCard = "Tahapan Pengerjaan"
                        data = '<p>Kontrak Hukum dapat membantu Anda untuk mendirikan badan usaha secara mudah dan cepat berikut perizinan umum yang diperlukan, yaitu Nomor Induk Berusaha (NIB), Izin Lokasi dan Izin Usaha.</p>'
                    />
            </div>
        </>
    );

    const renderPlans = () => (
        <>
            {detailData?.plans &&
                detailData.plans.map((plan, index) => (
                    <CardPlan 
                        data={plan}
                        containerStyle={{ backgroundColor: plan.type == "ENTERPRISE_PLAN" ? "#333333" : "C7C7C7" }}
                        title={{title: plan.type == "ENTERPRISE_PLAN" ? "Enterprise Plan" : "Starter Plan"}}
                    />
                ))
                
            }
        </>
    );


    return (
        <>
            <BannerService name={banner} />

            {/* Payment Plan */}
            <div className={styles["payment-plan-container"]}>
                {renderPlans()}
            </div>
            {renderContents()} 

            <CardSocialMedia title = "Bagikan Layanan" linkUrl={router.asPath}/>

            <CardFooterBenefit />
        </>
    )
}
