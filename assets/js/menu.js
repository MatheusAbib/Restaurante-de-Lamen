const menuBotao = document.querySelector(".menu-mobile");
const navegacao = document.querySelector(".navegacao");
const linksNav = document.querySelectorAll(".navegacao__link");

const fecharMenu = () => {
  menuBotao.setAttribute("aria-expanded", "false");
  navegacao.classList.remove("navegacao--aberta");
};

menuBotao.addEventListener("click", () => {
  const aberto = menuBotao.getAttribute("aria-expanded") === "true";
  menuBotao.setAttribute("aria-expanded", String(!aberto));
  navegacao.classList.toggle("navegacao--aberta", !aberto);
});

linksNav.forEach((link) => link.addEventListener("click", fecharMenu));

const secoes = document.querySelectorAll("section[id]");
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
  { rootMargin: "-45% 0px -45% 0px" }
);

secoes.forEach((secao) => observarSecao.observe(secao));