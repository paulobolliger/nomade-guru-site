const testemunhos = [
  {
    texto: "Foi uma das viagens mais incríveis da minha vida. Cada detalhe foi pensado para transformar a experiência!",
    autor: "Cliente Satisfeito",
  },
  {
    texto: "A curadoria e a tecnologia se unem para criar roteiros únicos e personalizados. Recomendo a todos!",
    autor: "Viajante Feliz",
  },
];

export default function ProvasSociais() {
  return (
    <section className="provas-sociais py-16 px-4 bg-white text-center" id="provas-sociais">
      <h2 className="text-2xl md:text-3xl font-bold text-[#5053c4] mb-10">O que dizem nossos clientes</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {testemunhos.map((item, i) => (
          <div
            key={i}
            className="bg-[#f9f9f9] p-6 rounded-lg max-w-xs text-[#242c3e] text-sm shadow-sm"
          >
            <p className="mb-4">"{item.texto}"</p>
            <p className="font-bold">- {item.autor}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
