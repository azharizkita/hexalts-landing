import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";

export default function Home() {
  const [article, setArticle] = useState("");
  useEffect(() => {
    fetch(`http://hexalts.com/rdb.md`).then((value) => {
      value.text().then((result) => setArticle(result));
    });
  }, []);
  return (
    <div className={"relative bg-black"}>
      <div className={"z-10 sticky top-0"}>
        <Navbar page={"rdb"} />
      </div>
      <div className="duration-300 flex flex-col bg-white sm:bg-gray-100 container-content w-full">
        <NextSeo
          title={`Hexalts - Realtime Database (server side)`}
          canonical={`https://hexalts.com/rdbc`}
          openGraph={{
            url: `https://hexalts.com/rdbc`,
            title: `Hexalts - Realtime Database (server side)`,
            description: `Simplifies your server design system with Hexalts RDB implementation.`,
          }}
          description={
            "Simplifies your server design system with Hexalts RDB implementation."
          }
        />
        <Head>
          <title>Hexalts - Realtime Database (server side)</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <main className="flex flex-col items-center justify-center w-full gap-5 text-center bg-black pb-10">
          <div
            className={
              "flex flex-col min-h-screen items-center justify-center px-5"
            }
          >
            <p className={"font-black text-gray-100 md:text-8xl text-5xl"}>
              Realtime Database
            </p>
            <p className={"font-black text-gray-100 md:text-8xl text-5xl"}>
              Server Side
            </p>
            <p className={"text-xl text-gray-100 pt-14"}>
              Simplifies your server design system with Hexalts RDB
              implementation.
            </p>
          </div>
          <div
            className={
              "px-5 flex flex-col gap-8 items-center justify-center w-full"
            }
          >
            <ReactMarkdown
              className={"blog gap-6 grid px-10 text-gray-100 w-full"}
              skipHtml={false}
            >
              {article}
            </ReactMarkdown>
          </div>
        </main>
      </div>
    </div>
  );
}
