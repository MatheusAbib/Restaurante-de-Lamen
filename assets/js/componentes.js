const componentes = ["capa","casa","cardapio","eventos","galeria","depoimentos","mestres","reservas","contato","rodape"];
async function carregarComponentes() {
  for (const nome of componentes) {
    const el = document.getElementById(nome);
    if (el) {
      try {
        const res = await fetch(`componentes/${nome}.html`);
        el.innerHTML = await res.text();
      } catch (e) { console.error(`Erro: ${nome}`, e); }
    }
  }
  document.dispatchEvent(new Event("componentesCarregados"));
}
document.addEventListener("DOMContentLoaded", carregarComponentes);
