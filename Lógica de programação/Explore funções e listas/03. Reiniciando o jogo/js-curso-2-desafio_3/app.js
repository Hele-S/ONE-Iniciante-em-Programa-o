switch (parseInt(prompt('Insira o número o desafio'))) {
    case 1:
        function IMC() {
            let w = parseFloat(prompt('Qual seu peso em kG?'))
            let h = parseFloat(prompt('Qual a sua altura em metros?'))

            let imc = (w / (h * h)).toFixed(2)
            return imc
        }
        alert(IMC())
        break;
    case 2:
        let sum
        function Fatorial(nmbr) {
            for (i = nmbr; i > 0; i--) {
                sum = sum == undefined ? i : sum * i
            }
            return sum
        }
        alert(Fatorial(parseFloat(prompt('insira um número'))))
        break;
    case 3:
        let real
        function toReal(dolar) {
            real = dolar * 4.8
            return real
        }
        alert(toReal(parseFloat(prompt('Insira um valor em dólar'))))
        break;
    case 4:
        function areaPerimetro(h, w) {
            let area = h * w
            let perimetro = (h * 2 + w * 2)
            let resultado = `Área do retângulo: ${area}m² \nPerímetro do retângulo: ${perimetro}m`
            return resultado
        }
        let altura = parseFloat(prompt('Insira a altura'))
        let largura = parseFloat(prompt('Insira a largura'))
        alert(areaPerimetro(altura, largura))
        break;
    case 5:
        function circunfer(r) {
            let C = 2 * 3.14 * r
            let A = 3.14 * r * r
            let solução = `Área da circunferência: ${A}m² \nPerímetro da circunferência: ${C}m`
            return solução
        }
        alert(circunfer(parseFloat(prompt('Insira o raio da circunferência'))))
        break;
    case 6:
        function table(n) {
            let tabuada = {
                1: 1 * n,
                2: 2 * n,
                3: 3 * n,
                4: 4 * n,
                5: 5 * n,
                6: 6 * n,
                7: 7 * n,
                8: 8 * n,
                9: 9 * n,
                10: 10 * n
            }
            let resultado = 'Resultado:\n'
            for (i in tabuada) {
                resultado += `${n} x ${i} = ${tabuada[i]}\n`
            }
            return resultado
        }
        alert(table(parseFloat(prompt('Insira um número para a tabuada'))))
        break;
}