import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Ecosystem from "./ecosystem.svg";

export default function Home() {
  return (
    <div className={"relative bg-black"}>
      <div className={"z-10 sticky top-0"}>
        <Navbar page={"root"} />
      </div>
      <div className="duration-300 flex flex-col bg-white sm:bg-gray-100 container-content">
        <Head>
          <title>Hexalts - Accelerating your development.</title>
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
              Accelerating Your Development
            </p>
            <p className={"text-xl text-gray-100 pt-14"}>
              Hexalts is a non-profit community focusing on backend and frontend
              data delivery technology.
            </p>
          </div>
          <div
            className={
              "min-h-screen flex flex-col gap-10 items-center justify-center px-5 text-gray-200"
            }
          >
            <div>
              <p className={"text-2xl"}>
                How does Hexalts ecosystem accelerate your developments?
              </p>
            </div>
            <div
              className={
                "grid grid-cols-4 items-center justify-center gap-5 w-full"
              }
            >
              <div className={"flex flex-col gap-2 col-span-full"}>
                <Ecosystem className={"m-auto flex-grow w-full"} />
              </div>
            </div>
            <div>
              <p className={"max-w-3xl"}>
                Hexalts ecosystem provides a server side (RDB) and a client side
                (RDB-C) program that simplify MongoDB queries and connection
                setup into the database itself.
              </p>
            </div>
          </div>

          <div
            className={"px-5 flex flex-col gap-8 items-center justify-center"}
          >
            <div>
              <p className={"text-2xl text-gray-200"}>Why Hexalts?</p>
            </div>
            <div
              className={
                "grid grid-cols-2 items-center justify-center gap-5 max-w-5xl rounded-3xl bg-gray-300 p-5"
              }
            >
              <figure className="md:flex bg-gray-900 text-gray-100 rounded-xl p-8 md:p-0 overflow-hidden shadow-lg col-span-full md:col-span-1">
                <div className="w-32 h-32 md:w-48 md:h-auto relative mx-auto">
                  <Image
                    src={"https://avatars.githubusercontent.com/u/28642152"}
                    alt="Ahari RIzkita"
                    layout="fill"
                    objectFit="cover"
                    className="md:rounded-none rounded-full"
                  />
                </div>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                    <p className="text-lg font-semibold">
                      “Do you hate the volume-based APIs? Same.”
                    </p>
                  </blockquote>
                  <figcaption className="font-medium">
                    <div className="text-yellow-600">Azhari Rizkita</div>
                    <div className="text-gray-400">Founder of Hexalts</div>
                  </figcaption>
                </div>
              </figure>
              <div className={"col-span-full md:col-span-1"}>
                <p className={"px-5 font-medium"}>
                  The main idea of Hexalts is to provide user-friendly APIs and
                  unified response which helps anyone to do rapid development
                  with no fees both for personal and commercial use.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
