/**
 * Главная страница — композиция секций.
 * RSC (ТЗ п.0.1, п.5.1). Контент импортируется из lib/constants.
 */
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Story } from "@/components/Story/Story";
import { ParallaxBreak } from "@/components/ParallaxBreak/ParallaxBreak";
import { Menu } from "@/components/Menu/Menu";
import { Gallery } from "@/components/Gallery/Gallery";
import { Visit } from "@/components/Visit/Visit";
import { Reviews } from "@/components/Reviews/Reviews";
import { Newsletter } from "@/components/Newsletter/Newsletter";
import { Footer } from "@/components/Footer/Footer";
import { BREAK_QUOTES } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-0">
        <Hero />
        <Story />
        <ParallaxBreak
          image={BREAK_QUOTES[0].image}
          alt={BREAK_QUOTES[0].alt}
          text={BREAK_QUOTES[0].text}
          cite={BREAK_QUOTES[0].cite}
        />
        <Menu />
        <Gallery />
        <Visit />
        <Reviews />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
