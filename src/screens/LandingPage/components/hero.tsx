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
            Clínica Abraço Sensível - Clínica Especializada LTDA é uma clínica
            dedicada ao atendimento de indivíduos com Transtorno do Espectro
            Autista (TEA), oferecendo diagnósticos, psicoterapia e uma seleção
            cuidadosa de produtos sensoriais. Nosso compromisso inclui valores
            de inclusão, empatia e responsabilidade social, proporcionando um
            ambiente acolhedor e integrado para pacientes e suas famílias.
            Estamos localizados no Bairro Santa Bárbara, em Criciúma, e buscamos
            sensibilizar a comunidade sobre o TEA.
          </p>
        </div>

        <img src={img.hero} alt="" className="hidden max-h-[600px] lg:block" />
      </section>
    </Fade>
  );
};
