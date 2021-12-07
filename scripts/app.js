
let jogador = "X";
let quantidadeJogadas = 0;
let jogoFinalizado = false;

function jogar(button) {
    if(jogoFinalizado) {
        return;
    }

    button.innerHTML = jogador;
    jogoFinalizado = validarJogo();

    setTimeout(() =>{
        quantidadeJogadas++;
    
        if(jogoFinalizado) {
            window.alert(jogador + " Venceu!");
        }
        else if(quantidadeJogadas === 9) {
            window.alert("Jogo empatou!");
        }
    
        jogador = jogador === "X" ? "O" : "X";

    }, 0);
}


function validarJogo() {
    const botoes = document.querySelectorAll("div.tabuleiro button.botao");

    const validacao = botoes[0].innerHTML !== "&nbsp;" && botoes[0].innerHTML === botoes[1].innerHTML && botoes[0].innerHTML === botoes[2].innerHTML ||
        botoes[3].innerHTML !== "&nbsp;" && botoes[3].innerHTML === botoes[4].innerHTML && botoes[3].innerHTML === botoes[5].innerHTML ||
        botoes[6].innerHTML !== "&nbsp;" && botoes[6].innerHTML === botoes[7].innerHTML && botoes[6].innerHTML === botoes[8].innerHTML ||
        botoes[0].innerHTML !== "&nbsp;" && botoes[0].innerHTML === botoes[3].innerHTML && botoes[0].innerHTML === botoes[6].innerHTML ||
        botoes[1].innerHTML !== "&nbsp;" && botoes[1].innerHTML === botoes[4].innerHTML && botoes[1].innerHTML === botoes[7].innerHTML ||
        botoes[2].innerHTML !== "&nbsp;" && botoes[2].innerHTML === botoes[5].innerHTML && botoes[2].innerHTML === botoes[8].innerHTML ||
        botoes[0].innerHTML !== "&nbsp;" && botoes[0].innerHTML === botoes[4].innerHTML && botoes[0].innerHTML === botoes[8].innerHTML ||
        botoes[2].innerHTML !== "&nbsp;" && botoes[2].innerHTML === botoes[4].innerHTML && botoes[2].innerHTML === botoes[6].innerHTML;

    return validacao;
}

function resetar() {
    const botoes = document.querySelectorAll("div.tabuleiro button.botao");
    botoes.forEach((botao, index) => {
        if(index < 9) {
            botao.innerHTML = "&nbsp;";
        }
    });
    jogador = "X";
    quantidadeJogadas = 0;
    jogoFinalizado = false;
}