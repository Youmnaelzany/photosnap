import AppPros from "@/components/AppPros";
import OtherContainers from "@/components/OtherContainers";

export default function FeaturesPage() {
  return (
    <main className="">
      <OtherContainers
        image="/features/mobile/hero.jpg"
        alt="Features"
        title="Features"
        description="We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories."
        imageDesktop="/features/desktop/hero.jpg"
        imageTablet="/features/tablet/hero.jpg"
        className=""
      />
      <AppPros />
    </main>
  );
}
