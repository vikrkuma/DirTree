import { useEffect } from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.getElementById("__next")!.className = "root-container";
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
