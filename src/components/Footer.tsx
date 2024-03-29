import { NAV_LINKS } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaYoutube, FaGithub } from "react-icons/fa";

const gridCols = NAV_LINKS.length + 1;

export default function Footer() {
  return (
    <footer className="footer w-full flex flex-col items-center justify-center bg-[#09101c]">
      <div
        className={`w-full hidden footer_link pt-20 md:grid md:grid-cols-${gridCols} items-start`}
      >
        <Link
          href={"/"}
          className="flex justify-start items-start gap-2 p-4 border-t border-r border-l-0 border-dashed border-b-0 border-transparent h-full"
          style={{
            borderImage:
              "linear-gradient(to top, transparent, rgb(51 65 85)) 1",
          }}
        >
          <Image
            src="https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_1080,q_auto/Brand/Logo%20Section/Mark/Mark_01"
            alt={"logo"}
            width={480}
            height={480}
            className="w-8 h-8"
          />
          <p className="flex font-bold text-xl text-white">WOW3</p>
        </Link>
        {NAV_LINKS.map((link, index) => (
          <div
            key={link.key}
            className={`flex flex-col items-start justify-start gap-3 p-4 border-t border-dashed border-b-0 border-transparent h-full ${
              index === NAV_LINKS.length - 1 ? "border-r-0" : "border-r"
            }`}
            style={{
              borderImage:
                "linear-gradient(to top, transparent, rgb(51 65 85)) 1",
            }}
          >
            <label className="text-sm text-slate-500" htmlFor={link.label}>
              {link.label}
            </label>
            <ul className="flex flex-col items-start gap-2">
              {link.subLinks.map((subLink) => (
                <li
                  key={subLink.href}
                  className="text-white capitalize transition-all hover:text-slate-300"
                >
                  <Link href={`${subLink.href}`}>{subLink.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer_under w-full flex items-center justify-between px-6 py-12">
        <div className="footer_policies flex items-center justify-start gap-3">
          <span className="text-sm text-neutral-600 transition-colors hover:text-neutral-700">
            © WOW3 Research & Development GmbH
          </span>
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            width="2"
            height="2"
            viewBox="0 0 2 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden text-neutral-50 lg:block"
          >
            <circle cx="1" cy="1" r="1" fill="#647084" />
          </svg>
          <Link
            href={"/term-of-use"}
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-600"
          >
            Term of Use
          </Link>
          <Link
            href={"privacy-policy"}
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-600"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="footer_social flex items-center justify-start gap-4">
          <span className="text-sm text-neutral-600 transition-colors hover:text-neutral-700">
            Visit us on
          </span>
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            width="2"
            height="2"
            viewBox="0 0 2 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden text-neutral-50 lg:block"
          >
            <circle cx="1" cy="1" r="1" fill="#647084" />
          </svg>
          <div className="flex gap-6 lg:gap-3">
            <Link
              className="transition-opacity hover:opacity-60"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/ethstatus"
            >
              <FaGithub className="text-slate-300" size={24} />
            </Link>
            <Link
              className="transition-opacity hover:opacity-60"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/ethstatus"
            >
              <FaDiscord className="text-slate-300" size={24} />
            </Link>
            <Link
              className="transition-opacity hover:opacity-60"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/ethstatus"
            >
              <FaYoutube className="text-slate-300" size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
