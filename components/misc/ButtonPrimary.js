import React from "react";
import Link from "next/link";

const ButtonPrimary = ({children, addClass}) => {
    return (
        <button
            className={
                "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none " +
                addClass
            }
        >
            <Link
                href="https://traderjoexyz.com/avalanche/trade?inputCurrency=AVAX&outputCurrency=0xc92f165f5e20979576A7Ba48f16eb45361c078a2">
                <a>
                    {children}
                </a>
            </Link>
        </button>
    );
};

export default ButtonPrimary;
