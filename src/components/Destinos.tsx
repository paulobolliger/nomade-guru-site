const destinos = [
  {
    src: "https://res.cloudinary.com/dhqvjxgue/image/upload/v1744155476/laponia-papai-noel_ex4yss.png",
    alt: "Vila do Papai Noel na Lapônia",
    title: "Lapônia – Vila do Papai Noel",
  },
  {
    src: "https://res.cloudinary.com/dhqvjxgue/image/upload/v1744155473/gramado-natal-luz_mm3c3c.png",
    alt: "Natal Luz em Gramado",
    title: "Gramado – Natal Luz",
  },
  {
    src: "https://res.cloudinary.com/dhqvjxgue/image/upload/v1744155472/disney-magic-kingdom_bl1w3h.png",
    alt: "Magic Kingdom na Disney",
    title: "Disney – Magic Kingdom",
  },
  {
    src: "https://res.cloudinary.com/dhqvjxgue/image/upload/v1744155478/islandia-aurora-boreal_cllicl.png",
    alt: "Aurora Boreal na Islândia",
    title: "Islândia – Aurora Boreal",
  },
  {
    src: "https://res.cloudinary.com/dhqvjxgue/image/upload/v1744155476/kiruna-hotel-gelo_okecpd.png",
    alt: "Hotel de Gelo em Kiruna",
    title: "Kiruna – Hotel de Gelo",
  },
  {
    src: "https://res.cloudinary.com/dhqvjxgue/image/upload/v1744155478/tromso-expedicao-aurora_fvzzsk.png",
    alt: "Aurora em Tromsø",
    title: "Tromsø – Expedição Aurora",
  },
];

export default function Destinos() {
  return (
    <section className="destinos py-16 px-4 bg-[#333176] text-white text-center" id="destinos">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">Destinos em Destaque</h2>
      <div className="carousel flex overflow-x-auto gap-6 pb-4 px-2">
        {destinos.map((destino, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[200px] bg-[#2c2b3f] p-4 rounded-lg text-sm text-white text-left"
          >
            <img
              src={destino.src}
              alt={destino.alt}
              className="w-full rounded-xl mb-3"
              loading="lazy"
            />
            <p>{destino.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
