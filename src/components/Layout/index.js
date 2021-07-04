import { Navbar } from "components/Navbar";

export default function Layout({ children }) {
    return (
        <main className="layout-padding">
            <Navbar />
            <div className="main-container">{children}</div>
        </main>
    );
}
