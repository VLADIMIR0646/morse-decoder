const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let exprArr = [];
    let result = '';
    for (let i = 0; i < expr.length; i += 10) {
        exprArr.push(expr.slice(i, i + 10))
    }
    for (let i = 0; i < exprArr.length; i++) {
        exprArr[i] = exprArr[i].replaceAll('10', '.').replaceAll('11', '-').replaceAll('00', '');
        if  (exprArr[i] === '**********') {
            result = result + ' ';
        } else {
        result = result + MORSE_TABLE[exprArr[i]]
        }
    }
    return result
}
module.exports = {
    decode
}

