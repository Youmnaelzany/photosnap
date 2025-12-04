import Image from "next/image";
import { APP_PROS } from "../lib/Concents";
import Wrapper from "./Wrapper";

const AppPros = ({ limit }: { limit?: number }) => {
  const appProsList = typeof limit === "number" ? APP_PROS.slice(0, limit) : APP_PROS;
  return (
    <Wrapper className="grid grid-cols-1 items-center justify-center gap-y-14 py-20 md:grid-cols-2 md:gap-20 md:gap-x-2.75 md:gap-y-18 md:py-30 lg:grid-cols-3 lg:flex-row lg:items-baseline lg:justify-between lg:gap-x-7.5 lg:gap-y-28.5">
      {appProsList.map((appPros) => (
        <div
          key={appPros.id}
          className="flex flex-col items-center justify-center gap-12"
        >
          <Image
            src={appPros.icon}
            alt={appPros.title}
            width={appPros.width}
            height={appPros.height}
          />
          <div className="flex max-w-[310px] flex-col items-center justify-center gap-4 text-center md:max-w-[457px] lg:max-w-[350px]">
            <h2 className="text-lg leading-6.25 font-bold tracking-normal text-black">
              {appPros.title}
            </h2>
            <p className="text-[0.9375rem] leading-6.25 font-normal tracking-normal text-black">
              {appPros.paragraph}
            </p>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};
export default AppPros;
