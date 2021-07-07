import { Navbar } from "components/Navbar";
import Footer from "components/Footer";

export default function Layout({ children }) {
    return (
        <main>
            <Navbar />
            <div className="main-container layout-padding">{children}</div>
            <Footer />
        </main>
    );
}
