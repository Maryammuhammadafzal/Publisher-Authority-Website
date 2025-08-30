import Image from "next/image";
import HeroPage from "./hero/page.tsx";

export default function Home() {
  return (
    <div className="grid-background">
      <HeroPage />
    </div>
  );
}
