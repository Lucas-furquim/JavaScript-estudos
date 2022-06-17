export default function toltip() {
  const toltip = document.querySelectorAll("[data-toltip]");

  toltip.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      criaTooltip(e.currentTarget);
    });
  });

  toltip.forEach((item) => {
    item.addEventListener("mouseleave", (e) => {
      const tooltip = document.querySelector(".tooltip");
      document.body.removeChild(tooltip);
    });
  });

  function criaTooltip(element) {
    const criaDiv = document.createElement("div");
    const texto = element.getAttribute("aria-label");
    criaDiv.classList.add("tooltip");
    criaDiv.innerText = texto;
    document.body.appendChild(criaDiv);
    movimento(criaDiv);
    return criaDiv;
  }

  function movimento(criaDiv) {
    window.addEventListener("mousemove", (e) => {
      criaDiv.style.top = e.pageY + 15 + "px";
      criaDiv.style.left = e.pageX + 15 + "px";
    });
  }
}
