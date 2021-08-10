import Link from "next/link";
import { useState } from "react";
import Logo from "./logo.svg";

export default function Navbar({ page }: { page: string }) {
  const [open, setOpen] = useState(false);
  const activePage =
    "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";
  const inactivePage =
    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
  return (
    <nav className="bg-black backdrop-filter backdrop-blur-lg bg-opacity-70 relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setOpen((state) => !state)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link href={"/"} passHref={true}>
                <div className={"h-auto w-32"}>
                  <Logo />
                </div>
              </Link>
            </div>
            <div className={`sm:ml-6 sm:block hidden`}>
              <div className="flex space-x-4">
                <Link href={"/rdb"}>
                  <a className={page === "rdb" ? activePage : inactivePage}>
                    rdb
                  </a>
                </Link>
                <Link href={"/rdbc"}>
                  <a className={page === "rdbc" ? activePage : inactivePage}>
                    rdb-c
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-gray-900 bg-gray-300 rounded-xl sm:block hidden">
            <div className="rounded p-5 flex items-center justify-center h-12 space-x-4 col-span-full">
              <a
                className="flex items-center justify-center gap-2"
                href="https://github.com/hexalts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-8"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                </svg>{" "}
                <span>Hexalts</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute z-50 w-full ${
          open ? "block" : "hidden"
        } transition transform duration-300 ease-in-out`}
        id="mobile-menu"
      >
        <div className="grid px-2 pt-2 pb-3 space-y-1 bg-gray-900">
          <div className="text-gray-900 bg-gray-300 rounded-xl grid">
            <div className="rounded p-5 flex items-center justify-center h-12 space-x-4 col-span-full">
              <a
                className="flex items-center justify-center gap-2"
                href="https://github.com/hexalts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-8"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                </svg>{" "}
                <span>Hexalts</span>
              </a>
            </div>
          </div>
          <Link href={"/rdb"}>
            <a className={page === "rdb" ? activePage : inactivePage}>rdb</a>
          </Link>
          <Link href={"/rdbc"}>
            <a className={page === "rdbc" ? activePage : inactivePage}>rdb-c</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
