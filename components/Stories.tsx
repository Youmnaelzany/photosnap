import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { STORIES } from "@/lib/Concents";
import { Separator } from "./ui/separator";
import Wrapper from "./Wrapper";

const Stories = ({ limit }: { limit?: number }) => {
  const stories = typeof limit === "number" ? STORIES.slice(0, limit) : STORIES;
  return (
    <Wrapper
      as="section"
      aria-label="Stories"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    >
      {stories.map((story) => (
        <div
          key={story.id}
          className="group relative overflow-hidden transition-transform duration-300 hover:-translate-y-8"
        >
          <picture>
            <source
              media="(min-width:768px)"
              srcSet={story.imageDesktop}
            />
            <Image
              src={story.imageMobile}
              alt={story.name}
              width={375}
              height={375}
              className="md:h-[500px] md:w-[360px]"
            />
          </picture>
          {/* Top overlay tint */}
          <div className="pointer-events-none absolute inset-0 z-0 bg-[#979797]/40 mix-blend-multiply" />
          {/* Gradient bottom border (reveals on hover) */}
          <div className="absolute bottom-0 left-0 z-10 h-1.5 w-full bg-linear-to-r from-[#FFC593] via-[#BC7198] to-[#5A77FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 z-20 w-full space-y-1 p-8">
            <div className="pb-4">
              <p className="text-[0.8125rem] font-normal tracking-normal text-white">
                {story.date}
              </p>
              <h2 className="text-lg leading-6.25 font-bold tracking-normal text-white">
                {story.name}
              </h2>
              <p className="text-[0.8125rem] font-normal tracking-normal text-white">{story.by}</p>
            </div>
            <Separator />
            <Link
              href={`/stories/${story.id}`}
              className="flex items-center justify-between gap-2 pt-5 text-[0.75rem] font-bold tracking-[2px] text-white uppercase"
            >
              Read Story
              <MoveRight className="text-white" />
            </Link>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};
export default Stories;
