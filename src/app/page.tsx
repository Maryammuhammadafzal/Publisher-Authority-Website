
import HeroPage from "./hero/page";
// import FeaturesPage from "./features/page";
import AboutPage from "./about/page";
import HowItWorkPage from "./how-it-work/page";
import TestimonialPage from "./testimonial/page";
import FAQPage from "./faq/page";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="grid-background">
      <Header />
      <HeroPage />
      <AboutPage />
      {/* <FeaturesPage /> */}
      <HowItWorkPage />
      <TestimonialPage />
      <FAQPage />
      <Footer />
    </div>
  );
}
