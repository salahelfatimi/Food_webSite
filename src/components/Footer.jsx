import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });
export default function Footer() {
  return (
    <>
      <footer className={`bg-[#ffffff] mt-auto `}>
        <div className=" container flex flex-col items-center  gap-4">
          <div className="text-black  text-2xl font-semibold">Follow Us On Instagram</div>
          <div className="text-[#eaa480ff] text-sm">@salah.fatimi</div>
          <div className="border-y-2 text-black  grid grid-cols-2 sm:grid-cols-3 lg:flex gap-12 py-8">
            <Link href="#">
              <div className="flex items-center duration-500 transition-colors hover:text-[#eaa480]">
                <svg
                  className=" "
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="ml-1 text-xs uppercase">Facebook</span>
              </div>
            </Link>
            <Link href="#">
              <div className="flex items-center duration-500 transition-colors hover:text-[#eaa480]">
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>

                <span className="ml-1 text-xs uppercase">Twitter</span>
              </div>
            </Link>
            <Link href="#">
              <div className="flex items-center duration-500 transition-colors hover:text-[#eaa480]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>

                <span className="ml-1 text-xs uppercase">github</span>
              </div>
            </Link>
            <Link href="#">
              <div className="flex items-center duration-500 transition-colors hover:text-[#eaa480]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>

                <span className="ml-1 text-xs  uppercase">instagram</span>
              </div>
            </Link>
            <Link href="#">
              <div className="flex items-center duration-500 transition-colors hover:text-[#eaa480]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>{" "}
                <span className="ml-1 text-xs  uppercase">linkedin</span>
              </div>
            </Link>
            <Link href="#">
              <div className="flex items-center duration-500 transition-colors hover:text-[#eaa480]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>

                <span className="ml-1 text-xs  uppercase">youtube</span>
              </div>
            </Link>
          </div>
          <div>
            <p className=" text-black text-center text-xs font-mono pb-3">
              Copyright &copy;{new Date().getFullYear()} All rights reserved |
              This template is made with by
              <a className="pl-1" href="#" target="_blank">
                salah.fatimi
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
