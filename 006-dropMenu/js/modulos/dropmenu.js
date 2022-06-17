export default function dropMenu() {
  //   const dropmenu = document.querySelector("#dropmenu");
  //   window.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     const drop = e.target.dataset.dropmenu;
  //     if (drop === "drop") {
  //       dropmenu.classList.toggle("ativo");
  //     } else {
  //       dropmenu.classList.remove("ativo");
  //     }
  //   });

  const dropdownMenu = document.querySelectorAll("[data-dropmenu]");
  const ativadrop = document.querySelector("#dropmenu");

  dropdownMenu.forEach((menu) => {
    ["touchstart", "click"].forEach((eventos) => {
      menu.addEventListener(eventos, handleClick);
    });
  });

  function handleClick(e) {
    e.preventDefault();
    ativadrop.classList.toggle("ativo");
    cliqueFora();
  }

  function cliqueFora() {
    const html = document.documentElement;
    html.addEventListener("click", clicaTela);
    function clicaTela(e) {
      console.log("html");
    }
  }
}
