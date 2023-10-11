const ingrid = atletas [0];

const container = document.getElementById('container');
const espaco_nome = document.getElementById('nome');
const imagem = document.querySelector('div#container > img');
const espaco_descricao = document.querySelector('div#container > p');

const preenche = (atleta) => {

    espaco_nome.innerText = atleta.nome;
    imagem.src = atleta.imagem
    espaco_descricao.innerText = atleta.descricao

    container.style.width = '15rem';
    container.style.color = 'white';
    container.style.backgroundColor = 'black';

}

preenche(atletas[5]);