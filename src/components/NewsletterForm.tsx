export default function NewsletterForm() {
  return (
    <section id="contato" className="py-16 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#5053c4]">Cadastre-se em Nossa Newsletter</h2>
      <div className="max-w-xl mx-auto">
        <form
          action="https://guru.us20.list-manage.com/subscribe/post?u=7318d15754cc569b753c1eeaf&amp;id=b069757273&amp;f_id=00f1c2e1f0"
          method="post"
          target="_blank"
          className="space-y-4"
        >
          <input
            type="email"
            name="EMAIL"
            required
            placeholder="Seu melhor e-mail"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="submit"
            value="Inscreva-se"
            className="bg-[#5053c4] text-white font-bold px-6 py-3 rounded-full cursor-pointer hover:bg-[#342ca4]"
          />
        </form>
      </div>
    </section>
  );
}
