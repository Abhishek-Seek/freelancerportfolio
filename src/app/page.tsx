import AboutMe from "@/component/about-me/AboutMe";
import Agency from "@/component/agency/Agency";
import DigitalMarketingSection from "@/component/DigitalMarketingSection/DigitalMarketingSection";
import Faq from "@/component/faq/Faq";
import Footer from "@/component/footer.tsx/Footer";
import HeroSection from "@/component/hero-section/HeroSection";
import MyService from "@/component/my-service/MyService";
import OurClient from "@/component/our-client/OurClient";

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <HeroSection />
      <AboutMe />
      <MyService />
      <DigitalMarketingSection />
      <Agency />
      <OurClient />
      <Faq />
      <Footer />
    </>
  );
}
