import Head from "next/head";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Teste Frontend</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
