import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const HazyFullMoon = () => {
  return (
    <section className="relative max-w-360">
      <picture>
        <source
          media="(min-width:1024px)"
          srcSet={"/stories/tablet/moon-of-appalacia.jpg"}
        />
        <source
          media="(min-width:768px)"
          srcSet={"/stories/desktop/moon-of-appalacia.jpg"}
        />
        <Image
          src={"/stories/mobile/moon-of-appalacia.jpg"}
          alt={"Hazy Full Moon of Appalachia"}
          width={375}
          height={317}
          className="h-auto w-full md:h-[650px] md:w-[768px] lg:h-[650px] lg:w-[1440px]"
        />
      </picture>
      <div className="right-0 bottom-0 left-0 flex items-center justify-center bg-black py-10 text-white md:absolute md:justify-start md:bg-transparent md:px-10 md:py-30 lg:px-24">
        <div className="w-[318px] space-y-6">
          <div className="space-y-4">
            <h1 className="text-[0.75rem] leading-[auto] font-bold tracking-[2px]">
              LAST MONTH&apos;S FEATURED STORY
            </h1>
            <h2 className="text-[2rem] leading-10 font-bold tracking-[3.33px] md:pt-2 md:text-[2.5rem] md:leading-12 md:tracking-[4.17px]">
              HAZY FULL MOON OF APPALACHIA
            </h2>
            <h3 className="text-[0.8125rem] leading-[auto] font-normal tracking-normal opacity-75">
              March 2nd 2020 by John Appleseed
            </h3>
          </div>
          <div className="space-y-6">
            <p className="text-[0.9375rem] leading-6.25 font-normal tracking-normal opacity-60">
              The dissected plateau area, while not actually made up of geological mountains, is
              popularly called "mountains," especially in eastern Kentucky and West Virginia, and
              while the ridges are not high, the terrain is extremely rugged.
            </p>
            <Link
              href={"#"}
              className="flex items-center gap-4 text-[0.75rem] leading-[auto] font-bold tracking-[2px] uppercase transition-all duration-500 ease-in-out hover:underline"
            >
              VIEW THE STORIES
              <ArrowRightIcon className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HazyFullMoon;
