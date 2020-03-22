module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();
for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] === '--discard-next') {
        arr.splice((i), 2)
    }

    if (arr[i] === '--discard-prev') {
        arr.splice((i - 1), 2)
    }
    if (arr[i] === '--double-next' ) {
        arr[i] = arr[i + 1]
    }
    if (arr[i] === '--double-prev' ) {
        arr[i] = arr[i - 1]
    }
}

    return arr
};



// if (!Array.isArray(arr)) {throw new Error();}
// let result = [];
// for (let i = 0; i < arr.length-1; i++) {
//     if (arr[i]==='number' && arr[i+1]!=='--discard-prev'){result.push(arr[i])}
//     if (arr[i]==='--discard-next' && arr[i+1]==='number') {result.push(arr[i+1])}
// }
// return result

// transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]


//
// function multiplyBy3(x) {
//     return x * 3;
// }
//
// const result = [1, 2, 3, 4, 5].map(multiplyBy3);
//
// console.log(result);   // выводит [3, 6, 9, 12, 15];

//
// --discard-next excludes the next element of the array from the transformed array.
// --discard-prev excludes the previous element of the array from the transformed array.
// --double-next doubles the next element of the array in the transformed array.
// --double-prev doubles the previous element of the array in the transformed array.
