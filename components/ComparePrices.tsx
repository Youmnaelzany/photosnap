import { Check } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Wrapper from "./Wrapper";

const ComparePrices = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center gap-16 py-16 md:gap-14 md:py-28 lg:py-40">
      <h2 className="hidden text-[2.5rem] leading-12 font-bold tracking-[4.17px] uppercase md:flex">
        Compare
      </h2>
      <div className="flex max-w-[731px] items-center justify-center">
        <Table className="border-separate border-spacing-x-6 border-spacing-y-4 md:border-spacing-x-10 [&_td>svg]:mx-auto [&_td>svg]:block [&_tr]:border-black/60">
          <TableHeader>
            <TableRow>
              <TableHead className="text-[0.75rem] leading-[auto] font-bold tracking-[2px] text-black">
                THE FEATURES
              </TableHead>
              <TableHead className="text-[0.75rem] leading-[auto] font-bold tracking-[2px] text-black">
                BASIC
              </TableHead>
              <TableHead className="text-[0.75rem] leading-[auto] font-bold tracking-[2px] text-black">
                PRO
              </TableHead>
              <TableHead className="text-[0.75rem] leading-[auto] font-bold tracking-[2px] text-black">
                BUSINESS
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-[0.75rem] leading-[auto] font-bold tracking-[2px] text-black">
                UNLIMITED STORY POSTING
              </TableCell>
              <TableCell className="text-center">
                <Check className="size-4 text-black/70" />
              </TableCell>
              <TableCell className="text-center">
                <Check className="size-4 text-black/70" />
              </TableCell>
              <TableCell className="text-center">
                <Check className="size-4 text-black/70" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-[0.75rem] leading-[auto] font-bold tracking-[2px] text-black">
                UNLIMITED PHOTO UPLOAD
              </TableCell>
              <TableCell className="text-center">
                <Check className="size-4 text-black/70" />
              </TableCell>
              <TableCell className="text-center">
                <Check className="size-4 text-black/70" />
              </TableCell>
              <TableCell className="text-center">
                <Check className="size-4 text-black/70" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-[0.75rem] leading-[auto] font-bold tracking-[2px] text-black">
                EMBEDDING CUSTOM CONTENT
              </TableCell>
              <TableCell className="text-center"></TableCell>
              <TableCell className="text-center">
                <Check className="size-4 text-black/70" />
              </TableCell>
              <TableCell className="text-center">
                <Check className="size-4 text-black/70" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-[0.75rem] leading-[auto] font-bold tracking-[2px] text-black">
                CUSTOMIZE METADATA
              </TableCell>
              <TableCell className="text-center"></TableCell>
              <TableCell className="text-center">
                <Check className="size-4 text-black/70" />
              </TableCell>
              <TableCell className="text-center">
                <Check className="size-4 text-black/70" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-[0.75rem] leading-[auto] font-bold tracking-[2px] text-black">
                ADVANCED METRICS
              </TableCell>
              <TableCell className="text-center"></TableCell>
              <TableCell className="text-center"></TableCell>
              <TableCell className="text-center">
                <Check className="size-4 text-black/70" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-[0.75rem] leading-[auto] font-bold tracking-[2px] text-black">
                PHOTO DOWNLOADS
              </TableCell>
              <TableCell className="text-center"></TableCell>
              <TableCell className="text-center"></TableCell>
              <TableCell className="text-center">
                <Check className="size-4 text-black/70" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-[0.75rem] leading-[auto] font-bold tracking-[2px] text-black">
                SEARCH ENGINE INDEXING
              </TableCell>
              <TableCell className=""></TableCell>
              <TableCell className=""></TableCell>
              <TableCell className="text-center">
                <Check className="size-4 text-black/70" />
              </TableCell>
            </TableRow>
            <TableRow className="">
              <TableCell className="text-[0.75rem] leading-[auto] font-bold tracking-[2px] text-black">
                CUSTOM ANALYTICS
              </TableCell>
              <TableCell className=""></TableCell>
              <TableCell className=""></TableCell>
              <TableCell className="text-center">
                <Check className="size-4 text-black/70" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Wrapper>
  );
};
export default ComparePrices;
