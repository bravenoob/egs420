import React from "react";
import LogoVPN from "../../public/assets/logo_egs.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <LogoVPN className="h-8 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-medium">$EGS</strong> is a meme coin with no intrinsic value or expectation of financial return.
            There is no formal team or roadmap. The coin is for entertainment purposes only.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - EGS</p>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="https://twitter.com/EGS420">
                <a>
                  Twitter
                </a>
              </Link>
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="https://t.me/EGS_AVAX">
                <a>Telegram</a>
              </Link>
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="https://traderjoexyz.com/avalanche/trade?inputCurrency=AVAX&outputCurrency=0xc92f165f5e20979576A7Ba48f16eb45361c078a2">
                <a>
                  Trader Joe
                </a>
              </Link>
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="https://dexscreener.com/avalanche/0xd7a4fc26557d13fb229c978eb625b50ab4bec0b6">
                <a>
                  Dexscreener
                </a>
              </Link>
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="https://www.dextools.io/app/en/avalanche/pair-explorer/0xd7a4fc26557d13fb229c978eb625b50ab4bec0b6">
                <a>
                  Dextools
                </a>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
