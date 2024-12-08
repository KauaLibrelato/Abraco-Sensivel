import { Fade } from "react-awesome-reveal";

export const About = () => {
  return (
    <section
      id="about"
      className="flex scroll-mt-10 justify-center bg-[#7ed957] px-6 py-8"
    >
      <div className="flex max-w-6xl flex-col items-center gap-4">
        <Fade>
          <h2 className="text-white">
            Centro de desenvolvimento Abraço Sensível
          </h2>

          <p className="p2 text-center font-semibold text-white">
            Sensibilidade que acolhe, cuidado que transforma
          </p>
        </Fade>
      </div>
    </section>
  );
};
