import { NavbarLogo } from "@/components/ui/resizable-navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DesktopFooter = () => {
  return (
    <footer className="container mx-auto p-3 md:p-10">
      <div className="md:flex md:justify-between items-start">
        <div className="mb-6 md:mb-0 w-full md:w-1/4 flex flex-col items-center md:items-start gap-2">
          <Link
            href="#"
            className="relative z-20 mr-4 flex items-center justify-center md:justify-start space-x-2 gap-2"
          >
            <Image
              src="/money-scalper-logo.png"
              alt="logo"
              width={40}
              height={32}
            />
            <span className="text-[#FFFFFFE5] text-xl font-semibold"> Money Scalper</span>
          </Link>
          <p className=" text-white font-medium md:font-semibold text-sm md:text-lg my-3 w-full text-center md:text-left md:w-1/2">
            Follow us on social media
          </p>
          <div className="flex gap-3">
            <Link href={"https://www.facebook.com/"} target="_blank">
              <Image
                src={"/social/facebook.png"}
                width={40}
                height={40}
                alt="facebook"
              />
            </Link>
            <Link href={"https://www.instagram.com/"} target="_blank">
              <Image
                src={"/social/instagram.png"}
                width={40}
                height={40}
                alt="facebook"
              />
            </Link>
            <Link href={"https://www.youtube.com/"} target="_blank">
              <Image
                src={"/social/youtube.png"}
                width={40}
                height={40}
                alt="facebook"
              />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:w-3/4">
          <div className="w-full md:w-1/3 ">
            <h2 className="mb-6 text-sm md:text-base text-white font-semibold text-heading uppercase">
              Trading
            </h2>
            <ul className="text-body font-medium">
              <li className="my-4">
                <a
                  href="https://flowbite.com/"
                  className="hover:underline text-[#FFFFFF8F] text-sm md:text-base"
                >
                  How to trade
                </a>
              </li>
              <li className="my-4">
                <a
                  href="https://tailwindcss.com/"
                  className="hover:underline text-[#FFFFFF8F] text-sm md:text-base"
                >
                  Stocks
                </a>
              </li>
              <li className="my-4">
                <a
                  href="https://tailwindcss.com/"
                  className="hover:underline text-[#FFFFFF8F] text-sm md:text-base"
                >
                  Forex
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 ">
            <h2 className="mb-6 text-sm md:text-base text-white font-semibold text-heading uppercase">
              About
            </h2>
            <ul className="text-body font-medium">
              <li className="my-4">
                <a
                  href="https://github.com/themesberg/flowbite"
                  className="hover:underline text-[#FFFFFF8F] text-sm md:text-base "
                >
                  Social media
                </a>
              </li>
              <li className="my-4">
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline text-[#FFFFFF8F] text-sm md:text-base"
                >
                  Assets
                </a>
              </li>
              <li className="my-4">
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline text-[#FFFFFF8F] text-sm md:text-base"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="mb-6 text-sm md:text-base text-white font-semibold text-heading uppercase">
              About
            </h2>
            <ul className="text-body font-medium">
              <li className="my-4">
                <a
                  href="https://github.com/themesberg/flowbite"
                  className="hover:underline text-[#FFFFFF8F] text-sm md:text-base "
                >
                  Social media
                </a>
              </li>
              <li className="my-4">
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline text-[#FFFFFF8F] text-sm md:text-base"
                >
                  Assets
                </a>
              </li>
              <li className="my-4">
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline text-[#FFFFFF8F] text-sm md:text-base"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DesktopFooter;
