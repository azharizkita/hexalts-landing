import "tailwindcss/tailwind.css";
import "../styles/main.css";
import NextNprogress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNprogress
        color="orange"
        options={{
          showSpinner: false,
        }}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <DefaultSeo
        canonical={"https://hexalts.com/"}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "azharizkita, azhari, rizkita, azhari rizkita, lcs, lcs indonesia, lcsindonesia, it solution, solution lcsindo, lcs indo, langgeng cipta, solusi, langgeng, langgeng cipta solusi, cipta, delman, delmanio, delman.io, fullstack, full-stack, full stack, blog, blogspot, jobs, job, job history, history, hexalts, hexalt, realtime database, firebase, firestore",
          },
        ]}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://hexalts.com/",
          title: "Hexalts - Accelerating your development.",
          images: [{ url: "https://hexalts.com/android-chrome-512x512.png" }],
          description:
            "Hexalts is a non-profit community focusing on backend and frontend data delivery technology.",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        title={"Hexalts - Accelerating your development."}
        description={
          "Hexalts is a non-profit community focusing on backend and frontend data delivery technology."
        }
      />
      <Component {...pageProps} />
    </>
  );
}
