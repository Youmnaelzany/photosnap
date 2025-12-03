import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

const SectionContainers = ({ image, alt, title, description, imageDesktop, imageTablet, bgColor, className, textColor }: { image: string, alt: string, title: string, description: string, imageDesktop: string, imageTablet: string, bgColor: string, className: string, textColor: string }) => {
    return (
        <section className={cn("flex flex-col max-w-7xl", className)} >
            <picture>
                <source media="(min-width:1024px)" srcSet={imageDesktop} />
                <source media="(min-width:768px)" srcSet={imageTablet} />
                <img src={image} alt={alt} width={375} height={294} className="md:w-[273px] md:h-[650px] lg:w-[830px] lg:h-[650px]" />
            </picture>
            <div className={`bg-${bgColor} w-[375px] h-[419px] md:w-[495px] md:h-[650px] lg:w-[610px] lg:h-[650px] flex flex-col justify-center items-center text-${textColor}`}>
                <div className="w-[318px] h-[275px] md:w-[387px] md:h-[304px] lg:w-[387px] lg:h-[329px]">
                    <h2 className="font-bold text-[2rem] tracking-[3.33px] leading-10 md:tracking-[4.17px] md:leading-12 md:text-[2.5rem] uppercase flex items-center justify-center w-[318px] md:w-[387px]">{title}</h2>
                    <p className="opacity-60 font-normal tracking-normal leading-6.25 text-[0.9375rem]  pt-4 pb-6 md:pt-5 md:pb-12">{description}</p>
                    <Link href={"#"} className="font-bold tracking-[2px] leading-[auto] text-[0.75rem] flex items-center gap-4 uppercase">VIEW THE STORIES
                        <ArrowRightIcon className={`text-${textColor}`} />
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default SectionContainers