function hasUniqueCharacters(word) {
    let arr = word.split("")
    let unique = true
    for (let i = 0; i < arr.length; i++) {
        for (let v = i + 1; v < arr.length; v++) {
            if (arr[i] === arr[v]) {
                unique = false
            }
        }
    }
    return unique
}

console.log(hasUniqueCharacters("bob"))

// O(n^2)
