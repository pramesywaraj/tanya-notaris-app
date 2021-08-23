import { AdvantageSection, OverviewSection, ProfileSection } from "components/About";
import { BannerAbout } from "components/Banner"


export default function index() {
    const banner = "Mengapa Kami";

    return (
        <>
            <BannerAbout name={banner} />
            <OverviewSection />
            <AdvantageSection />
            <ProfileSection />
        </>
    )
}
