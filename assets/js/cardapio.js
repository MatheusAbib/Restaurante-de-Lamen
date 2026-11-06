
function inicializarCardapio() {
  const cardapio = document.querySelector("#cardapio");

  if (!cardapio || cardapio.dataset.inicializado === "true") {
    return;
  }

  const abas = Array.from(
    cardapio.querySelectorAll("[data-cardapio-tab]")
  );

  const paineis = Array.from(
    cardapio.querySelectorAll("[data-cardapio-painel]")
  );

  if (abas.length === 0 || paineis.length === 0) {
    return;
  }

  cardapio.dataset.inicializado = "true";

  function ativarAba(abaSelecionada) {
    const categoria = abaSelecionada.dataset.cardapioTab;

    const painelSelecionado = paineis.find(
      (painel) => painel.dataset.cardapioPainel === categoria
    );

    if (!painelSelecionado) {
      return;
    }

    abas.forEach((aba) => {
      const ativa = aba === abaSelecionada;

      aba.classList.toggle("cardapio__tab--ativa", ativa);
      aba.setAttribute("aria-selected", String(ativa));
      aba.tabIndex = ativa ? 0 : -1;
    });

    paineis.forEach((painel) => {
      const ativo = painel === painelSelecionado;

      painel.hidden = !ativo;
      painel.classList.toggle("cardapio__painel--ativo", ativo);
    });
  }

  abas.forEach((aba, indice) => {
    aba.addEventListener("click", () => {
      ativarAba(aba);
    });

    aba.addEventListener("keydown", (evento) => {
      let proximoIndice;

      switch (evento.key) {
        case "ArrowRight":
          proximoIndice = (indice + 1) % abas.length;
          break;

        case "ArrowLeft":
          proximoIndice = (indice - 1 + abas.length) % abas.length;
          break;

        case "Home":
          proximoIndice = 0;
          break;

        case "End":
          proximoIndice = abas.length - 1;
          break;

        default:
          return;
      }

      evento.preventDefault();

      const proximaAba = abas[proximoIndice];

      ativarAba(proximaAba);
      proximaAba.focus();
    });
  });

  const abaInicial =
    abas.find((aba) => aba.getAttribute("aria-selected") === "true") ||
    abas[0];

  ativarAba(abaInicial);
}

document.addEventListener("DOMContentLoaded", inicializarCardapio);

document.addEventListener("componentesCarregados", inicializarCardapio);

if (document.readyState !== "loading") {
  inicializarCardapio();
}
