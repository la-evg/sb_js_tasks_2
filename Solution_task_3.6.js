function countString(arr) {
    let count = 0;
    for (let values of arr) {
        if (typeof values[1] === "string") {
            count++
        }
    }
    console.log(`Количество строковых элементов в именованном массиве: ${count}`)
};
countString(array)