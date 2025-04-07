
document.getElementById('form-ideias').addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('Formulário enviado');
  
  const texto = document.querySelector('textarea').value.trim();
  const box = document.querySelector('.roteiro-box');
  const preview = document.getElementById('preview');
  preview.classList.remove('hidden');
  box.innerHTML = '<p><em>Gerando sugestão de roteiro com IA...</em></p>';

  // Teste básico para verificar se o fetch está funcionando
  console.log('Texto recebido: ', texto);
});
