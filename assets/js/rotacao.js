
function iniciarRotacao() {
  const pratoEsquerda = document.querySelector('.capa__prato--esquerda');
  const pratoDireita = document.querySelector('.capa__prato--direita');
  const pratoInferior = document.querySelector('.capa__prato--inferior');

  if (!pratoEsquerda || !pratoDireita || !pratoInferior) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let executando = false;

  function atualizarRotacao() {
    const scroll = window.scrollY;

    pratoEsquerda.style.transform = `rotate(${scroll * 0.2}deg)`;
    pratoDireita.style.transform = `rotate(${-scroll * 0.25}deg)`;
    pratoInferior.style.transform = `rotate(${scroll * 0.15}deg)`;

    executando = false;
  }

  function aoRolar() {
    if (executando) return;

    executando = true;
    requestAnimationFrame(atualizarRotacao);
  }

  window.addEventListener('scroll', aoRolar, { passive: true });

  atualizarRotacao();
}

document.addEventListener('componentesCarregados', iniciarRotacao);
