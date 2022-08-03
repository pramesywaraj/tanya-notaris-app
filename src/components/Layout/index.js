import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "contexts/AuthContext";

import { Navbar } from "components/Navbar";
import Footer from "components/Footer";
import { ScreenLoader } from "components/Loader";
import DemoTag from "components/Tag/DemoTag";

import { getCookies } from "Utils";
import { USER_AVAILABLE } from "constants/reduxConst";

export default function Layout({ children }) {
    const { state, dispatch } = useAuthContext();
    const [isNoLayout, setIsNoLayout] = useState(false);
    const [isShowDemo, setIsShowDemo] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const { access_token, user } = getCookies();
        const dispatchAvailableUser = async (user) =>
            await dispatch({ type: USER_AVAILABLE, payload: { userData: user } });

        if (access_token && user) {
            dispatchAvailableUser(JSON.parse(user));
        }

        if (process.env.SHOW_DEMO_ONLY === "true") setIsShowDemo(true);
    }, []);

    useEffect(() => {
        if (router.pathname === "/login" || router.pathname === "/register") {
            setIsNoLayout(true);
            return;
        }

        if (isNoLayout) setIsNoLayout(false);
    }, [router.pathname]);

    return (
        <main className="relative">
            {isShowDemo && <DemoTag />}
            <ScreenLoader isScreenLoaderShow={state.isScreenLoaderShow} />
            <Navbar isNoLayout={isNoLayout} />
            <div className="main-container layout-padding">{children}</div>
            {!isNoLayout && <Footer />}
        </main>
    );
}
