import AppPros from "@/components/AppPros";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <main className="">
      <Stories limit={4} />
      <AppPros />
    </main>
  );
}
