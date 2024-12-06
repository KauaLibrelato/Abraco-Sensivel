import { Footer } from "./components/footer";
import { Values } from "./components/values";
import { Hero } from "./components/hero";
import { Nav } from "./components/nav";
import { Mission } from "./components/mission";
import { Vision } from "./components/vision";
import { Products } from "./components/products";

export const LandingPage = () => {
  return (
    <div className="bg-white">
      <main className="flex flex-col overflow-hidden">
        <Nav />
        <Hero />;
        <Mission />
        <Vision />
        <Products />
        <Values />
      </main>
      <Footer />
    </div>
  );
};
