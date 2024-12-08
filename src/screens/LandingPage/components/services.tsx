import { Fade } from "react-awesome-reveal";

export const Services = () => {
  const services = [
    {
      title: "Psicoterapia Infantil",
      description:
        "É projetada para promover o bem-estar emocional e o desenvolvimento das crianças. Usamos uma abordagem central, focada na mudança de padrões de pensamento negativos, ajudando as crianças a enfrentarem desafios emocionais.",
    },
    {
      title: "Neurologia",
      description:
        "Realização de diagnósticos e acompanhamento dos pacientes. Podendo prescrever medicamentos para controlar sintomas como agitação e irritabilidade, além de monitorar o desenvolvimento neurológico ao longo do tempo. Seu trabalho também envolve a gestão de condições associadas ao TEA, como transtornos de movimento e déficit de atenção, e oferece orientação às famílias para lidar com os desafios do cotidiano. A médica atua de forma integrada com a psicoterapeuta, para garantir um tratamento completo e eficaz.",
    },
  ];

  return (
    <section
      id="services"
      className="flex scroll-mt-10 justify-center bg-[#7ed957] px-6 py-16"
    >
      <div className="flex max-w-6xl flex-col items-center gap-8">
        <Fade>
          <h2 className="text-white">Serviços</h2>

          <div className="flex justify-center gap-6 sm:grid-cols-2 md:grid-cols-3">
            {services.map((item, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg bg-[#5eb33f] p-6 text-white shadow-md"
              >
                <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};
