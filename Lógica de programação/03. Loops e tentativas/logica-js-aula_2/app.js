alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute
let tentativas = 1
do {
    chute = prompt('Escolha um número entre 1 e 10');
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else if (numeroSecreto > chute) {
        alert(`${chute} é menor do que o numero secreto`)
    } else if (numeroSecreto < chute) {
        alert(`${chute} é maior do que o número secreto`)
    }
    if (numeroSecreto != chute) {
        tentativas++
    }
} while (numeroSecreto != chute)