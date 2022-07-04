const formulario = document.forms.constrols;
const btn = document.querySelector(".btn");
const estilizar = document.querySelector(".estilizar");
const code = document.querySelector(".css");
let botao = {};

estilizar.addEventListener("click", (e) => {
  e.preventDefault();
  btn.innerText = botao.texto;
  for (let x = 0; x <= 8; x++) {
    if (x > 0) {
      if (!isNaN(formulario[x].value)) {
        btn.style.formulario[x].name = formulario[x].value + "px";
      } else {
        console.log((btn.style.formulario[x].name = formulario[x].value));
        btn.style.formulario[x].name = formulario[x].value;
      }
    }
    let span = document.createElement("span");
    span.innerText = formulario[x].name + ": " + formulario[x].value;
    code.appendChild(span);
  }
});

function criar(e) {
  botao[e.target.name] = e.target.value;
}

formulario.addEventListener("change", criar);
