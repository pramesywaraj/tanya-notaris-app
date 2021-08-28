import { useState, useEffect } from "react";
import useRequest from "hooks/useRequest";
import { useRouter } from "next/router";

import styles from "styles/service.module.css";

import { BannerService } from "components/Banner";
import { CardDetailServices, CardFooterBenefit, CardPlan, CardSocialMedia } from "components/Card";
import { SkeletonLoader } from "components/Loader";

export default function Detail() {
    const banner = "Pendirian PT";
    const router = useRouter();

    const [serviceId, setServiceId] = useState("");
    const [isPopular, setPopular] = useState(false);

    useEffect(() => {
        if (router.asPath !== router.route) {
            const { id } = router.query;
            setServiceId(id);
        }
    }, [router]);

    const {
        data: detailData,
        error: detailError,
        isLoadingData: isLoadingFetchingDetail,
    } = useRequest(`v1/products/${serviceId || router.query.id}`);

    const renderContents = () => (
        <div className={styles["information-content"]}>
            <CardDetailServices
                titleCard="Deskripsi Layanan"
                data={detailData?.data?.description || ""}
                isLoading={isLoadingFetchingDetail}
            />

            <CardDetailServices
                titleCard="Disclaimer"
                data={detailData?.data?.disclaimer || ""}
                containerStyle={{ padding: "1rem", background: "rgba(243, 122, 81, 0.05)" }}
                titleStyle={{ fontSize: "14px" }}
                isLoading={isLoadingFetchingDetail}
            />

            <CardDetailServices
                titleCard="Persyaratan"
                data={detailData?.data?.requirement || ""}
                isLoading={isLoadingFetchingDetail}
            />

            <CardDetailServices
                titleCard="Tahapan Pengerjaan"
                data={detailData?.data?.work_stage || ""}
                isLoading={isLoadingFetchingDetail}
            />
        </div>
    );

    const renderPlans = () =>
        (detailData?.data?.plans || []).map((plan, index) => (
            <CardPlan key={`plan-${index + 1}`} data={plan} isLoading={isLoadingFetchingDetail} />
        ));

    return (
        <section>
            <BannerService name={banner} />

            {/* Payment Plan */}
            <div className={styles["payment-plan-container"]}>
                {!isLoadingFetchingDetail ? (
                    renderPlans()
                ) : (
                        <div style={{ height: 360, width: 350 }}>
                            <SkeletonLoader height={"100%"} />
                        </div>
                    )}
            </div>
            {renderContents()}

            <CardSocialMedia title="Bagikan Layanan" linkUrl={router.asPath} />

            <CardFooterBenefit />
        </section>
    );
}
