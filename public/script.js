
document.getElementById('form-ideias').addEventListener('submit', async function(e) {
  e.preventDefault();

  const texto = document.querySelector('textarea').value.trim();
  const box = document.querySelector('.roteiro-box');
  const preview = document.getElementById('preview');
  preview.classList.remove('hidden');
  box.innerHTML = '<p><em>Gerando sugestão de roteiro com IA...</em></p>';

  try {
    const response = await fetch('/api/roteiro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mensagem: texto })
    });

    const data = await response.json();

    if (response.ok) {
      box.innerHTML = `<p><strong>Prévia gerada pela IA:</strong></p><p>${data.roteiro}</p>`;
    } else {
      box.innerHTML = `<p><strong>Erro:</strong> ${data.message}</p>`;
    }

  } catch (err) {
    box.innerHTML = '<p><strong>Erro:</strong> Não foi possível se conectar ao servidor.</p>';
  }
});
