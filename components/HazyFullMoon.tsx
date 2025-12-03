import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"

const HazyFullMoon = () => {
    return (
        <section className="max-w-360 relative">
            <picture>
                <source media="(min-width:1024px)" srcSet={"/stories/tablet/moon-of-appalacia.jpg"} />
                <source media="(min-width:768px)" srcSet={"/stories/desktop/moon-of-appalacia.jpg"} />
                <Image src={"/stories/mobile/moon-of-appalacia.jpg"} alt={"Hazy Full Moon of Appalachia"} width={375} height={317} className="w-full h-auto md:w-[768px] md:h-[650px] lg:w-[1440px] lg:h-[650px]" />
            </picture>
            <div className="md:absolute bottom-0 left-0 right-0 md:px-10 lg:px-24 py-10 md:py-30 bg-black md:bg-transparent text-white flex items-center justify-center md:justify-start">
                <div className="w-[318px]  space-y-6">
                    <div className="space-y-4">
                        <h1 className="text-[0.75rem] font-bold leading-[auto] tracking-[2px]">LAST MONTH&apos;S FEATURED STORY</h1>
                        <h2 className="md:pt-2 text-[2rem] leading-10 tracking-[3.33px] font-bold md:tracking-[4.17px] md:leading-12 md:text-[2.5rem]">HAZY FULL MOON OF APPALACHIA</h2>
                        <h3 className="opacity-75 font-normal leading-[auto] tracking-normal text-[0.8125rem]">March 2nd 2020 by John Appleseed</h3>
                    </div>
                    <div className="space-y-6">
                        <p className="opacity-60 leading-6.25 tracking-normal font-normal text-[0.9375rem]">The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
                        <Link href={"#"} className="font-bold tracking-[2px] leading-[auto] text-[0.75rem] flex items-center gap-4 uppercase">VIEW THE STORIES
                            <ArrowRightIcon className="text-white" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HazyFullMoon