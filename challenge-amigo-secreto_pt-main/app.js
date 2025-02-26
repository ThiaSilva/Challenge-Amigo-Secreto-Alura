let nomes = []; // Array que irá armazenar os nomes dos amigos

const adicionarAmigo = () => {
    // Seleciona o input que será recebido e exlui os espaços.
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    // Validação se o input é vazio ou já foi adicionado.
    if (nome !== "" && !amigos.includes(nome)){
        atualizarLista(nome); // Função que irá atualizar a lista de amigos
        input.value = " "; // Limpa o campo de input
    } else {
        alert("Nome já esta na lista de amigos!")
    }
}

const atualizarLista = () => {
    // Seleciona a <ul> do HTML aonde irá os nomes dos amigos
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = " "; //Limpa a lista antes de recria-lá

    //Cria e adiciona novos itens ao <li>
    amigos.forEach(amigo => {
        const li = document.createElement('li');//Cria um novo elemento <li>
        li.textContent = amigo; // Define o texto do <li> como nome do amigo.
        lista.appendChild(li); //Irá adicionar o <li> dentro da lista <ul>
    });
}

const embaralhar = (array) => {
    // função embaralhar irá utilizar o algotimo Fisher-Yates para embalhar os nomes na lista antes de efetura o sorteio.
    for (let i = array.length - 1; i < 0; i--){
        const j = Math.floor(Math.random() * (i + 1)); // Percore o array de tras para frente e seleciona um indice aleatorio entre 0 e i
        [array[i], array[j]] = [array[j], array[i]]; // embaralha os elementos do array 
    }
}

const sortearAmigo = (amigos) => {
    // Fara a validação se na lista de amigos existe uma quantidade suficiente de amigos > 2 
    if (amigos.length <= 2){
        alert("Numero insulficiente de participantes");
        return;
    }
    // O Math.Random irá gerer um numero aleatorio entre 0 e 1, multiplicará pelo tamanho da lista de amigos e arredondará Math.floor que será o indice do amigo no array
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

}

const exibirSorteado = (amigo) => {
    // Ira selecionar o amigo sorteado e exibira na tela 
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = " "; // Limpa do sorteio anterior resultado anteriar 

    const li = document.createElement('li');
    li.textContent = `🎉 Sorteado: ${amigo}`;
    resultadoLista.appendChild(li);
}
