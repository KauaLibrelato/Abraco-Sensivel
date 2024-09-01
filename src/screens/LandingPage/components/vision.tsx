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
            Expandir o atendimento para além do TEA, tornando-se um centro de
            referência em cuidados integrativos e inclusão.
          </p>
        </div>
      </section>
    </Fade>
  );
};
