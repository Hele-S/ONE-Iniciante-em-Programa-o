alert('Boas vindas ao nosso site!')
const numeroSecreto = Math.floor(Math.random()*5+1)
if (prompt('manda ai') == numeroSecreto) {
    console.log('acerto miseravi')
} else {
    console.log(`Se é burro é? O número era ${numeroSecreto}`)
}