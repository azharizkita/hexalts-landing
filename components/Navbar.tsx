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
    <nav className="bg-black relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button onClick={() => setOpen((state) => !state)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Menu</span>
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div> */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link href={"/"} passHref={true}>
                <div className={"h-auto w-32"}>
                  <Logo />
                </div>
              </Link>
            </div>
            {/* <div className={`sm:ml-6 sm:block hidden`}>
                        <div className="flex space-x-4">
                            <Link href={'/jobs'}>
                                <a className={page === 'jobs' ? activePage : inactivePage}>Job History</a>
                            </Link>
                            <Link href={'/blogs'}>
                                <a className={page === 'blogs' ? activePage : inactivePage}>Blogs</a>
                            </Link>
                        </div>
                    </div> */}
          </div>
        </div>
      </div>
      {/* <div className={`absolute bg-gray-800 w-full ${open ? 'block' : 'hidden'} transition transform duration-300 ease-in-out`} id="mobile-menu">
            <div className="grid px-2 pt-2 pb-3 space-y-1">
                <Link href={'/jobs'}>
                    <a className={page === 'jobs' ? activePage : inactivePage}>Job History</a>
                </Link>
                <Link href={'/blogs'}>
                    <a className={page === 'blogs' ? activePage : inactivePage}>Blogs</a>
                </Link>
            </div>
        </div> */}
    </nav>
  );
}
