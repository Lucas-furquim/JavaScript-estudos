export default function substituiJs() {
  const classes = Array.from(document.querySelectorAll("[class*='js']"));

  classes.map((item) => {
    const elementos = item;
    const lista = Array.from(item.classList);
    lista.map((item) => {
      if (item.includes("js-")) {
        elementos.setAttribute("data-atributes", item);
        elementos.classList.remove(item);
      }
    });
  });
}
