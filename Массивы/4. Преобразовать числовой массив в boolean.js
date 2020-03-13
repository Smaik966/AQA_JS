let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//arr(num) -> arr(bool)
arr.forEach(function (element, index, array) {
    array[index] = Boolean(array[index]);
});
console.log(arr);

//arr -> boolean
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Boolean(arr));