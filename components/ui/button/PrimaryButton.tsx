import { FC, JSX } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { ButtonProps } from "@/types/button.types";

const PrimaryButton: FC<ButtonProps> = ({ label, arrow = false, classNames = "" }): JSX.Element => {
  return (
    <button type="button" className={`group cursor-pointer px-6 py-2 font-medium flex items-center gap-2 ${classNames}`}>
      <span>{label}</span>
      {arrow && (
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
          <FaArrowRightLong />
        </span>
      )}
    </button>
  );
};

export default PrimaryButton;