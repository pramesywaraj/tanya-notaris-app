import IconArrow from "assets/icon-arrow-right.svg";
import { IconButton } from "components/Button";

import style from "components/Carousel/carousel.module.css";

export default function SwipeArrow({ onClick }) {
    return (
        <IconButton
            src={IconArrow}
            onClick={onClick}
            alt="swipe arrow"
            styles={{
                padding: 8,
                display: "inline-block",
                verticalAlign: "middle",
                backgroundColor: "#FFF",
            }}
        />
    );
}
