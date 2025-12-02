import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaInstagram, FaPinterest, FaSquareFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { menuItems } from "./Header";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <Wrapper
      as="footer"
      aria-label="Footer"
      className="flex w-full flex-col items-center justify-center gap-32 bg-black py-16 md:flex-row md:items-end md:justify-between"
    >
      <div className="flex flex-col items-center justify-between gap-8 md:items-start">
        {/* Logo */}
        <Link
          href="/"
          className=""
        >
          <Image
            src="/shared/desktop/logo-light.svg"
            alt="Logo"
            width={170}
            height={16}
          />
        </Link>
        {/* Social Media links For Mobile */}
        <ul className="flex gap-5">
          <li>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href="/"
                  className="cursor-pointer"
                >
                  <FaSquareFacebook className="size-6 text-white transition-all duration-500 ease-in-out hover:text-[#63AFDB]" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Facebook</p>
              </TooltipContent>
            </Tooltip>
          </li>
          <li>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href="/"
                  className="cursor-pointer"
                >
                  <FaYoutube className="size-6 text-white transition-all duration-500 ease-in-out hover:text-[#FF5A5A]" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>YouTube</p>
              </TooltipContent>
            </Tooltip>
          </li>
          <li>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href="/"
                  className="cursor-pointer"
                >
                  <FaXTwitter className="size-6 text-white transition-all duration-500 ease-in-out hover:text-[#65FFEB]" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Twitter</p>
              </TooltipContent>
            </Tooltip>
          </li>
          <li>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href="/"
                  className="cursor-pointer"
                >
                  <FaPinterest className="size-6 text-white transition-all duration-500 ease-in-out hover:text-[#DE3838]" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Pinterest</p>
              </TooltipContent>
            </Tooltip>
          </li>
          <li>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href="/"
                  className="cursor-pointer"
                >
                  <FaInstagram className="size-6 text-white transition-all duration-500 ease-in-out hover:text-[#F6C683]" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Instagram</p>
              </TooltipContent>
            </Tooltip>
          </li>
        </ul>
        {/* Navigation Links */}
        <nav className="">
          <ul className="flex flex-col items-center justify-between gap-5 md:flex-row md:items-start md:gap-6">
            <li>
              <Link
                href="/"
                className="cursor-pointer text-[0.75rem] font-bold tracking-[2px] text-white uppercase transition-colors duration-500 ease-in-out hover:opacity-30"
              >
                Home
              </Link>
            </li>
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="cursor-pointer text-[0.75rem] font-bold tracking-[2px] text-white uppercase transition-colors duration-500 ease-in-out hover:opacity-30"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Get an invitation & Copyright */}
      <div className="flex flex-col items-center justify-between gap-8.5 md:items-end md:justify-end">
        <Link
          href="#"
          className="flex cursor-pointer items-center gap-4 text-[0.75rem] font-bold tracking-[2px] text-white uppercase transition-all duration-500 ease-in-out hover:underline"
        >
          Get an Invitation
          <ArrowRight className="text-white" />
        </Link>
        <h3 className="text-[0.9375rem] font-normal tracking-normal text-white/50">
          Copyright 2025. All Rights Reserved
        </h3>
      </div>
    </Wrapper>
  );
};
export default Footer;
