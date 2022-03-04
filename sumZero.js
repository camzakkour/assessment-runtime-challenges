function sumZero (array) {
    for (let i = 0; i < array.length; i++) {
        // console.log('hey')
        for (let j = 0; j < array.length; j++) {
            // console.log('hey1')
            if (array[i] + array[j] === 0) {
                // console.log('hey2')
                answer = true
                // console.log(${array[i]} + ${array[j]} = ${sum})
            } else {
                // console.log('hey3')
                answer = false
                // console.log(${array[i]} + ${array[j]} = ${sum})
            }
        }
    }
    console.log(answer)
}

sumZero([1,2,3,-2])

//O(n^2)
