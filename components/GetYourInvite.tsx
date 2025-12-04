"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "lucide-react";
import Wrapper from "./Wrapper";

const GetYourInvite = () => {
  const pathname = usePathname();
  const show =
    pathname === "/features" ||
    pathname?.startsWith("/features/") ||
    pathname === "/pricing" ||
    pathname?.startsWith("/pricing/");

  if (!show) return null;

  return (
    <section
      aria-label="Get your invite"
      className="relative mx-auto w-full max-w-360"
    >
      <picture>
        <source
          media="(min-width:1024px)"
          srcSet="/shared/tablet/bg-beta.jpg"
        />
        <source
          media="(min-width:768px)"
          srcSet="/shared/desktop/bg-beta.jpg"
        />
        <Image
          src="/shared/mobile/bg-beta.jpg"
          alt="Beta Invitation"
          width={375}
          height={288}
          className="h-auto w-full md:h-[280px] md:w-[768px] lg:h-[280px] lg:w-[1440px]"
        />
      </picture>
      <div className="absolute inset-0 flex items-center">
        <Wrapper className="w-full">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="w-[310px] text-[2rem] leading-10 font-bold tracking-[3.33px] text-white uppercase md:w-[400px] md:text-[2.5rem] md:leading-12 md:tracking-[4.17px]">
              We're in Beta. Get your invite today!
            </h2>
            <Link
              href={"#"}
              className="flex items-center gap-4 text-[0.75rem] leading-[auto] font-bold tracking-[2px] text-white uppercase transition-all duration-500 ease-in-out hover:underline"
            >
              Get an invite
              <ArrowRightIcon className="text-white" />
            </Link>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};
export default GetYourInvite;
