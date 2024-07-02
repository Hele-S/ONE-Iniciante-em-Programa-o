let desafio
do {
    desafio = parseInt(prompt('Número do desafio'))
    switch (desafio) {
        case 1:
            let dia = prompt('Qual é o dia da semana?')
            if (dia === "Sábado" || dia === "Domingo") {
                alert('Bom fim de semana!')
            } else {
                alert('Boa semana!')
            }
            break
        case 2:
            let valor = parseFloat(prompt('bota um número ai'))
            if (valor < 0) {
                alert('O valor é negativo')
            } else if (valor > 0) {
                alert('O valor é positivo')
            } else {
                alert('Botou 0 né safado?')
            }
            break
        case 3:
            let pontos = prompt('Qual foi a sua pontuação')
            if (pontos >= 100) {
                alert('Parabéns, você venceu!')
            } else {
                alert('Tente novamente para ganhar')
            }
            break
        case 4:
            let saldo = (Math.random() * 1000 + 1000).toFixed(2)
            alert(`O saldo atual é de: R$${saldo.replace(".", ",")}`)
            break
        case 5:
            let nome = prompt('Qual é seu nome?')
            alert(`Bem vindo, ${nome}!`)
            break
    }
} while (desafio % 1 == 0 || desafio == undefined)