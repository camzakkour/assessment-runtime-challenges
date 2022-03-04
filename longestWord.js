function findLongestWord (array) {
    let longWord = ''
    for (let i = 0; i < array.length;i++) {
        if (longWord.length < array[i].length) {
            longWord = array[i]
        }
    }
    console.log(longWord.length) 
}

findLongestWord(["hi", "hello"])

// O(n)