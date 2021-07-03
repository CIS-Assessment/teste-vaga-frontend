import Head from "next/head";
import "../styles/global.css";
import { StylesProvider } from "@material-ui/core/styles";
export default function App({ Component, pageProps }) {
  return (
    <StylesProvider injectFirst>
      <Head>
        <title>Teste Frontend</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </StylesProvider>
  );
}
