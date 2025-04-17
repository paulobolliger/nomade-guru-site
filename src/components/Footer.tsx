export default function Footer() {
  return (
    <footer className="bg-[#232452] text-white p-8 text-sm">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <p className="font-bold mb-2">Sede</p>
          <p>
            Rua Comendador Torlogo Dauntre, 74 – Sala 1207<br />
            Cambuí – Campinas – SP - Brasil – CEP 13025-270
          </p>
          <p className="mt-4">
            A Nomade Guru está presente no Brasil e em diversos destinos globais,
            conectando nômades digitais a experiências de viagem transformadoras.
          </p>
          <p className="text-xs mt-4">
            NOMADE GURU TAC LTDA - CNPJ 11.111.227/0001-20
            <br />© 2009–2025 Nomade Guru TAC Ltda. Todos os direitos reservados.
          </p>
        </div>
        <div>
          <p className="font-bold mb-2">Canais Oficiais</p>
          <div className="flex flex-col gap-2">
            <a href="https://www.instagram.com/nomade.guru/" target="_blank">Instagram</a>
            <a href="https://www.facebook.com/nomadeguru" target="_blank">Facebook</a>
            <a href="https://www.youtube.com/@NomadeGuru" target="_blank">YouTube</a>
            <a href="https://wa.me/5511947745710" target="_blank">WhatsApp</a>
            <a href="https://open.spotify.com/playlist/1NaWkXArYokfc7LNTa8zXD" target="_blank">Spotify</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
