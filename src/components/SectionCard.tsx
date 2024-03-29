import Image from "next/image";
import React from "react";

type SectionCardProps = {
  className?: string;
  title?: string;
  mediaLink?: string;
  borderColor?: `border-[#${string}]/${string}`;
  bgColor?: `bg-[#${string}]/${string}`;
  posterLink: string;
  isPaddingBottom?: boolean;
  isBorderImage?: boolean;
  imageClassName?: string;
  reverse?: boolean;
};

export default function SectionCard(props: SectionCardProps) {
  return (
    <div
      className={`overflow-hidden relative flex items-center justify-center gap-6 rounded-[32px] border border-neutral-80/10 bg-white-40 xl:rounded-[20px] 2xl:rounded-[32px] ${
        props.reverse ? "flex-col-reverse" : "flex-col"
      } flex-grow px-6 ${!!props.bgColor && props.bgColor} ${
        !!props.className && props.className
      }`}
    >
      {!!props.title && (
        <h3 className="line w-full max-w-[320px] text-center text-2xl font-semibold sm:text-19 2xl:max-w-[410px]">
          {props.title}
        </h3>
      )}
      {props.mediaLink ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          height={724}
          width={1624}
          poster={props.posterLink}
          className={`border-4 ${
            !!props.borderColor && props.borderColor
          } rounded-3xl`}
        >
          <source src={props.mediaLink} type="video/mp4" />
          <source src={props.mediaLink} type="video/webm" />
        </video>
      ) : (
        <Image
          src={props.posterLink}
          alt="card image"
          height={1400}
          width={1383}
          className={`${!!props.borderColor && props.borderColor} ${
            !!props.imageClassName && props.imageClassName
          }`}
        />
      )}
    </div>
  );
}
