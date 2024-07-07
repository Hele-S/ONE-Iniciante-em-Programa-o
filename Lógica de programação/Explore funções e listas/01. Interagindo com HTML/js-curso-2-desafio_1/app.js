// Desafio 2
let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio'

// Desafio 3
function consoleFunction() {
    console.log('O Botão foi clicado')
}

// Desafio 4
function alertFunction() {
    alert('Eu amo JS')
}

// Desafio 5
function promptFunction() {
    let cidade = prompt('Qual o nome de uma cidade do Brasil?')
    alert(`Estive em ${cidade} e lembrei de você`)
}

// Desafio 6
function sumFunction() {
    let n1 = parseFloat(prompt('Insira o nomero 1'))
    let n2 = parseFloat(prompt('Insira o nomero 2'))
    alert(`A soma de ${n1} e ${n2} é igual a ${n1 + n2}`)
}