const processText = (text, {uppercase = false, reverse = false, removeSpecialCharacters = false} = {}) => {
    let arr = [...text]
    if(uppercase == true) {
        arr = arr.map(char => char.toUpperCase())
    }

    if(reverse == true) {
        arr = arr.reverse()
    }

    if(removeSpecialCharacters == true) {
        normalChars = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻaąbcćdeęfghijklłmnńoóprsśtuvwxyzźż1234567890"
        arr = arr.filter(char => normalChars.includes(char))
    }
    
    return arr.join('')
}

console.log(processText('qwertyuiop!!!!$$$', {uppercase: true, reverse: true}))
console.log(processText('qwertyuiop!!!!$$$', {reverse: true, removeSpecialCharacters: true}))
console.log(processText('qwertyuiop!!!!$$$', {removeSpecialCharacters: true, uppercase: true}))