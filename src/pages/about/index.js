import Head from "next/head";

import { AdvantageSection, OverviewSection, ProfileSection } from "components/About";
import { BannerAbout } from "components/Banner";

export default function index() {
    const banner = "Mengapa Kami";

    return (
        <>
            <Head>
                <title>Tanya Notaris - Tentang Kami</title>
                <meta property="og:title" content="Tanya Notaris - Tentang Kami" key="title" />
            </Head>
            <BannerAbout name={banner} />
            <OverviewSection />
            <AdvantageSection />
            <ProfileSection />
        </>
    );
}
