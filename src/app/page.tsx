import Image from "next/image";
import HeroPage from "./hero/page.tsx";
import FeaturesPage from "./features/page.jsx";

export default function Home() {
  return (
    <div className="grid-background">
      <HeroPage />
      <FeaturesPage />
    </div>
  );
}
