import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="msapplication-TileColor" content="#000000" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="shortcut icon" href="/tn-favicon.ico" />
                </Head>
                <body className="antialiased text-black bg-white dark:bg-gray-900 dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
