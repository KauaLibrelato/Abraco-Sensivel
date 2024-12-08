import { img } from "@/assets/img";
import { Fade } from "react-awesome-reveal";

export const ValueProposition = () => {
  return (
    <Fade>
      <section
        id="valueProposition"
        className="mx-auto flex max-w-6xl flex-row items-center justify-between px-6 py-12"
      >
        <img src={img.hero} alt="" className="hidden max-h-[600px] lg:block" />

        <div className="flex max-w-[600px] flex-col gap-6">
          <h1>Proposta de valor</h1>
          <p className="p1 text-gray-900">
            Oferecer serviços especializados e produtos sensoriais, com um foco
            primordial na acessibilidade e no acolhimento para indivíduos com
            Transtorno do Espectro Autista e suas famílias.
          </p>
        </div>
      </section>
    </Fade>
  );
};
