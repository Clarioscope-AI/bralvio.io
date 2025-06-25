import { FC, JSX } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { ButtonProps } from "@/types/button.types";

const Button: FC<ButtonProps> = ({ label, arrow = false, classNames = "" }): JSX.Element => {
  return (
    <button type="button" className={`group cursor-pointer py-2 font-medium flex justify-center items-center gap-2 ${classNames}`}>
      <span>{label}</span>
      {arrow && (
        <span className="ml-px transition-transform duration-300 group-hover:translate-x-1">
          <FaArrowRightLong />
        </span>
      )}
    </button>
  );
};

export default Button;