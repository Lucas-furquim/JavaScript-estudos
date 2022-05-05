// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma e remova a classe ativo caso o usuario clique de novo sobre o mesmo. Previna
// o comportamento padrão desses links

const links = Array.from(document.querySelectorAll('a[href^="#"]'));

links.forEach((item) => {
  item.addEventListener("click", adiciona);
});

function adiciona(e) {
  e.preventDefault();
  tira();
  this.classList.toggle("ativo");
}

function tira() {
  links.forEach((item) => {
    item.classList.remove("ativo");
  });
}
