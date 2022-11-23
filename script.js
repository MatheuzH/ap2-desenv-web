let conteiner = document.querySelector(".conteiner")

function Mostrar_cards(){
    for (let i = 0; i <= lista_jogadores.length; i++){

        conteiner.innerHTML += `
            <div class="cards">
                <img src="${lista_jogadores[i]["imagem"]}">
                <h2>${lista_jogadores[i]["nome"]}</h2>
                <p>${lista_jogadores[i]["posicao"]}</p>
                <button class="button" onclick='Cookie(${JSON.stringify(lista_jogadores[i])})'>
                    Sobre
                </button>
            </div>
        `;
    }

}

function pesquisar(){
    const pesquisa = document.getElementById("espaco_pesquisa").value.toLowerCase()
    const card_jogador = document.getElementsByClassName("cards")

    for (let i = 0; i < card_jogador.length; i++){
        let nome_jogador = card_jogador[i].querySelector(".cards h2")
    

    if(nome_jogador.innerText.toLowerCase().indexOf(pesquisa) > -1){
        card_jogador[i].style.display = ""
    } else{
        card_jogador[i].style.display = "none"
    }

    }

}



function Cookie(jogador){
    document.cookie = jogador["imagem"] + "$";
    document.cookie += jogador["nome_completo"] + "$";
    document.cookie += jogador["posicao"] + "$";
    document.cookie += jogador["nome"] + "$";
    document.cookie += jogador["descricao"] + "$";
    document.cookie += jogador["nascimento"] + "$";
    document.cookie += jogador["altura_peso"] + "$";

    window.location.href = './Cards/cards.html'

    document.cookie = ""
}

window.onload = () => {
    Mostrar_cards()
}
