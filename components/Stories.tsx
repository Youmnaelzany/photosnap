import { STORIES } from "@/lib/Concents";
import Wrapper from "./Wrapper";
import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const Stories = () => {
  return (
    <Wrapper
      as="section"
      aria-label="Stories"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    >
      {STORIES.map((story) => (
        <div
          key={story.id}
          className="relative group overflow-hidden transition-transform duration-300 hover:-translate-y-8"
        >
          <picture>
            <source media="(min-width:768px)" srcSet={story.imageDesktop} />
            <Image
              src={story.imageMobile}
              alt={story.name}
              width={375}
              height={375}
              className="md:w-[360px] md:h-[500px]"
            />
          </picture>
          {/* Top overlay tint */}
          <div className="absolute inset-0 bg-[#979797]/40 mix-blend-multiply pointer-events-none z-0" />
          {/* Gradient bottom border (reveals on hover) */}
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-linear-to-r from-[#FFC593] via-[#BC7198] to-[#5A77FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />
          <div className="absolute bottom-0 left-0 space-y-1 w-full p-8 z-20">
            <div className="pb-4">
              <p className="text-white text-[0.8125rem] font-normal tracking-normal">
                {story.date}
              </p>
              <h2 className="text-white text-lg leading-6.25 font-bold tracking-normal">
                {story.name}
              </h2>
              <p className="text-white text-[0.8125rem] font-normal tracking-normal">
                {story.by}
              </p>
            </div>
            <Separator />
            <Link
              href={`/stories/${story.id}`}
              className="uppercase flex justify-between items-center gap-2 text-white pt-5 font-bold tracking-[2px] text-[0.75rem]"
            >
              Read Story
              <MoveRight />
            </Link>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};
export default Stories;
