import Banner from "components/Banner"
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function index() {
    const banner = "Mengapa Kami";

    return (
        <>
            <Banner name={banner} />
            <Section1 />
            <Section2 />
            <Section3 />
        </>
    )
}
