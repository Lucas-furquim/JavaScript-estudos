// Retorne a soma da largura de todas as imagens

const imagens = document.querySelectorAll("img");

imagens.forEach((item) => {
  const largura = item.getBoundingClientRect(innerWidth);
  console.log(largura);
});
