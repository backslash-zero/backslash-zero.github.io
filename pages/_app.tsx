import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../components/layouts/MainLayout";
import Head from "next/head";
import AppHead from "../components/head/AppHead";

// pages/_app.js
import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Space_Grotesk,
  Space_Mono,
} from "next/font/google";
import localFont from "next/font/local";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--ibmPlexMono-font",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--ibmPlexSans-font",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--spaceMono-font",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  variable: "--spaceGrotesk-font",
});

const Avara = localFont({
  src: [
    {
      path: "fonts/Avara/Avara.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Avara/Avara-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});

const suisseIntl = localFont({
  src: [
    {
      path: "fonts/Suisse/Suisse-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "fonts/Suisse/Suisse-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "fonts/Suisse/Suisse-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Suisse/Suisse-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <AppHead />
      <style jsx global>
        {`
          :root {
            --suisseIntl-font: ${suisseIntl.style.fontFamily};
            --ibmPlexMono-font: ${ibmPlexMono.style.fontFamily};
            --ibmPlexSans-font: ${ibmPlexSans.style.fontFamily};
            --spaceMono-font: ${spaceMono.style.fontFamily};
            --spaceGrotesk-font: ${spaceGrotesk.style.fontFamily};
            --avara-font: ${Avara.style.fontFamily};
          }
        `}
      </style>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}

export default MyApp;
