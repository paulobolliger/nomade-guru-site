const items = [
  {
    src: "https://res.cloudinary.com/dhqvjxgue/image/upload/v1744155474/icone-tecnologia_2_qnuxdh.png",
    alt: "Tecnologia com propósito",
    label: "Tecnologia com propósito",
  },
  {
    src: "https://res.cloudinary.com/dhqvjxgue/image/upload/v1744155472/icone-curadoria_2_nttjeq.png",
    alt: "Curadoria humana especializada",
    label: "Curadoria humana especializada",
  },
  {
    src: "https://res.cloudinary.com/dhqvjxgue/image/upload/v1744155474/icone-roteiros_pdyi68.png",
    alt: "Roteiros autênticos e exclusivos",
    label: "Roteiros autênticos e exclusivos",
  },
];

export default function Diferenciais() {
  return (
    <section className="diferenciais py-16 px-4 bg-white text-center" id="diferenciais">
      <h2 className="text-2xl md:text-3xl font-bold text-[#5053c4] mb-10">Diferenciais</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center max-w-[200px]">
            <img
              loading="lazy"
              src={item.src}
              alt={item.alt}
              className="h-20 mb-4 rounded-xl"
            />
            <p className="text-sm text-[#242c3e]">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
