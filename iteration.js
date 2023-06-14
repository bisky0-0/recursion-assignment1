//Fibonacci sequence with iteration 
function fibonacci(num) {
    //making an Array start with the first two numbers
    let arr = [0, 1];
    if (num == 1) return arr[0];
    if (num == 2) return arr;
    for (let i = 2; i < num; i++) {
        let c = arr[i - 1] + arr[i - 2];
        arr.push(c)
    }
    return arr
}

fibonacci(1);
