function iniciarRevelar() {
  const elementos = document.querySelectorAll(".revelar");
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver((entradas, o) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("revelar--visivel");
          o.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    elementos.forEach((el) => obs.observe(el));
  } else {
    elementos.forEach((el) => el.classList.add("revelar--visivel"));
  }
}
document.addEventListener("DOMContentLoaded", iniciarRevelar);
document.addEventListener("componentesCarregados", iniciarRevelar);
