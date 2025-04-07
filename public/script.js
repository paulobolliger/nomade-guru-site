
document.getElementById('form-ideias').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('preview').classList.remove('hidden');
  document.querySelector('.roteiro-box').innerHTML = `
    <p><strong>Prévia gerada pela IA:</strong></p>
    <p>“7 dias pela Islândia com paisagens surreais, termas naturais e um toque de aventura sob a aurora boreal.”</p>
  `;
});
