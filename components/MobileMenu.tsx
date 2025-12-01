import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { menuItems } from "./Header";
import { Button } from "./ui/button";

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="size-7 text-black cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="bg-white py-12 px-6">
          <SheetHeader>
            <SheetTitle>
              {" "}
              <Link href="/" className="">
                <Image
                  src="/shared/desktop/logo.svg"
                  alt="Logo"
                  width={170}
                  height={16}
                />
              </Link>
            </SheetTitle>

            <SheetDescription>
              <nav className="">
                <ul className="flex flex-col items-center justify-center gap-8">
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
                <Button
                  type="button"
                  asChild
                  className="rounded-none hover:bg-[#DFDFDF] hover:text-black duration-500 ease-in-out transition-colors cursor-pointer"
                >
                  <Link href="/pricing">Get an invite</Link>
                </Button>
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileMenu;
