// pages/_app.js
import "@/styles/globals.css";
import { GlobalProvider } from "@/utils/GlobalProvider";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
