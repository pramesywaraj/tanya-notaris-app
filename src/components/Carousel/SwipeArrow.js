import IconArrow from "assets/icon-arrow-right.svg";
import { IconButton } from "components/Button";

import style from "components/Carousel/carousel.module.css";

export default function SwipeArrow({ onClick, buttonStyle, type }) {
    const typeClass = type === "NEXT" ? style["arrow-next"] : style["arrow-prev"];

    return (
        <IconButton
            className={`${style["arrow-btn"]} ${typeClass}`}
            src={IconArrow}
            onClick={onClick}
            alt="swipe arrow"
            styles={{
                ...buttonStyle,
            }}
        />
    );
}
