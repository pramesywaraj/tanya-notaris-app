import { AdvantageSection, OverviewSection, ProfileSection } from "components/About";
import Banner from "components/Banner"


export default function index() {
    const banner = "Mengapa Kami";

    return (
        <>
            <Banner name={banner} />
            <OverviewSection />
            <AdvantageSection />
            <ProfileSection />
        </>
    )
}
