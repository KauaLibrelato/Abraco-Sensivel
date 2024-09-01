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
            Nossa missão é criar um ambiente acolhedor e especializado,
            promovendo o desenvolvimento pessoal, autonomia e qualidade de vida
            dos nossos pacientes. Valorizamos a individualidade de cada pessoa
            com o espectro autista, capacitando-os a explorar o mundo de forma
            segura. Além disso, buscamos educar a comunidade sobre as
            seletividades dessas pessoas, promovendo a inclusão.
          </p>
        </Fade>
      </div>
    </section>
  );
};
