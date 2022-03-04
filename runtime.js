const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(smallArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(smallArray);
let resultsInsert = perf.stop();


console.log('Results for the smallArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// |Array Name     | Insert Time   | Append Time|
// |---------------|---------------|------------|
// |tinyArray      | 28.625 μs     | 44.959 μs  |
// |smallArray     | 37.334 μs     | 55.292 μs  |
// |mediumArray    | 138.708 μs    | 76.958 μs  |
// |largeArray     | 9.192084 ms   | 612.583 μs |
// |extraLargeArray| 774.500792 ms | 3.174625 ms|

// After reviewing the data of the different arrays and their run time, it would be clear to say that while although the Insert method of .unshift provides a faster runtime when provided w small numbers, as the number begins to increase in value, the runtime of the method begins to exponentially increase. On the other hand, the Append method using .push also seems to be exponentially increasing but at a much lower rate. In terms of which method is "better" for run time, both methods could be used. For a much smaller number, the Insert(.unshift) functionality will provde results faster, but if you were to have a larger number, the Append(.push) function will provide results faster. With more date to be provided we would be able to assure which of these 2 functions is actually acting constantly, linearly, or exponentially.