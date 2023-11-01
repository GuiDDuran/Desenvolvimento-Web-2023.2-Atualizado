const url = "https://botafogo-atletas.mange.li";

const numero_jogador = 36

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

    document.body.appendChild(container_atleta);
}

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

pega_json(url).then( (r) => console.log(r));

pega_json(`${url}/${numero_jogador}`).then( (r) => cria_cartao(r));

console.log('síncrono');

