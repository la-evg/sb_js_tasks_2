function queue(n, arr) {
    arr.sort((a,b) => a - b);
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(queue(num, array))