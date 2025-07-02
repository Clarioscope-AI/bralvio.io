import React, { ReactElement } from "react";

const Customer = (): ReactElement => {
  return (
    <div className="flex items-center justify-center  bg-black text-white">
      <div className="text-center px-4 max-w-4xl mx-auto">
        <button className="mb-5 lg:mb-6 overflow-hidden md:tracking-[3px] tracking-[1px] text-[10px] md:text-xs uppercase bg-black/55 shadow-lg text-[#D1AAD7] rounded-full px-5 py-2 border border-[#D1AAD7] mt-12 lg:mt-28">
          Customers
        </button>
        <h1 className="text-balance text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug px-2 md:px-4">
          We have changed the game of AI
          <br className="hidden lg:block" />
          <span className="lg:inline block">
            data—hear it from our customers.
          </span>
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed px-4">
          From RLHF to data labeling to model evaluation to enterprise apps,
          <br className="hidden md:block" />
          learn from experts why Scale is key to any AI strategy.
        </p>
      </div>
    </div>
  );
};

export default Customer;
