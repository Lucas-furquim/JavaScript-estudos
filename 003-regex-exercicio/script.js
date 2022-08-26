const cpfs = document.querySelectorAll(".cpf li");
const regexLimpa = /[\.\-\s]/g;
const addPonto = /(\d{3})/g;
const formataTraco = /(\d+\.){3}/g;
const removePontoFinal = /\.\-/g;

const dados = [];
cpfs.forEach((dado) => {
  dados.push(dado.innerText);
});

const cpfArrumado = [];
dados.forEach((cpf) => {
  cpf = cpf.replace(regexLimpa, "");
  cpf = cpf.replace(addPonto, "$&.");
  cpf = cpf.replace(formataTraco, "$&-");
  cpf = cpf.replace(removePontoFinal, "-");
  cpfArrumado.push(cpf);
});

cpfs.forEach((cpf) => {
  let arruma = (cpf.innerText = cpfArrumado.shift());
  console.log(arruma);
});
