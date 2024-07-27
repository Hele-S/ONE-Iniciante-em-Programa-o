// Aumentar tamanho do input
document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('textarea');
    document.getElementById('textarea_output').style.display = 'none';
    textarea.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
    
})

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

function decrypt() {
    const code = document.getElementById('textarea').value
    const toObject = function (code) {
        let result = Object()
        let lenght = 0
        for (i of code) {
            result[lenght] = i
            lenght++
        }
        return result
    }
    let subject = toObject(code)
    let product = ''
    let target
    for (i in subject) {
        // console.log(i)
        if (subject[i] == 'a') {
            if (aFound(subject, i)) {
                product += 'a'
                target = parseInt(i)
                delete subject[target + 1]
            } else {
                product += (subject[i])
            }
        }
        else if (subject[i] == 'e') {
            if (eFound(subject, i)) {
                product += 'e'
                target = parseInt(i)
                delete subject[target + 1]
                delete subject[target+2]
                delete subject[target+3]
                delete subject[target+4]
            } else {
                product += (subject[i])
            }
        }
        else if (subject[i] == 'i') {
            if (iFound(subject, i)) {
                product += 'i'
                target = parseInt(i)
                delete subject[target + 1]
                delete subject[target + 2]
                delete subject[target + 3]
            } else {
                product += (subject[i])
            }
        }
        else if (subject[i] == 'o') {
            if (oFound(subject, i)) {
                product += 'o'
                target = parseInt(i)
                delete subject[target + 1]
                delete subject[target + 2]
                delete subject[target + 3]
            } else {
                product += (subject[i])
            }
        }
        else if (subject[i] == 'u') {
            if (uFound(subject, i)) {
                product += 'u'
                target = parseInt(i)
                delete subject[target + 1]
                delete subject[target + 2]
                delete subject[target + 3]
            } else {
                product += (subject[i])
            }
        }
        else {
            product += (subject[i])
        }
    }
    document.getElementById('textarea_output').value = product

}

function aFound(subject, iString) {
    let i = parseInt(iString)
    if (subject[i + 1] == 'i') {
        return true
    }
}

function eFound(subject, iString) {
    let i = parseInt(iString)
    if (subject[i + 1] == 'n' && subject[i + 2] == 't' && subject[i + 3] == 'e' && subject[i + 4] == 'r') {
        return true
    }
}

function iFound(subject, iString) {
    let i = parseInt(iString)
    if (subject[i + 1] == 'm' && subject[i + 2] == 'e' && subject[i + 3] == 's') {
        return true
    }
}

function oFound(subject, iString) {
    let i = parseInt(iString)
    if (subject[i + 1] == 'b' && subject[i + 2] == 'e' && subject[i + 3] == 'r') {
        return true
    }
}

function uFound(subject, iString) {
    let i = parseInt(iString)
    if (subject[i + 1] == 'f' && subject[i + 2] == 'a' && subject[i + 3] == 't') {
        return true
    }
}

function copy() {
    const output = document.getElementById('textarea_output').value
    navigator.clipboard.writeText(output)
    document.getElementById('textarea_output').value = ''
    document.getElementById('textarea_output').ariaPlaceholder = 'ssssssssssssss'

    
}