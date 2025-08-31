import Image from "next/image";
import HeroPage from "./hero/page.tsx";
import FeaturesPage from "./features/page.tsx";
import AboutPage from "./about/page.tsx";
import HowItWorkPage from "./how-it-work/page.tsx";
import TestimonialPage from "./testimonial/page.tsx";
import FAQPage from "./faq/page.tsx";

export default function Home() {
  return (
    <div className="grid-background">
      <HeroPage />
      <AboutPage />
      <FeaturesPage />
      <HowItWorkPage/>
      <TestimonialPage/>
      <FAQPage/>
    </div>
  );
}
