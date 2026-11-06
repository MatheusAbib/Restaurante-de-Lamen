
const menuBotao = document.querySelector(".menu-mobile");
const navegacoes = document.querySelectorAll(".cabecalho .navegacao");
const linksNav = document.querySelectorAll(".cabecalho .navegacao__link");

const fecharMenu = () => {
  if (!menuBotao) return;

  menuBotao.setAttribute("aria-expanded", "false");
  menuBotao.setAttribute("aria-label", "Abrir menu");

  navegacoes.forEach((navegacao) => {
    navegacao.classList.remove("navegacao--aberta");
  });

  document.body.classList.remove("menu-aberto");
};

if (menuBotao) {
  menuBotao.addEventListener("click", () => {
    const aberto = menuBotao.getAttribute("aria-expanded") === "true";
    const proximoEstado = !aberto;

    menuBotao.setAttribute("aria-expanded", String(proximoEstado));
    menuBotao.setAttribute("aria-label", proximoEstado ? "Fechar menu" : "Abrir menu");

    navegacoes.forEach((navegacao) => {
      navegacao.classList.toggle("navegacao--aberta", proximoEstado);
    });

    document.body.classList.toggle("menu-aberto", proximoEstado);
  });
}

linksNav.forEach((link) => {
  link.addEventListener("click", fecharMenu);
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") fecharMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 960) fecharMenu();
});

function iniciarObservacaoSecoes() {
  const secoes = document.querySelectorAll("section[id]");

  if (!("IntersectionObserver" in window)) return;

  const observarSecao = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;

        const id = entrada.target.id;

        linksNav.forEach((link) => {
          const ativo = link.getAttribute("href") === `#${id}`;
          link.classList.toggle("navegacao__link--ativo", ativo);
        });
      });
    },
    {
      rootMargin: "-45% 0px -45% 0px"
    }
  );

  secoes.forEach((secao) => observarSecao.observe(secao));
}

document.addEventListener("componentesCarregados", iniciarObservacaoSecoes);
