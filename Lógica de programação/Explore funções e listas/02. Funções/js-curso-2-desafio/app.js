function olaMundo() {
    console.log("Olá, mundo!")
}
function saudação(nome){
    console.log("Olá, "+ nome+"!")
}
function double(nmbr){
alert(nmbr * 2)
}
function avarage(a,b,c){
    alert((a + b + c)/3)
}
function bigger(a,b){
    if (parseFloat(a)>parseFloat(b)) {
        return a
    } else { return b }
}
function squareRoot(a){
    return a * a
}
switch (parseInt(prompt('Insira o número do desafio'))) {
    case 1:
        olaMundo()
    break;
    case 2:
        let nome = prompt('Insira um nome')
        saudação(nome)
    break;
    case 3:
        double(prompt('Valor para ser dobrado'))
    break;
    case 4:
        avarage(parseFloat(prompt('Insira o valor 1')),parseFloat(prompt('Insira o valor 2')),parseFloat(prompt('Insira o valor 3')))
    break;
    case 5:
        alert(bigger(prompt('Primeiro valor'), prompt('Segundo valor')))
    break
    case 6:
        alert(squareRoot(prompt('Insira o valor')))
    break;
}   
