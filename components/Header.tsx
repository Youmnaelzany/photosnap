import Link from "next/link";
import Wrapper from "./Wrapper";
import Image from "next/image";
import { Button } from "./ui/button";
import MobileMenu from "./MobileMenu";

export const menuItems = [
  {
    label: "Stories",
    href: "/stories",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
];
const Header = () => {
  return (
    <Wrapper
      as="header"
      aria-label="Header"
      className="flex items-center justify-between py-8 bg-white fixed top-0 left-0 right-0 z-50"
    >
      <Link href="/" className="">
        <Image
          src="/shared/desktop/logo.svg"
          alt="Logo"
          width={170}
          height={16}
        />
      </Link>
      <nav className="hidden md:flex">
        <ul className="flex items-center justify-between gap-8">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-black font-bold tracking-[2px] text-[0.75rem] uppercase hover:opacity-30 duration-500 ease-in-out transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Button
        type="button"
        asChild
        className="rounded-none hidden md:block hover:bg-[#DFDFDF] hover:text-black duration-500 ease-in-out transition-colors cursor-pointer"
      >
        <Link href="/pricing">Get an invite</Link>
      </Button>
      <MobileMenu />
    </Wrapper>
  );
};
export default Header;
