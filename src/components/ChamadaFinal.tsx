export default function ChamadaFinal() {
  return (
    <section className="chamada-final py-16 px-4 bg-[#5053c4] text-white text-center" id="chamada-final">
      <h2 className="text-3xl font-bold mb-6">A sua próxima grande jornada começa aqui</h2>
      <button
        className="btn bg-white text-[#5053c4] font-bold px-6 py-3 rounded-full hover:bg-gray-100"
        onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Criar meu roteiro agora
      </button>
    </section>
  );
}
