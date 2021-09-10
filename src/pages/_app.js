/* eslint-disable prettier/prettier */
// import Router from "next/router";
import "tailwindcss/tailwind.css";
import "styles/globals.css";

import { AuthWrapper } from "contexts/AuthContext";
import Layout from "components/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<AuthWrapper>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AuthWrapper>
	);
}

// const apiBaseURL = process.env.API_BASE_URL;

// const redirectUser = (ctx, location) => {
// 	if (ctx.req) {
// 		ctx.res.writeHead(302, { Location: location });
// 		ctx.res.end();
// 	} else {
// 		Router.push(location);
// 	}
// };

// MyApp.getInitialProps = async ({ Component, ctx }) => {
// 	const { access_token, user } = getCookies(ctx);
// 	let pageProps = {};
// 	let hostName = ctx.req.headers.host;

// 	if (process.env.NODE_ENV === "development") hostName = `http://${hostName}`;

// 	const res = await fetch(`${hostName}/navigations`);
// 	const navigation = await res.json();

// 	if (Component.getInitialProps) {
// 		pageProps = await Component.getInitialProps(ctx);
// 	}

// 	return {
// 		pageProps,
// 		navigation,
// 		access_token,
// 		user
// 	};
// };

export default MyApp;
