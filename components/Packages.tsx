"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import Wrapper from "./Wrapper";

interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  isPopular?: boolean;
  cta: string;
  href: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: "basic",
    name: "Basic",
    description:
      "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    price: "19.00",
    cta: "PICK PLAN",
    href: "#",
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "More advanced features available. Best for photography veterans and professionals.",
    price: "39.00",
    isPopular: true,
    cta: "PICK PLAN",
    href: "#",
  },
  {
    id: "business",
    name: "Business",
    description:
      "Additional features available for business users. Perfect for businesses and teams.",
    price: "99.00",
    cta: "PICK PLAN",
    href: "#",
  },
];

interface PricingCardProps extends PricingTier {
  isYearly?: boolean;
}

const PricingCard = ({
  id,
  name,
  description,
  price,
  isPopular = false,
  cta,
  href,
  isYearly = false,
}: PricingCardProps) => {
  const cardClasses = [
    "relative",
    "grid",
    "h-[407px]",
    "w-full",
    "w-[350px]",
    "grid-cols-1",
    "items-center",
    "justify-between",
    "px-8",
    "text-black",
    "md:h-[270px]",
    "md:w-[689px]",
    "md:grid-cols-2",
    "lg:h-[470px]",
    "lg:w-[350px]",
    "lg:grid-cols-1",
    isPopular ? "bg-black text-white lg:h-[500px]" : "bg-[#F5F5F5]",
  ].join(" ");

  const buttonClasses = [
    "h-[40px]",
    "w-[158px]",
    "cursor-pointer",
    "rounded-none",
    "text-[0.75rem]",
    "font-bold",
    "tracking-[2px]",
    "uppercase",
    "transition-colors",
    "duration-500",
    "ease-in-out",
    isPopular ? "bg-white text-black hover:bg-[#DFDFDF]" : "bg-black text-white hover:bg-[#707070]",
  ].join(" ");

  const descriptionClasses = [
    "text-[0.9375rem]",
    "leading-6.25",
    "font-normal",
    "tracking-normal",
    isPopular ? "opacity-60" : "opacity-60",
  ].join(" ");

  return (
    <div className={cardClasses}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-[#FFC593] via-[#BC7198] to-[#5A77FF] px-6 py-1 text-xs font-bold tracking-wider text-white uppercase">
          Most Popular
        </div>
      )}
      <div className="flex flex-col items-center justify-center gap-4.5 md:items-start lg:items-center">
        <h3 className="text-2xl leading-6.25 font-bold tracking-normal">{name}</h3>
        <p className={descriptionClasses}>{description}</p>
      </div>
      <div className="flex flex-col items-center justify-center md:items-start lg:items-center">
        <h3 className="text-[2.5rem] leading-12 font-bold tracking-[4.17px]">
          ${price}
          {isYearly ? "0" : ""}
        </h3>
        <h4 className={descriptionClasses}>per {isYearly ? "year" : "month"}</h4>
      </div>
      <div className="flex flex-col items-center justify-center md:items-start lg:items-center">
        <Button
          type="button"
          asChild
          className={buttonClasses}
          aria-label={`Choose ${name} plan for $${price} per ${isYearly ? "year" : "month"}`}
        >
          <Link href={href}>{cta}</Link>
        </Button>
      </div>
    </div>
  );
};

const Packages = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <Wrapper className="flex flex-col items-center justify-center gap-10 pt-16 md:pt-28 lg:gap-12 lg:pt-30">
      <div className="flex items-center gap-4">
        <span className={`text-sm font-bold ${!isYearly ? "opacity-100" : "opacity-60"}`}>
          Monthly
        </span>
        <Switch
          checked={isYearly}
          onCheckedChange={setIsYearly}
          aria-label="Toggle between monthly and yearly billing"
        />
        <span className={`text-sm font-bold ${isYearly ? "opacity-100" : "opacity-60"}`}>
          Yearly
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:justify-between lg:gap-7.5">
        {pricingTiers.map((tier) => (
          <PricingCard
            key={tier.id}
            {...tier}
            isYearly={isYearly}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Packages;
