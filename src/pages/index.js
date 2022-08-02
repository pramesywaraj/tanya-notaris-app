import { useRouter } from "next/router";

import styles from "styles/home.module.css";

import {
    AboutSection,
    AchievementSection,
    HomeInformationSection,
    HomeNewArticles,
    MainServiceSection,
    TestimoniesSection,
} from "components/Partials/HomePage";

export default function Home() {
    const router = useRouter();

    const handleMoveToScreen = (path) => {
        router.push(path);
    };

    return (
        <div className={`py-8 ${styles["home-page-top"]} ${styles["home-page-middle"]}`}>
            <HomeInformationSection handleMoveToScreen={handleMoveToScreen} />
            <MainServiceSection handleMoveToScreen={handleMoveToScreen} />
            <AboutSection />
            <AchievementSection />
            <TestimoniesSection />
            <HomeNewArticles handleMoveToScreen={handleMoveToScreen} />
        </div>
    );
}
