import { Button } from "components/Button";
import styles from "components/Card/card.module.css";

import { parseCurrency } from "Utils";

export default function CardPlan({ data }) {
    const { is_popular, estimation_time, price, type } = data;
    const noWhatsApp = "https://wa.me/62888888888";

    const PopulerButton = () => (
        <Button
            styles={{
                fontSize: "14px",
                fontWeight: 400,
                padding: "8px 16px",
            }}
        >
            Popular
        </Button>
    );

    return (
        <div
            className={styles["card-plan-container"]}
            style={{
                backgroundColor: data.type == "ENTERPRISE_PLAN" ? "#333333" : "#FFF",
                border: `1px solid ${data.type == "ENTERPRISE_PLAN" ? "#333333" : "#C7C7C7"}`,
            }}
        >
            {/* Card Plan Header */}
            <div className={styles["card-plan-header"]}>
                <h4
                    className="font-semibold"
                    style={{ color: data.type == "ENTERPRISE_PLAN" ? "#FFF" : "#333333" }}
                >
                    {type === "ENTERPRISE_PLAN" ? "Enterprise Plan" : "Starter Plan"}
                </h4>
                {is_popular && <PopulerButton />}
            </div>

            {/* Card Plan Content */}
            <div className={styles["card-plan-body"]}>
                <small
                    className="mb-2"
                    style={{ color: data.type == "ENTERPRISE_PLAN" ? "#FFF" : "#333333" }}
                >
                    Mulai Dari
                </small>
                <h4
                    className="mb-8 font-bold text-header4"
                    style={{ color: data.type == "ENTERPRISE_PLAN" ? "#FFF" : "#333333" }}
                >
                    {parseCurrency(Number(price))}
                </h4>
                <small
                    className="mb-3"
                    style={{ color: data.type == "ENTERPRISE_PLAN" ? "#FFF" : "#333333" }}
                >
                    Estimasi Waktu
                </small>
                <div
                    className="font-semibold mb-10"
                    style={{ color: data.type == "ENTERPRISE_PLAN" ? "#FFF" : "#333333" }}
                >
                    {estimation_time}* setelah persyaratan lengkap
                </div>
            </div>

            <Button
                styles={{
                    width: "100%",
                    padding: "12px 32px",
                }}
            >
                <a href={noWhatsApp} target="_blank" rel="noreferrer">
                    Pesan Sekarang
                </a>
            </Button>
        </div>
    );
}
