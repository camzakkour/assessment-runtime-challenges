let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
// let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')


function isPangram (str) {
    let pangram = false
    str.toUpperCase()
    for(let i= 0; i < str.length;i++) {
        for (let j = 0; j < alphabet.length; j++) {
           if (str[i] = (alphabet[j])) {
                pangram = true
                return pangram
            } else {
                return pangram
            } 
        }
    }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))

// O(n^2)