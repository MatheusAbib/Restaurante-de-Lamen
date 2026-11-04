function iniciarRotacao() {
  const prato = document.querySelector('.capa__prato-central img');
  if (!prato) {
    console.warn('Prato central não encontrado.');
    return;
  }

  window.addEventListener('scroll', () => {
    const rotacao = window.scrollY * 0.2;
    prato.style.transform = `rotate(${rotacao}deg)`;
  });

  console.log('Rotação ativada.');
}

document.addEventListener("DOMContentLoaded", iniciarRotacao);
document.addEventListener("componentesCarregados", iniciarRotacao);
