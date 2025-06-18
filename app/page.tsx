import React from "react";
import SecondaryButton from "./components/ui/Button/SecondaryButton";

export default function Home() {
  return (
    <div className="flex justify-center">
      <SecondaryButton
        label="Log In"
        arrow={true}
        classNames="bg-primary text-secondary hover:text-white/85 "
      />
</div>
);
}