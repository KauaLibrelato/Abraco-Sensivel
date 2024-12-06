import { Fade } from "react-awesome-reveal";

export const Products = () => {
  const products = [
    {
      title: "LEKA",
      description:
        "Um robô interativo desenvolvido especialmente para ajudar crianças com autismo e outras necessidades especiais no aprendizado e desenvolvimento de habilidades sociais, cognitivas e emocionais. Ele utiliza atividades lúdicas e educativas para estimular o aprendizado e melhorar a comunicação, funcionando como uma ferramenta terapêutica complementar.",
    },
    {
      title: "O Reizinho autista: guia para lidar com comportamentos difíceis",
      description:
        "É um livro infantil que aborda o tema do autismo de maneira sensível e inclusiva. A história apresenta um jovem rei que, apesar de suas características únicas, aprende a liderar com sabedoria e empatia. O objetivo do livro é aumentar a conscientização sobre o autismo e promover a aceitação da diversidade, mostrando como as diferenças podem ser uma força e uma inspiração.",
    },
  ];

  return (
    <section
      id="products"
      className="flex scroll-mt-10 justify-center bg-[#7ed957] px-6 py-16"
    >
      <div className="flex max-w-6xl flex-col items-center gap-8">
        <Fade>
          <h2 className="text-white">Produtos</h2>

          <div className="flex justify-center gap-6 sm:grid-cols-2 md:grid-cols-3">
            {products.map((item, index) => (
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
