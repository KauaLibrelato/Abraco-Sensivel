import { Footer } from "./components/footer";
import { Values } from "./components/values";
import { Hero } from "./components/hero";
// import { Nav } from "./components/nav";
import { Mission } from "./components/mission";
import { Vision } from "./components/vision";
import { Products } from "./components/products";
import { About } from "./components/about";
import { Services } from "./components/services";
import { ValueProposition } from "./components/valueProposition";

export const LandingPage = () => {
  return (
    <div className="bg-white">
      <main className="flex flex-col">
        {/* <Nav /> */}
        <About />
        <Hero />;
        <Mission />
        <Vision />
        <Products />
        <ValueProposition />
        <Services />
        <Values />
      </main>
      <Footer />
    </div>
  );
};
