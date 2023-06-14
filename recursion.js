//recursion Fibonacci function
let a = 0;
let b = 1;
let arr = [a, b];

function fibonacci(num) {
    if (num > 2) {
        c = a + b
        arr.push(c);
        a = b;
        b = c;
        return fibonacci(num - 1)
    }
    console.log(arr)
}

fibonacci(8)