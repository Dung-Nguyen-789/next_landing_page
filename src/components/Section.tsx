import React, { type ReactNode, type ReactElement } from "react";
import Button from "./Button";
import SectionCard from "./SectionCard";

export type SectionContainerProps = {
  buttonTitle: string;
  buttonIcon: ReactElement;
  sectionTitle: string;
  sectionDes: string;
  color: `#${string}`;
  bgColor: `bg-[#${string}]/${string}`;
  textColor: `text-[#${string}]`;
  borderColor: `border-[#${string}]/${string}`;
  children?: ReactNode;
};

export default function SectionContainer(props: SectionContainerProps) {
  return (
    <section className="section-container flex flex-col py-12 px-8 gap-12 lg:gap-20 bg-white">
      <div className="text-container gap-6 flex lg:w-1/2 flex-col items-start justify-start">
        <Button
          title={props.buttonTitle}
          icon={props.buttonIcon}
          type="button"
          variant={`border ${props.borderColor} ${props.bgColor} text-sm ${props.textColor} px-3`}
        />
        <h2 className="text-black font-bold text-7xl tracking-tight leading-[1.1]">
          {props.sectionTitle}
        </h2>
        <p className="text-black font-light text-2xl tracking-tight">
          {props.sectionDes}
        </p>
        <Button
          title="Learn more"
          type="button"
          variant="border mt-2 px-4 py-2 rounded-xl"
        />
      </div>
      <div className="card-grid relative grid grid-cols-1 gap-3 xl:grid-cols-3 xl:gap-5">
        {props.children}
      </div>
    </section>
  );
}
