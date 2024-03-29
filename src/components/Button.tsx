import type React from "react";
import type { ReactElement } from "react";

type ButtonProps = {
  type: "submit" | "button";
  title: string;
  icon?: ReactElement;
  variant: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  type,
  title,
  icon,
  variant,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`w-auto flex items-center justify-center rounded-full px-4 py-2 gap-1 ${variant} cursor-pointer`}
    >
      {!!icon && icon}
      <label
        className="text-md tracking-tight whitespace-nowrap text-center cursor-pointer"
        htmlFor={title}
      >
        {title}
      </label>
    </button>
  );
}
