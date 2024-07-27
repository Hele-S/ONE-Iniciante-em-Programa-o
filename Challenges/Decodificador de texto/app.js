// Aumentar tamanho do input
document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('textarea');
    document.getElementById('textarea_output').style.display = 'none';
    textarea.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

})
//Encriptando a mensagem
function encrypt() {
    const input = document.getElementById('textarea').value
    let package = ''
    for (i of input) {
        if (i == 'a') {
            package += 'ai'
        } else if (i == 'e') {
            package += 'enter'
        } else if (i == 'i') {
            package += 'imes'
        } else if (i == 'o') {
            package += 'ober'
        } else if (i == 'u') {
            package += 'ufat'
        }
        else {
            package += i
        }
    }
    document.getElementById('textarea_output').value = package
    document.getElementById('textarea').value = ''
    if (document.getElementById('textarea_output').value != '') {
        document.getElementById('copy').style.display = 'block'
        document.getElementById('textarea_output').style.display = 'block';
        document.getElementById('outputPlaceholder').style.display = 'none'
    } else {
        document.getElementById('copy').style.display = 'none'
        document.getElementById('outputPlaceholder').style.display = 'block'
    }
}
//Resolvendo a mensagem
function decrypt() {
    const code = document.getElementById('textarea').value
    let product = ''
    let check = false
    let target = undefined
    let start = undefined
    let end = 0
    const toObject = function (code) {
        let result = Object()
        let lenght = 0
        for (i of code) {
            result[lenght] = i
            lenght++
        }
        return result
    }
    //Códigos e seus respectivos resultados
    let passwords = {
        a: 'ai',
        e: 'enter',
        i: 'imes',
        o: 'ober',
        u: 'ufat'
    }
    //Array com os diferentes comprimentos obsverváveis das senha em passwords, cada valor aparece 1 vez
    let lengths = passwords => {
        target = 0
        let arr = Array()
        for (i in passwords) {
            for (k of passwords[i]) {
                target++
            }
            for (k of arr) {
                if (target == k) {
                    check = true
                }
            }
            if (!check) {
                arr.push(target)
            }
            check = false
            target = 0
        }
        console.log(arr)
        return arr
    }
    //Escaneando o código e encontrando as senhas
    const ArrayLengths = lengths(passwords)
    for (start = 0; start <= code.length; start++) {
        check = false
        for (i of ArrayLengths) {
            end = (i + start)
            for (k in passwords) {
                if (code.slice(start, end) == passwords[k]) {
                    product += k
                    check = true
                    start = end - 1
                    break;
                }
            }
            if (check) {
                break;
            }
        }
        if (!check) {
            product += code.substr(start, 1)
        }
    }
    document.getElementById('textarea_output').value = product
}
//Função copiar
function copy() {
    const output = document.getElementById('textarea_output').value
    navigator.clipboard.writeText(output)
    document.getElementById('textarea_output').value = ''
}