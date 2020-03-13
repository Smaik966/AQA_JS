let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach(function (element, index, array) {
    array[index] += "hello";
});

console.log(arr);