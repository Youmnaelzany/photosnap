import ComparePrices from "@/components/ComparePrices";
import OtherContainers from "@/components/OtherContainers";
import Packages from "@/components/Packages";

export default function PricingPage() {
  return (
    <main className="">
      <OtherContainers
        image="/pricing/mobile/hero.jpg"
        alt="Pricing"
        title="Pricing"
        description="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It's the simple way to create and share your photos."
        imageDesktop="/pricing/desktop/hero.jpg"
        imageTablet="/pricing/tablet/hero.jpg"
        className=""
      />
      <Packages />
      <ComparePrices />
    </main>
  );
}
