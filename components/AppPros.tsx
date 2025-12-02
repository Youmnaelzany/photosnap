import Image from "next/image";
import { APP_PROS } from "../lib/Concents";
import Wrapper from "./Wrapper";

const AppPros = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center gap-14 py-20 md:gap-20 md:py-30 lg:flex-row lg:items-baseline lg:justify-between lg:gap-7.5">
      {APP_PROS.map((appPros) => (
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
