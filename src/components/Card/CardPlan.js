import { Button } from "components/Button";
import styles from "components/Card/card.module.css";

export default function CardPlan({ title, data, containerStyle }) {
    const { is_popular, estimation_time, price } = data;
    const noWhatsApp = "https://wa.me/62888888888"

    const PopulerButton = () => (
        <Button
            styles={{
            fontSize: "14px",
            fontWeight: 400,
            padding: "8px 16px",
        }}>
            Popular
        </Button>
    );

    return (
        <div className={styles["card-plan-container"]} style={{ ...containerStyle }}>

            {/* Card Plan Header */}
            <div className={styles["card-plan-header"]}>
                <h4 className="font-semibold">{title}</h4>
                {is_popular &&
                    <PopulerButton />
                }
            </div>

            {/* Card Plan Content */}
            <div className={styles["card-plan-body"]}>
                <small className="mb-2">Mulai Dari</small>
                <h4 className="mb-8 font-bold text-header4">Rp. {price}</h4>
                <small className="mb-3">Estimasi Waktu</small>
                <div className="font-semibold mb-10">{estimation_time}* setelah persyaratan lengkap</div>
            </div>

            <Button 
                styles={{
                    width: "100%",
                    padding: "12px 32px",
                }}
                >
                   <a 
                    href={noWhatsApp}
                    target="_blank">
                        Pesan Sekarang
                    </a>
                </Button>

        </div>
    );
}
