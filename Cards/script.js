window.onload = () => {
    exebir_jogadores()

}

function exebir_jogadores(){
    let card = document.querySelector(".CardsInternos")
    let jogador = document.cookie.split('$')

    console.log(jogador)

    card.innerHTML += `
        <img src='${jogador[0]}'>
        <h1 class="letras_cards">${jogador[1]}</h1>
        <h1 class="letras_cards">${jogador[5]}</h1>
        <h1 class="letras_cards">${jogador[6]}</h1>

        <button class="botao" onclick='voltar()'>voltar</button>
    `;
}

function voltar(){
    document.cookie = ''

    window.location.href = '../../ap2-desenv-web/';

}

