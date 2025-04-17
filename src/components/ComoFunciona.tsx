const steps = [
  {
    src: "https://res.cloudinary.com/dhqvjxgue/image/upload/v1744155474/icone-quiz_vqbtlt.png",
    alt: "Responda o quiz",
    text: "Passo 1: Responda o questionário",
  },
  {
    src: "https://res.cloudinary.com/dhqvjxgue/image/upload/v1744155474/icone-ia_k89u8u.png",
    alt: "Receba seu roteiro com IA",
    text: "Passo 2: Receba seu roteiro com IA",
  },
  {
    src: "https://res.cloudinary.com/dhqvjxgue/image/upload/v1744155474/icone-especialista_ev6aa7.png",
    alt: "Converse com um especialista",
    text: "Passo 3: Converse com um especialista",
  },
];

export default function ComoFunciona() {
  return (
    <section className="como-funciona py-16 px-4 bg-white text-center" id="como-funciona">
      <h2 className="text-2xl md:text-3xl font-bold text-[#5053c4] mb-10">Como Funciona</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center max-w-[250px]">
            <img
              loading="lazy"
              src={step.src}
              alt={step.alt}
              className="h-20 mb-4 rounded-xl"
            />
            <p className="text-sm text-[#242c3e]">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
