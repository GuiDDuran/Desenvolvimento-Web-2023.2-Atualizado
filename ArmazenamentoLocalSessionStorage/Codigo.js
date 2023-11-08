const url = "https://botafogo-atletas.mange.li";

const numero_jogador = 36

const body = document.body;
body.style.display = 'flex';
body.style.gap = '.5em';
body.style.flexWrap = 'wrap';

const cria_cartao = (atleta) => {

    const container_atleta = document.createElement('article');
    container_atleta.style.width = '20rem';
    container_atleta.style.backgroundColor = '#ccc';
    container_atleta.style.textAlign = 'center';
    container_atleta.style.margin = 'auto';

    container_atleta.dataset.id = atleta.id;
    container_atleta.dataset.altura = atleta.altura;
    container_atleta.dataset.nome_completo = atleta.nome_completo;
    container_atleta.dataset.nascimento = atleta.nascimento;

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

    container_atleta.onclick = manipulaClick;

    document.body.appendChild(container_atleta);
}

const manipulaClick = (e) => {
    const artigo = e.target.closest('article');
    document.cookie = `id = ${artigo.dataset.id}`;
    document.cookie = `altura = ${artigo.dataset.altura}`;
    document.cookie = `nome_completo = ${artigo.dataset.nome_completo}`;
    document.cookie = `nascimento = ${artigo.dataset.nascimento}`;

    localStorage.setItem('id', artigo.dataset.id);
    localStorage.setItem('altura', artigo.dataset.altura);
    localStorage.setItem('nome_completo', artigo.dataset.nome_completo);
    localStorage.setItem('nascimento', artigo.dataset.nascimento);

    sessionStorage.setItem('id', artigo.dataset.id);
    sessionStorage.setItem('altura', artigo.dataset.altura);
    sessionStorage.setItem('nome_completo', artigo.dataset.nome_completo);
    sessionStorage.setItem('nascimento', artigo.dataset.nascimento);
    sessionStorage.setItem('dados', JSON.stringify(artigo.dataset));


    console.log(acha_cookie('id'));
    console.log(localStorage.getItem('nome_completo'));
    console.log(JSON.parse(sessionStorage.getItem('dados')));

    window.location = `Outra.html?id=${artigo.dataset.id}&nome_completo=${artigo.dataset.nome_completo}`

}

const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split("; ")
    const procurado = lista_de_cookies.find(
        (e) => e.startsWith(chave));
    return procurado.split('=')[1];
}

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

pega_json(url).then( (r) => console.log(r));

pega_json(`${url}/all`).then( (r) => {
    for (atleta of r){
        cria_cartao(atleta)}});

console.log('síncrono');

