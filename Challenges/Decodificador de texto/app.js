//Senhas
const passwords = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
}

//Aumentar tamanho do input
document.addEventListener('DOMContentLoaded', function () {
    textarea_output.style.display = 'none';
    textarea.addEventListener('input', function () {
        this.style.height = (this.scrollHeight) + 'px';
    });
})

//Ajustando o CSS da saída
function heightAdjust(element) {
    if (element.value != "") {
        document.getElementById('copy').style.display = 'block'
        element.style.display = 'block'
        element.style.height = (element.scrollHeight) + 'px';
        document.getElementById('outputPlaceholder').style.display = 'none'
    } else {
        document.getElementById('copy').style.display = 'none'
        element.style.display = 'none'
        document.getElementById('outputPlaceholder').style.display = 'block'
    }
}

//Encriptando a mensagem
function encrypt(passwords) {
    const input = document.getElementById('textarea').value
    const output = document.getElementById('textarea_output')
    let package = ''
     let check = false
    for (i of input) {
        for (k in passwords) {
            if (i == k) {
                package += passwords[k]
                check = true
                break;
            }
        }
        if (!check) {
            package += i
        }
        check = false
    }
    document.getElementById('textarea_output').value = package
    document.getElementById('textarea').value = ''
    heightAdjust(output)
} 

//Resolvendo a mensagem
function decrypt(passwords) {
    const code = document.getElementById('textarea').value
    let product = ''
    let check = false
    let target = undefined
    let start = undefined
    let end = 0

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
    const output = document.getElementById('textarea_output')
    document.getElementById('textarea_output').value = product

    //Ajustando o tamanho da saída
    heightAdjust(output)
}

//Função copiar
function copy() {
    const output = document.getElementById('textarea_output').value
    navigator.clipboard.writeText(output)
    document.getElementById('textarea_output').value = ''
}