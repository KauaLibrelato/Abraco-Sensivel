import { img } from "@/assets/img";
import { Fade } from "react-awesome-reveal";

export const Hero = () => {
  return (
    <Fade>
      <section
        id="hero"
        className="mx-auto flex max-w-6xl flex-row items-center justify-between px-6 py-12"
      >
        <div className="flex max-w-[600px] flex-col gap-6">
          <h1>O que somos?</h1>
          <p className="p1 text-gray-900">
            Uma clínica especializada no atendimento de indivíduos com
            Transtorno do Espectro Autista (TEA), complementada pela venda de
            produtos sensoriais cuidadosamente selecionados, destinados a
            auxiliar na melhoria da qualidade de vida de pessoas com o espectro.
            Contamos com valores como a inclusão, empatia, responsabilidade
            social e respeito.
          </p>
        </div>

        <img src={img.hero} alt="" className="hidden max-h-[600px] lg:block" />
      </section>
    </Fade>
  );
};
