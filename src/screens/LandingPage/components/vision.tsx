import { img } from "@/assets/img";
import { Fade } from "react-awesome-reveal";

export const Vision = () => {
  return (
    <Fade>
      <section
        id="vision"
        className="mx-auto flex max-w-6xl flex-row items-center justify-between px-6 py-12"
      >
        <img src={img.hero} alt="" className="hidden max-h-[600px] lg:block" />

        <div className="flex max-w-[600px] flex-col gap-6">
          <h1>Nossa visão</h1>
          <p className="p1 text-gray-900">
            Nossa visão inclui a expansão do atendimento para além do Transtorno
            do Espectro Autista (TEA), tornando- se um centro de referência em
            cuidados integrativos, promovendo inclusão e qualidade de vida.
            Nosso compromisso é evoluir constantemente, adaptando nossos
            recursos e práticas para atender de maneira eficaz às limitações
            existentes em pessoas da nossa sociedade.
          </p>
        </div>
      </section>
    </Fade>
  );
};
