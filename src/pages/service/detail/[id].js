import { useState, useEffect, useRef } from "react";
import useRequest from "hooks/useRequest";
import usePost from "hooks/usePost";
import { useRouter } from "next/router";
import { useAuthContext } from "contexts/AuthContext";
import { getCookies } from "Utils";

import styles from "styles/service.module.css";
import { SCREEN_LOADER_SHOW, SCREEN_LOADER_HIDE } from "constants/reduxConst";

import { BannerService } from "components/Banner";
import { CardDetailServices, CardFooterBenefit, CardPlan, CardSocialMedia } from "components/Card";
import { SkeletonLoader } from "components/Loader";

const planText = {
    STARTER_PLAN: "Paket Pemula",
    ENTERPRISE_PLAN: "Paket Perusahaan",
};

export default function Detail() {
    const router = useRouter();
    const { state, dispatch } = useAuthContext();
    const [serviceId, setServiceId] = useState("");
    const firstLoad = useRef(true);

    const {
        data: detailData,
        error: detailError,
        isLoadingData: isLoadingFetchingDetail,
    } = useRequest(`v1/products/${serviceId || router.query.id}`);

    const {
        data: generalData,
        error: generalError,
        isLoadingData: isLoadingFetchingGeneral,
    } = useRequest(`v1/settings/general`);

    const { data: postData, errors: postErrors, isRequesting: isPosting, handlePost } = usePost();

    useEffect(() => {
        if (router.asPath !== router.route) {
            const { id } = router.query;
            setServiceId(id);
        }
    }, [router]);

    useEffect(() => {
        if (!firstLoad.current && postErrors) {
            dispatch({ type: SCREEN_LOADER_HIDE });
            alert(postErrors);
        }
    }, [postErrors]);

    const handleReserveService = async (item) => {
        if (!item) return false;

        try {
            const { type, price } = item;
            const { userData } = state;
            const { title } = detailData.data;
            const userToken = getCookies()["access_token"];

            await dispatch({ type: SCREEN_LOADER_SHOW });

            if (!userToken || !userData) throw new Error("UN_LOGGED_IN");

            const reqPayload = {
                name: title || "",
                type,
                price,
                user_name: userData?.name || "",
                user_email: userData?.email || "",
                user_phone_number: null,
            };

            const headers = {
                Authorization: userToken,
            };

            const csPhoneNumber = generalData?.data["general.phone"] || "+62";

            handlePost("v1/orders", reqPayload, { headers }, () => {
                const { type } = item;
                const message = `Halo Tanya Notaris, Saya ingin bertanya terkait ${title} ini untuk ${planText[type]}.`;
                const redirectUrl = `https://api.whatsapp.com/send/?phone=${csPhoneNumber}&text=${message}&app_absent=0`;

                router.push({ pathname: "/redirect/[redirectUrl]", query: { redirectUrl } });

                dispatch({ type: SCREEN_LOADER_HIDE });
            });
        } catch (e) {
            if (e.message === "UN_LOGGED_IN") {
                alert("Anda diharuskan login terlebih dahulu untuk memesan suatu layanan.");

                router.push({
                    pathname: "/redirect/[redirectUrl]",
                    query: { redirectUrl: "/login" },
                });
            }

            dispatch({ type: SCREEN_LOADER_HIDE });
        }
    };

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
                titleStyle={{ fontSize: "16px" }}
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

    const renderPlans = () => {
        if (
            !isLoadingFetchingDetail &&
            detailData?.data?.plans &&
            detailData?.data?.plans.length === 0
        )
            return null;

        const skeleton = (
            <div style={{ height: 360, width: 350 }}>
                <SkeletonLoader height={"100%"} />
            </div>
        );

        return (
            <div className={styles["payment-plan-container"]}>
                {!isLoadingFetchingDetail &&
                    (detailData?.data?.plans || []).map((plan, index) => (
                        <CardPlan
                            key={`plan-${index + 1}`}
                            data={plan}
                            onReserve={() => handleReserveService(plan)}
                        />
                    ))}

                {isLoadingFetchingDetail && skeleton}
            </div>
        );
    };

    return (
        <section>
            <BannerService
                name={detailData?.data?.title || ""}
                isLoading={isLoadingFetchingDetail}
            />
            {renderPlans()}
            {renderContents()}

            <CardSocialMedia title="Bagikan Layanan" linkUrl={router.asPath} />

            <CardFooterBenefit />
        </section>
    );
}
