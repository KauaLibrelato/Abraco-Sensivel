import { img } from "@/assets/img";
import { Fade } from "react-awesome-reveal";
import "./hero.css";

export const Hero = () => {
  return (
    <Fade>
      <section id="hero" className="hero-container">
        <div className="hero-text">
          <h1>O que somos?</h1>
          <p className="hero-description">
            Um centro de desenvolvimento especializado no atendimento de
            indivíduos com Transtorno do Espectro Autista (TEA), complementada
            pela venda de produtos sensoriais cuidadosamente selecionados,
            destinados a auxiliar na melhoria da qualidade de vida de pessoas
            com o espectro. Contamos com valores como a inclusão, empatia,
            responsabilidade social e respeito.
          </p>
        </div>

        <img src={img.abraco} alt="" className="hero-image" />
      </section>
    </Fade>
  );
};
