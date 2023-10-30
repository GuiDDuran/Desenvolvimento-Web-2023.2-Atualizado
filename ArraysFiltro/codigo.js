const body = document.body;

const pesquisa = document.createElement('div');
const texto_pesquisado = document.createElement('input');
const btn_pesquisar = document.createElement('button');

pesquisa.style.textAlign = 'center';

btn_pesquisar.innerHTML = "Pesquisar"
btn_pesquisar.onclick = () => {filtrar(texto_pesquisado.value)};

btn_pesquisar.onchange = () => {filtrar(texto_pesquisado.value)};

pesquisa.appendChild(texto_pesquisado);
pesquisa.appendChild(btn_pesquisar);
body.appendChild(pesquisa);


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

const constroi_atletas = (lista_atletas) => {
    div_container.innerHTML = "";
    for(const atleta of lista_atletas){
        cria_cartao(atleta);
    }
}

const filtrar = (entrada) => {
    const filtrado = atletas.filter(
        (elemento) => elemento.nome.toLowerCase().includes(entrada.toLowerCase())
    );
    constroi_atletas(filtrado);
}

constroi_atletas(atletas);

