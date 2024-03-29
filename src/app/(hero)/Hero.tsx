import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="w-full flex justify-center items-center relative pt-28 pb-96 bg-white rounded-t-[40px]">
      <video
        width="2883"
        height="1823"
        loop
        autoPlay
        muted
        playsInline
        poster="https://res.cloudinary.com/dhgck7ebz/image/upload/f_auto,c_limit,w_2883,q_auto/Homepage/Animations/Frames/Homepage_Hero_Desktop_Frame"
        className="absolute left-[55%] w-full min-w-[1402px] max-w-[1502px] -translate-x-1/2 translate-y-8 xl:block 2xl:left-[55%] top-5"
      >
        <source
          src="https://res.cloudinary.com/dhgck7ebz/video/upload/f_auto:video,q_auto/v1/Homepage/Animations/Homepage_Hero_Desktop"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/dhgck7ebz/video/upload/f_auto:video,q_auto/v1/Homepage/Animations/Homepage_Hero_Desktop"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

      <div className="text-container w-full px-4 z-10 flex flex-col items-center justify-center gap-8">
        <Button
          title="Token-Gated Community Management in Status 2.0"
          type={"button"}
          variant={"px-1 py-1 pr-4 rounded-full border"}
          icon={
            <span className="rounded-full bg-black px-2 py-1 font-semibold text-sm text-white">
              NEW
            </span>
          }
        />
        <h1 className="text-black text-8xl w-full text-center font-bold tracking-tighter">
          Make the <br />
          jump to web3
        </h1>
        <h2 className="text-black font-light text-3xl text-center tracking-tight">
          Use the open source, decentralized crypto <br /> communication super
          app.
        </h2>
        <div className="p-2 border-dashed rounded-[20px] border border-slate-300">
          <Button
            title="Sign up for early access"
            type="button"
            icon={
              <svg
                color="rgba(255 255 255 / 100%)"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                focusable="false"
                aria-hidden="true"
              >
                <g clip-path="url(#confetti-icon_svg__a)">
                  <path
                    stroke="rgba(255 255 255 / 100%)"
                    stroke-width="1.2"
                    d="M7.646 5.782c-.353.354-4.242 11.314-4.242 11.314s10.96-3.889 11.313-4.242c.354-.354.354-2.475-2.12-4.95C10.12 5.429 8 5.429 7.646 5.782Z"
                  />
                  <path
                    stroke="rgba(255 255 255 / 100%)"
                    stroke-width="1.2"
                    d="M7.646 5.782s-.353 2.475 2.122 4.95c2.475 2.475 4.95 2.122 4.95 2.122"
                  />
                  <path
                    fill="rgba(255 255 255 / 100%)"
                    fill-rule="evenodd"
                    d="M10.546 14.197 6.303 9.954l-.848.849 4.242 4.242.849-.848Zm-2.475 1.06L5.242 12.43l-.848.849 2.828 2.828.849-.848Z"
                    clip-rule="evenodd"
                  />
                  <circle
                    cx="14.362"
                    cy="10.312"
                    r="1"
                    fill="rgba(255 255 255 / 100%)"
                    opacity="0.8"
                  />
                  <circle
                    cx="8.787"
                    cy="3.165"
                    r="1.5"
                    fill="rgba(255 255 255 / 100%)"
                    opacity="0.4"
                  />
                  <circle
                    cx="16.545"
                    cy="4.165"
                    r="1"
                    fill="rgba(255 255 255 / 100%)"
                    opacity="0.6"
                  />
                  <circle
                    cx="11.751"
                    cy="7.031"
                    r="1.5"
                    fill="rgba(255 255 255 / 100%)"
                    opacity="0.8"
                  />
                  <circle
                    cx="12.47"
                    cy="3.446"
                    r="1"
                    fill="rgba(255 255 255 / 100%)"
                    opacity="0.4"
                  />
                  <circle
                    cx="16.715"
                    cy="7.897"
                    r="1.5"
                    fill="rgba(255 255 255 / 100%)"
                    opacity="0.6"
                  />
                </g>
                <defs>
                  <clipPath id="confetti-icon_svg__a">
                    <path fill="#fff" d="M0 0h20v20H0z" />
                  </clipPath>
                </defs>
              </svg>
            }
            variant={"bg-blue-600 text-white py-2 rounded-[16px]"}
          />
        </div>
        <p className="text-xs text-gray-30 text-center">
          Betas for Mac, Windows, Linux <br /> Alphas for iOS & Android
        </p>
      </div>
    </section>
  );
}
