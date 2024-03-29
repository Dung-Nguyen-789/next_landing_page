import Button from "@/components/Button";
import Link from "next/link";

import React from "react";

export default function NotFound() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center gap-2 bg-white py-32 rounded-[40px] h-[100vh] overflow-hidden">
      <video
        width="2883"
        height="1823"
        loop
        autoPlay
        muted
        playsInline
        poster="https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_1695,q_auto/404%20Error/Frames/Error_404_Frame"
        className="absolute left-1/2 z-0 hidden w-full max-w-[1502px] -translate-x-1/2 md:block"
        style={{ aspectRatio: 1.77, clipPath: "inset(2px 2px)" }}
      >
        <source
          src="https://res.cloudinary.com/dhgck7ebz/video/upload/f_auto:video,q_auto/v1/404 Error/Animations/Error_404"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/dhgck7ebz/video/upload/f_auto:video,q_auto/v1/404 Error/Animations/Error_404"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
      <h4 className="text-4xl font-bold tracking-tight text-center z-10">
        Oh no! It looks like you’re lost
      </h4>
      <p className="text-xl font-light text-center z-10">
        The page you were looking for doesn’t exist
      </p>
      <Link href={"/"} className="z-10">
        <Button
          type={"button"}
          title={"Go back to homepage"}
          variant={"border rounded-xl border-slate-300 mt-4"}
        />
      </Link>
    </section>
  );
}
