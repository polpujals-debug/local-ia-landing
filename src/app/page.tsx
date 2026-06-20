import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Automations } from "@/components/Automations";
import { Work } from "@/components/Work";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LocaleProvider } from "@/lib/locale-context";

export default function Home() {
  return (
    <LocaleProvider>
      <div className="min-h-screen bg-bg text-fg overflow-hidden">
        <ScrollReveal />
        <Header />
        <Hero />
        <Process />
        <Services />
        <Automations />
        <Work />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </LocaleProvider>
  );
}
