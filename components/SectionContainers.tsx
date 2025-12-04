import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const SectionContainers = ({
  image,
  alt,
  title,
  description,
  imageDesktop,
  imageTablet,
  bgColor,
  className,
  textColor,
}: {
  image: string;
  alt: string;
  title: string;
  description: string;
  imageDesktop: string;
  imageTablet: string;
  bgColor: string;
  className: string;
  textColor: string;
}) => {
  return (
    <section className={cn("flex max-w-360 flex-col", className)}>
      <picture>
        <source
          media="(min-width:1024px)"
          srcSet={imageDesktop}
        />
        <source
          media="(min-width:768px)"
          srcSet={imageTablet}
        />
        <Image
          src={image}
          alt={alt}
          width={375}
          height={294}
          className="h-auto w-full md:h-[650px] md:w-[273px] lg:h-[650px] lg:w-[830px]"
        />
      </picture>
      <div
        className={`bg-${bgColor} flex h-[419px] w-full flex-col items-center justify-center md:h-[650px] md:w-[495px] lg:h-[650px] lg:w-[610px] text-${textColor}`}
      >
        <div className="h-[275px] w-[318px] md:h-[304px] md:w-[387px] lg:h-[329px] lg:w-[387px]">
          <h2 className="flex w-[318px] items-center justify-center text-[2rem] leading-10 font-bold tracking-[3.33px] uppercase md:w-[387px] md:text-[2.5rem] md:leading-12 md:tracking-[4.17px]">
            {title}
          </h2>
          <p className="pt-4 pb-6 text-[0.9375rem] leading-6.25 font-normal tracking-normal opacity-60 md:pt-5 md:pb-12">
            {description}
          </p>
          <Link
            href={"#"}
            className="flex items-center gap-4 text-[0.75rem] leading-[auto] font-bold tracking-[2px] uppercase transition-all duration-500 ease-in-out hover:underline"
          >
            VIEW THE STORIES
            <ArrowRightIcon className={`text-${textColor}`} />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default SectionContainers;
