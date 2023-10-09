var primeira = 12; /* */
let segunda = "casa";
const terceira = ['casa', 'banana', 2];
let quarta;

console.log(++primeira + ": primeira"); /* o ++ na frente da variavel primeira incrementa 1 ao seu valor e o + seguinte junta a variavel com a string*/

//console.log(++segunda + ": segunda");
segunda += " amarela";
console.log(segunda + ": segunda");

console.log("terceira: " + terceira);
//terceira = 65;
//console.log("terceira: " + terceira)
console.log(terceira.length);
console.log(terceira[0]);
console.log(terceira.push('lego')); //retorna o tamanho do vetor
console.log(terceira);
console.log(terceira[3] = 'boneco'); //substitui o conteudo na posicao 3
console.log(terceira);
console.log(terceira[15] = 'maça'); //cria o conteudo na posicao 15 e os espaços anteriores sao criados vazios
console.log(terceira);

quarta = {primeira: 1, segunda: "tudo"};
console.log("quarta: " + quarta);
console.log("quarta.primeira: " + quarta.primeira);
quarta.terceira = "nada";
console.log("quarta.terceira: " + quarta.terceira);

function minha_funcao(entrada){
  return entrada + 2;
}

console.log(minha_funcao(6));
console.log(minha_funcao('1'))

const minha_outra_funcao = function (entrada){
    return entrada + 3;
}

console.log(minha_outra_funcao(6));
console.log(minha_outra_funcao('1'));

const setinha = (entrada) => {
    return entrada + 4
}
  
console.log(setinha(6));
console.log(setinha('1'));
  
const outra_setinha = (entrada) => entrada + 5;
  
console.log(outra_setinha(6));
console.log(outra_setinha('1'));