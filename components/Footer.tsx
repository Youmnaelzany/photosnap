import Link from "next/link";
import Wrapper from "./Wrapper";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <Wrapper as="footer" aria-label="Footer" className="bg-black py-12">
      <div className="">
        <Link href="/" className="">
          <Image
            src="/shared/desktop/logo-light.svg"
            alt="Logo"
            width={170}
            height={16}
          />
        </Link>
        <ul className="flex gap-5">
          <li>
            <Tooltip>
              <TooltipTrigger>
                <Link href="/" className="cursor-pointer">
                  <FaSquareFacebook className="size-6 text-white " />
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
                <Link href="/" className="cursor-pointer">
                  <FaYoutube className="size-6 text-white " />
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
                <Link href="/" className="cursor-pointer">
                  <FaXTwitter className="size-6 text-white " />
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
                <Link href="/" className="cursor-pointer">
                  <FaPinterest className="size-6 text-white" />
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
                <Link href="/" className="cursor-pointer ">
                  <FaInstagram className=" size-6 text-white transition-all duration-300 hover:text-[#F6C683]" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Instagram</p>
              </TooltipContent>
            </Tooltip>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};
export default Footer;
