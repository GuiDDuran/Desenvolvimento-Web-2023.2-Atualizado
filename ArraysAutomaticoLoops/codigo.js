const body = document.body;
const div_container = document.createElement('div');
div_container.id = 'container';
body.appendChild(div_container);

const cria_cartao = (atleta) => {

    const container_atleta = document.createElement('div');
    container_atleta.style.width = '20rem';
    container_atleta.style.backgroundColor = '#ccc';
    container_atleta.style.textAlign = 'center';
    container_atleta.style.margin = 'auto';
    const titulo = document.createElement('h3');
    titulo.innerHTML = atleta.nome;
    const imagem = document.createElement('img');
    imagem.src = atleta.imagem;
    imagem.alt = `foto de ${atleta.nome}`;
    const descricao = document.createElement('p');
    descricao.innerHTML = atleta.descricao;

    container_atleta.appendChild(titulo);
    container_atleta.appendChild(imagem);
    container_atleta.appendChild(descricao);

    div_container.appendChild(container_atleta);
}

/* Estrutura de repetição com o forEach
atletas.forEach((atleta) => {cria_cartao(atleta)});
*/

/* Estrutura de repetição com o While
let i = 0;

while (i < atletas.length){
    cria_cartao(atletas[i]);
    console.log(i);
    i++;
}
*/


for(let i = 0; i < atletas.length; i++){
    cria_cartao(atletas[i]);
    console.log('loop for', i);
}


/* Estrutura de repetição com o While, do maior índice para o menor
for(let i = atletas.length - 1; i >= 0; i--){
    cria_cartao(atletas[i]);
    console.log('loop for', i);
}
*/

/* Estrutura de repetição com o For para percorrerer elementos de um objeto
for (const propriedade in atletas[0]){
    console.log(propriedade, atletas[0][propriedade])
}
*/

/* Estrutura de repetição com o For of para percorrerer elementos de um objeto
for(const atleta of atletas){
    cria_cartao(atleta);
    console.log('loop for', atletas.id);
}
*/
