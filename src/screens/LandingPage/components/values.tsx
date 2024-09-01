import { img } from "@/assets/img";
import { Slide } from "react-awesome-reveal";

export const Values = () => {
  const values = [
    {
      title: "Acolhimento",
      description:
        "Oferecemos um ambiente seguro e confortável para pacientes e suas famílias.",
      img: img.welcome,
    },
    {
      title: "Respeito pela Individualidade",
      description:
        "Adaptamos nossos cuidados às necessidades únicas de cada pessoa com TEA.",
      img: img.individually,
    },
    {
      title: "Desenvolvimento Pessoal",
      description:
        "Focamos no crescimento e independência dos pacientes com tratamentos individualizados.",
      img: img.personalDevelopment,
    },
    {
      title: "Qualidade de vida",
      description:
        "Promovemos inclusão social, apoiamos famílias e personalizamos cuidados para melhorar o bem-estar geral.",
      img: img.quality,
    },
    {
      title: "Educação e Conscientização",
      description:
        "Esforçamo-nos para informar e sensibilizar a comunidade sobre as necessidades dos indivíduos autistas.",
      img: img.education,
    },
    {
      title: "Inclusão",
      description:
        "Cultivamos uma cultura que valoriza e integra pessoas com TEA na sociedade.",
      img: img.persons,
    },
  ];

  function indexIsEven(index: number) {
    return index % 2 === 0;
  }

  return (
    <section
      id="values"
      className="mx-auto flex max-w-6xl flex-col items-center gap-y-40 px-4 py-48 md:gap-y-56"
    >
      {values.map((item, index) => {
        return (
          <Slide key={index} direction={indexIsEven(index) ? "left" : "right"}>
            <div
              className={`flex flex-col items-center gap-16 ${
                indexIsEven(index) ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="flex max-w-[426px] flex-col gap-6">
                <h1 className="text-[#7ed957]">{item.title}</h1>
                <p className="text-gray-900">{item.description}</p>
              </div>

              <img
                src={item.img}
                alt={item.title}
                className="h-[150px] md:h-[350px]"
              />
            </div>
          </Slide>
        );
      })}
    </section>
  );
};
