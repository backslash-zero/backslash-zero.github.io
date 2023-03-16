import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../components/layouts/MainLayout";
import Head from "next/head";
import AppHead from "../components/head/AppHead";

// pages/_app.js
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import localFont from "next/font/local";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--ibmPlexMono-font",
});

const Avara = localFont({
  src: [
    {
      path: "./fonts/Avara/Avara.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Avara/Avara-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});

const suisseIntl = localFont({
  src: [
    // Suisse Intl with all weights and styles
    {
      path: "./fonts/Suisse/SuisseIntl-UltraLight-WebS.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-UltraLightItalic-WebS.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Light-WebS.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-LightItalic-WebS.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Book-WebS.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-BookItalic-WebS.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Regular-WebS.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-RegularItalic-WebS.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Medium-WebS.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-MediumItalic-WebS.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-SemiBold-WebS.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-SemiBoldItalic-WebS.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Bold-WebS.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-BoldItalic-WebS.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-Black-WebS.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Suisse/SuisseIntl-BlackItalic-WebS.woff2",
      weight: "900",
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
            --ibmPlexMono-font: ${ibmPlexMono.style.fontFamily};
            --suisseIntl-font: ${suisseIntl.style.fontFamily};
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
