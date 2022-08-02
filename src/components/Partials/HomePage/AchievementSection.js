/* eslint-disable react/jsx-key */
import Image from "next/image";

import { MAIN_ACHIEVEMENT_SECTION } from "constants/home";

import styles from "styles/home.module.css";

const AchievementSection = () => {
    return (
        <section className={`padding-off ${styles["home-achievements-section"]}`}>
            {MAIN_ACHIEVEMENT_SECTION.map((content, _) => (
                <div className={styles["home-achievements-items"]}>
                    <div className={styles["home-achievements-items-image-container"]}>
                        <Image
                            className={styles["home-achievements-items-image"]}
                            src={content.icon}
                            alt={content.caption}
                            layout="fill"
                        />
                    </div>
                    <div className={styles["home-achievements-items-description"]}>
                        <p id={styles["numbers"]}>{content.numbers}</p>
                        <p id={styles["caption"]}>{content.caption}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default AchievementSection;
