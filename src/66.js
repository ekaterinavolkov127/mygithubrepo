function fibonacci(n) {
    if (n <= 1) return n;
    let prev = 0, current = 1;
    for (let i = 2; i <= n; i++) {
        [prev, current] = [current, prev + current];
    }
    return current;
}

console.log(fibonacci(10));
