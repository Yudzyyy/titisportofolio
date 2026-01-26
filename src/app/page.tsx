import HeroSplitScreen from "@/components/sections/HeroSplitScreen";
import BentoGrid from "@/components/sections/BentoGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSplitScreen />
      <BentoGrid />
    </div>
  );
}
