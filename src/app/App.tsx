import { Hero } from "./components/Hero";
import { ServiceTicker } from "./components/ServiceTicker";
import { SelectedWork } from "./components/SelectedWork";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Process } from "./components/Process";
import { Pricing } from "./components/Pricing";
import { Team } from "./components/Team";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col items-start w-full bg-white">
      <Hero />
      <ServiceTicker />
      <SelectedWork />
      <Services />
      <About />
      <Process />
      <Pricing />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}
