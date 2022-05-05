// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]');
const lista = [];
lista.push(links);

// lista.forEach((item) => {
//   if (links.classList.contains("ativo")) {
//   }
// });

// function adiciona(e) {
//   e.preventDefault();
//   const tem = e.currentTarget.classList;
//   return tem.toggle("ativo");
// }

// links.forEach(function (item) {
//   // console.log(clases);
// });
