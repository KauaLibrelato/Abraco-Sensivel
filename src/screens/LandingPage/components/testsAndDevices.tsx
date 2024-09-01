import { Fade } from "react-awesome-reveal";

export const TestsAndDevices = () => {
  const testsAndDevices = [
    {
      title: "MCHAT",
      description:
        "Este instrumento é utilizado para o rastreamento precoce do autismo, com o objetivo de identificar sinais indicativos desse transtorno em crianças entre 18 e 24 meses de idade.",
    },
    {
      title: "ADI-R",
      description:
        "Uma entrevista estruturada projetada para coletar informações detalhadas sobre o comportamento do indivíduo em vários estágios de seu desenvolvimento.",
    },
    {
      title: "WISC-V",
      description:
        "Um instrumento clínico utilizado para avaliar a capacidade intelectual e o processo de resolução de problemas em crianças, adolescentes e adultos.",
    },
    {
      title: "Qualquer coisa que você quiser",
      description:
        "Um instrumento clínico utilizado para avaliar a capacidade intelectual e o processo de resolução de problemas em crianças, adolescentes e adultos.",
    },
    {
      title: "Qualquer coisa que você quiser",
      description:
        "Um instrumento clínico utilizado para avaliar a capacidade intelectual e o processo de resolução de problemas em crianças, adolescentes e adultos.",
    },
  ];

  return (
    <section
      id="testsAndDevices"
      className="flex scroll-mt-10 justify-center bg-[#7ed957] px-6 py-16"
    >
      <div className="flex max-w-6xl flex-col items-center gap-8">
        <Fade>
          <h2 className="text-white">Testes e Dispositivos</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
            {testsAndDevices.map((item, index) => (
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
