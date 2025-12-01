import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { Button } from "./ui/button";
import Wrapper from "./Wrapper";

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
      className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between bg-white py-8"
    >
      <Link
        href="/"
        className=""
      >
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
                className="cursor-pointer text-[0.75rem] font-bold tracking-[2px] text-black uppercase transition-colors duration-500 ease-in-out hover:opacity-30"
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
        className="hidden cursor-pointer rounded-none transition-colors duration-500 ease-in-out hover:bg-[#DFDFDF] hover:text-black md:block"
      >
        <Link href="/pricing">Get an invite</Link>
      </Button>
      <MobileMenu />
    </Wrapper>
  );
};
export default Header;
