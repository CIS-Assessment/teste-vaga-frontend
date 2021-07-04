import Head from "next/head";
import { StylesProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { createReduxStore } from "../redux";

import "../styles/global.css";

const { store, persistor } = createReduxStore();

export default function App({ Component, pageProps }) {
  return (
    <StylesProvider injectFirst>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
        </PersistGate>
      </Provider>
    </StylesProvider>
  );
}
