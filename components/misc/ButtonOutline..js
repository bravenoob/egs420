import React from "react";
import Link from "next/link";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange ">
      <Link href="https://traderjoexyz.com/avalanche/trade?inputCurrency=AVAX&outputCurrency=0xc92f165f5e20979576A7Ba48f16eb45361c078a2">
        <a>
            {" "}
            {children}
        </a>
      </Link>
    </button>
  );
};

export default ButtonOutline;
