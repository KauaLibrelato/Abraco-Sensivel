import { Footer } from "./components/footer";
import { Values } from "./components/values";
import { Hero } from "./components/hero";
import { Nav } from "./components/nav";
import { Mission } from "./components/mission";
import { Vision } from "./components/vision";
import { TestsAndDevices } from "./components/testsAndDevices";

export const LandingPage = () => {
  return (
    <div className="bg-white">
      <Nav />
      <main className="flex flex-col overflow-hidden">
        <Hero />;
        <Mission />
        <Vision />
        <TestsAndDevices />
        <Values />
      </main>
      <Footer />
    </div>
  );
};
