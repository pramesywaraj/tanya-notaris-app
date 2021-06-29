import Navbar from "components/Navbar";

export default function Layout({ children }) {
    return (
        <main>
            <Navbar />
            <body className="flex flex-col justify-center px-40 phone:px-4 tablet:px-5 lgTablet:px-6 desktop:px-20 h-screen">{children}</body>
        </main>
    );
}
