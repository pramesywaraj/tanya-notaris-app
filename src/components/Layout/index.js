import Navbar from "components/Navbar";

export default function Layout({ children }) {
    return (
        <main>
            <Navbar />
            <div className="main-container">{children}</div>
        </main>
    );
}
