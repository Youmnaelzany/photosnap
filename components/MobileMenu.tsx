import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { menuItems } from "./Header";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="size-7 cursor-pointer text-black" />
        </SheetTrigger>
        <SheetContent className="bg-white py-8 h-[385px]">
          <SheetHeader>
            <SheetTitle>
              {" "}
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
            </SheetTitle>

            <SheetDescription asChild>
              <div>
                <nav className="py-12 flex flex-col items-center justify-center gap-8">
                  <ul className="flex flex-col items-center justify-center gap-8">
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
                  <Separator className="bg-black/10" />
                  <Button
                    type="button"
                    asChild
                    className="cursor-pointer rounded-none transition-colors duration-500 ease-in-out hover:bg-[#DFDFDF] hover:text-black w-full uppercase font-bold text-[0.9375rem] tracking-[2.5px] h-[40px]"
                  >
                    <Link href="/pricing">Get an invite</Link>
                  </Button>
                </nav>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileMenu;
