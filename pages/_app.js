import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Magnacare" />
				<meta name="keywords" content="Magnacare" />
				<title>Magnacare</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
