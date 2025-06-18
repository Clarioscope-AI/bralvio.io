import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {
  label: string;
  arrow?: boolean;
  classNames?: string;
};

const PrimaryButton = ({ label, arrow = false, classNames = "" }: Props) => {
  return (
    <button
      type="button"
      className={`group cursor-pointer bg-secondary text-primary px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition duration-300 border-2 border-black hover:bg-[--color-tertiary] ${classNames}`}
    >
      <span>{label}</span>
      {arrow && (
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1">
          <FaArrowRightLong />
        </span>
      )}
    </button>
  );
};

export default PrimaryButton;
