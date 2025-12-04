import Image from "next/image";
import { cn } from "@/lib/utils";

const OtherContainers = ({
  image,
  alt,
  title,
  description,
  imageDesktop,
  imageTablet,
  className,
}: {
  image: string;
  alt: string;
  title: string;
  description: string;
  imageDesktop: string;
  imageTablet: string;
  className: string;
}) => {
  return (
    <section className={cn("flex max-w-360 flex-col md:flex-row-reverse", className)}>
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
          className="h-auto w-full md:h-[490px] md:w-[273px] lg:h-[490px] lg:w-[830px]"
        />
      </picture>
      <div className="flex h-[300px] w-full flex-col items-center justify-center bg-black text-white md:h-[490px] md:w-[495px] lg:h-[490px] lg:w-[610px]">
        <div className="h-[156px] w-[318px] space-y-4 md:h-[304px] md:w-[387px] md:space-y-5 lg:h-[144px] lg:w-[387px]">
          <h2 className="text-[2rem] leading-10 font-bold tracking-[3.33px] uppercase md:w-[387px] md:text-[2.5rem] md:leading-12 md:tracking-[4.17px]">
            {title}
          </h2>
          <p className="text-[0.9375rem] leading-6.25 font-normal tracking-normal opacity-60">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
export default OtherContainers;
