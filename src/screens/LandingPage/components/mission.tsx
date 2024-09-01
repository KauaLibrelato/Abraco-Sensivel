import { Fade } from "react-awesome-reveal";

export const Mission = () => {
  return (
    <section
      id="mission"
      className="flex scroll-mt-10 justify-center bg-[#7ed957] px-6 py-16"
    >
      <div className="flex max-w-6xl flex-col items-center gap-4">
        <Fade>
          <h2 className="text-white">Missão</h2>

          <p className="p2 text-center font-semibold text-white">
            Oferecer um ambiente acolhedor com serviços clínicos especializados,
            promovendo o desenvolvimento pessoal e a inclusão de pessoas que
            possuem o TEA.
          </p>
        </Fade>
      </div>
    </section>
  );
};
