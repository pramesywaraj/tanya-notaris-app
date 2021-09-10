import style from "components/Card/card.module.css";

import { MAIN_SERVICE_TYPE_ORANGE } from "constants/home";

import { Button } from "components/Button";

export default function CardMainService({ data, onClick }) {
    const { title, caption, button_text, type, redirect_path } = data;
    return (
        <div
            className={`${style["card-home-main-service"]} ${type === MAIN_SERVICE_TYPE_ORANGE ? style["orange"] : style["purple"]
                }`}
            style={{ margin: "0 6px" }}
        >
            <div className={style["card-home-main-service-content"]}>
                <h2>{title}</h2>
                <p>{caption}</p>
            </div>
            <div className={style["card-home-main-service-button-container"]}>
                <Button
                    classNames={
                        type === MAIN_SERVICE_TYPE_ORANGE ? style["purple"] : style["orange"]
                    }
                    styles={{ width: "auto", maxWidth: 445, borderRadius: 8 }}
                    type="submit"
                    onClick={() => onClick(redirect_path)}
                >
                    {button_text}
                </Button>
            </div>
        </div>
    );
}
