import AppPros from "@/components/AppPros";
import HomeStories from "@/components/HomeStories";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <main className="">
      <HomeStories />
      <Stories limit={4} />
      <AppPros />
    </main>
  );
}
