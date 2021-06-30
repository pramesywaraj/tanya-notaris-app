import Navbar from "components/Navbar";

export default function Layout({ children }) {
    return (
        <main>
            <Navbar />
            <div className="flex flex-col justify-center h-screen">{children}</div>
        </main>
    );
}
