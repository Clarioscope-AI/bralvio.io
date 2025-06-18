
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

type Props = {
  label: string;
  arrow?: boolean;
  classNames?: string;
};

const SecondaryButton = ({ label, arrow, classNames = "" }: Props) => {
  return (
    <button
      type="button"
      className={`group px-5 py-2 text-white font-bold flex items-center ${classNames} cursor-pointer transition-colors duration-300 focus:outline-none`}
    >
      {label}
      {arrow && (
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1">
          <IoIosArrowRoundForward size={30} />
        </span>
      )}
    </button>
  );
};

export default SecondaryButton;
