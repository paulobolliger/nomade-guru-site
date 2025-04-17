export default function HeroSection() {
  return (
    <section
      className="hero h-screen bg-cover bg-center text-white flex items-center justify-center text-center"
      style={{ backgroundImage: `url('https://res.cloudinary.com/dhqvjxgue/image/upload/v1744155476/imagem-impactante_1_nv98cg.png')` }}
    >
      <div className="z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Viaje com propósito, viva com liberdade
        </h1>
        <p className="max-w-xl mx-auto text-lg mb-6">
          Crie seu roteiro personalizado e descubra novas fronteiras com nossa tecnologia de IA e curadoria humana.
        </p>
        <button
          className="btn bg-white text-[#5053c4] font-bold px-6 py-3 rounded-full"
          onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Crie seu roteiro personalizado
        </button>
      </div>
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
    </section>
  );
}
