import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Navbar } from "components/Navbar";
import Footer from "components/Footer";

export default function Layout({ children }) {
    const [isNoLayout, setIsNoLayout] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (router.pathname === "/login" || router.pathname === "/register") {
            setIsNoLayout(true);
            return;
        }

        if (isNoLayout) setIsNoLayout(false);
    }, [router.pathname]);

    return (
        <main>
            <Navbar isNoLayout={isNoLayout} />
            <div className="main-container layout-padding">{children}</div>
            {!isNoLayout && <Footer />}
        </main>
    );
}
